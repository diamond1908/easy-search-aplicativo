import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react'
import { useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { Modal} from 'react-native';
import styles from './styles';
import { TextInput } from 'react-native';
import axios from 'axios';

export default function NavBar({ navigation }) {

    const [tela, setTela] = useState(false);
    const [dados, setDados] = useState([]);
    const route = useRoute();

    //Constantes para definir a cituação inicial dos Modais.
    const [modalVisibleVeiculo, setModalVisibleVeiculo] = useState(false);
    const [modalVisibleCidadao, setModalVisibleCidadao] = useState(false);

    const [array1, setArray1] = useState([]);
    const [array2, setArray2] = useState([]);

    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mostrarMensagemPlaca, setMostrarMensagemPlaca] = useState(false);

    const [carregando, setCarregando] = useState(true);

    // Abrir o Modal de consulta do Cidadão.
    const handleOpenModaCidadao = () => {
        setModalVisibleCidadao(true)
    }
    //Fechar o Modal de consulta do Cidadão.
    const handleCloseModalCidadao = () => {
        setModalVisibleCidadao(false);
        setMostrarMensagem(false);
        setCpf('')
    }
    //Abrir o Modal de consulta do Veículo.
    const handleOpenModalVeiculo = () => {
        setModalVisibleVeiculo(true);
    };
    //Fechar o Modal de consulta do Veículo.
    const handleCloseModalVeiculo = () => {
        setModalVisibleVeiculo(false);
        setMostrarMensagemPlaca(false);
        setPlaca('');
        
    };

    //Controle de efeito para verificar o cidadão.
    useEffect(
        ()=>{
            fetch("http://localhost/api-easy_search/verificaCPF.php")
            .then((resp)=>resp.json())
                .then((data)=>{setDados(data)})
                .catch(e=>console.log(e))
                .finally(()=>setCarregando(false))
        },[]
    )
    // Pertence a verificação do Cidadão.
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('');
            setArray1(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

    //Controle de efeito para verificar o veiceulo.
    useEffect(
        ()=>{
            fetch("http://localhost/api-easy_search/verificaVeiculo.php")
            .then((resp)=>resp.json())
                .then((data)=>{setDados(data)})
                .catch(e=>console.log(e))
                .finally(()=>setCarregando(false))
        },[]
    )

    // Pertence a verificação do veiculo.
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('');
            setArray2(response.dataVeiculo);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchData();
      }, []);

    async function verificarValorVeiculo() {
      try {
        // Faça uma solicitação de API para recuperar dados do veiculo do banco de dados
        const response = await fetch('http://localhost/api-easy_search/verificaVeiculo.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            placa
          }),
        });
  
        if (response.ok) {
          // Dados do veiculo recuperados com sucesso
          const data = await response.json();
  
          if (data.valid) {
            // Valid credentials, navigate to the Home screen
            navigation.navigate('Home');
          } else {
            // Invalid credentials, display error message
            setMostrarMensagem(true);
          }
        } else {
          // Handle the error response
          console.error('Error:', response.status);
        }
      } catch (error) {
        // Handle any network or other errors
        console.error('Error:', error);
      }
    }
    const enviarPlaca = async (placa) => {
      try {
        const response = await fetch('http://localhost/api-easy_search/verificaVeiculo.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ placa: placa }),
        });
  
        const data = await response.json();
  
        console.log(data);
  
        verificarValorVeiculo();
  
        if (data.exists === true) {
          navigation.navigate('TelaConsultaVeiculo', { placa: placa });
          setModalVisibleVeiculo(false);
        } else {
          console.log('Errado');
          {setMostrarMensagemPlaca && (<Text style={styles.mensagemErro}>Placa não encontrada!</Text>)}
          setMostrarMensagemPlaca(true);
          setPlaca('')
        }
      } catch (error) {
        console.error(error);
      }
  };

  const verificarValor = async () => {
    try {
      const response = await axios.get('http://localhost/api-easy_search/verificaCPF.php');
      const valorRecebido = response.data; // Supondo que o arquivo PHP retorna o valor booleano diretamente
  
      // Atribuir o valor à variável no estado do componente
      if (valorRecebido) {
        setTela(1);
      } else {
        setTela(0);
      }
    } catch (error) {
      console.error(error);
    }
  };

    const enviarCPF = async (cpf) => {
      try {
        const response = await fetch('http://localhost/api-easy_search/verificaCPF.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cpf: cpf }),
        });
  
        const data = await response.json();
  
        console.log(data.exists);
  
        verificarValor();
  
        if (data.exists === true) {
          navigation.navigate('TelaConsultaCidadao', {cpf: cpf});
          setModalVisibleCidadao(false);
        } else {
          console.log('Errado');
          {mostrarMensagem && (<Text style={styles.mensagemErro}>CPF não encontrado!</Text>)}
          setMostrarMensagem(true);
          setCpf('')
        }
      } catch (error) {
        console.error(error);
      }

  };
  
    const [cpf, setCpf] = useState('');
    const [placa, setPlaca] = useState('');
    
    return (
        <Animatable.View animation="fadeInDown" delay={250}>
            <View style={styles.containerNavbar}>
              <Text style={styles.bemVindo}>Bem-vindo</Text>
            </View>

            <View style={styles.container}>

                {/* Botão para consultar a placa do veiculo. */}
                <View style={styles.buttonVeiculo}>
                    <TouchableOpacity onPress={handleOpenModalVeiculo}>
                      
                      <Text style={styles.buttonTextVeiculo}><FontAwesome name="car" size={20} style={styles.iconeCarro} />Consultar Veículo</Text>
                    </TouchableOpacity>
                </View>

                {/* Botão para consultar o documneto do cidadão.*/}
                <View style={styles.buttonCidadao}>
                    <TouchableOpacity onPress={handleOpenModaCidadao}>
                        <Text style={styles.buttonTextCidadao}><FontAwesome name='file' size={20} style={styles.iconeCidadao}/>Consultar Documento</Text>
                    </TouchableOpacity>
                </View>

                {/*Modal para a consulta do veículo.*/}
                <Modal visible={modalVisibleVeiculo} animationType="fade" transparent>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Consultar Veículo</Text>
                            <View style={styles.containerForm}>
                                <Text style={styles.titulosCampos}>Placa do Veículo</Text>
                                <TextInput
                                    style={styles.estiloInput}
                                    placeholder="Placa do Veículo"
                                    onChangeText={setPlaca}
                                    value={placa}
                                />
                            </View>
                            {mostrarMensagemPlaca && (<Text style={styles.mensagemErro}>Placa não encontrada!</Text>)}
                            <TouchableOpacity style={styles.modalButton} onPress={() => enviarPlaca(placa)}>
                                <Text style={styles.modalButtonText}>Consultar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModalVeiculo}>
                                <Text style={styles.modalButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/*Modal para a consulta do documento.*/}
                <Modal visible={modalVisibleCidadao} animationType="fade" transparent>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Consultar Documento</Text>
                            <View style={styles.containerForm}>
                                <Text style={styles.titulosCampos}>CPF do Cidadão</Text>
                                <TextInputMask
                                    style={styles.estiloInput}                                    
                                    type={'cpf'}
                                    options={{
                                      format: '999.999.999-99',
                                      stripMask: true
                                    }}
                                    placeholder="CPF"
                                    onChangeText={(text) => setCpf(text)}
                                    value={cpf}
                                />
                            </View>
                            {mostrarMensagem && (<Text style={styles.mensagemErro}>CPF não encontrado!</Text>)}
                            <TouchableOpacity style={styles.modalButton} onPress={() => enviarCPF(cpf)}>
                                <Text style={styles.modalButtonText}>Consultar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModalCidadao}>
                                <Text style={styles.modalButtonText}>Fechar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </Animatable.View>
  );
}