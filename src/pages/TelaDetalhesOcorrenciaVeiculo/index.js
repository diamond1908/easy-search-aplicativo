import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState} from 'react'
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { FontAwesome } from '@expo/vector-icons';
import { Modal} from 'react-native';
import styles from './styles';
import axios from 'axios';

export default function TelaDetalhesOcorrencia() {

    const route = useRoute();

    const [idOcorrenciaVeiculo, setIdOcorrenciaVeiculo] = useState(route.params?.idOcorrenciaVeiculo);
    const [ocorrencia, setOcorrencia] = useState([]);

    const [modalEnvolvidos, setModalEnvolvido] = useState(false);
    const [modalSem, setModalSem] = useState(false);

    const [modalVeiculosEnvolvido ,setModalVeiculosEnvolvido] = useState(false);
    const [modalSemVeiculos, setModalSemVeiculos] = useState(false);

    const [modalDeclarante ,setModalDeclarante] = useState(false);

    const [envolvidos, setEnvolvidos] = useState([]);

    const [declarante, setDeclarante] = useState([]);

    const [veiculosEnvolvidos, setVeiculosEnvolvidos] = useState([]);

    const navigation = useNavigation();

    const [carregando, setCarregando] = useState(true);

    const dadosOcorrencia = ocorrencia;
    
    const handleVoltar = () => {
        navigation.goBack();
    };

    function handleOpenModalEnvolvidos(){
        setModalEnvolvido(true);
    }

    function handleOpenModalDeclarante(){
      setModalDeclarante(true);
    }

    function handleOpenModalVeiculosEnvolvidos(){
        setModalVeiculosEnvolvido(true);
    }

    function closeModalEnvolvidos(){
        setModalEnvolvido(false)
    };

    function closeModalDeclarante(){
      setModalDeclarante(false)
    };

    function closeModalVeiculosEnvolvidos(){
        setModalVeiculosEnvolvido(false)
    };

    function openModalSem(){
        setModalSem(true)
    }

    function openModalSemVeiculo(){
        setModalSemVeiculos(true)
    }
  
    function closeModalSem(){
        setModalSem(false)
    }

    function closeModalSemVeiculos(){
        setModalSemVeiculos(false)
    }     
  
    function verificaEnvolvidos() {
      if (envolvidos.length > 0) {
        handleOpenModalEnvolvidos();
      }else{
        openModalSem();
      }
    }

    function verificaDeclarante() {
      if (declarante.length !=0) {
        handleOpenModalDeclarante();
      }
    }

    function verificaVeiculosEnvolvidos() {
      if (veiculosEnvolvidos.length > 0) {
        handleOpenModalVeiculosEnvolvidos();
      }else{
        openModalSemVeiculo();
      }
    }

    useEffect(() => {
      
      const fetchEnvolvidos = async () => {
        try {
          const response = await axios.get(`http://localhost/api-easy_search/verificaEnvolvidos.php?idOcorrenciaVeiculo=${idOcorrenciaVeiculo}`);
          setEnvolvidos(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchEnvolvidos();
    }, []);

    useEffect(() => {
      const fetchOcorrencia = async () => {
        try {
          const response = await axios.get(`http://localhost/api-easy_search/ocorrenciaVeiculo.php?idOcorrenciaVeiculo=${idOcorrenciaVeiculo}`);
          const data = response.data; // Dados da ocorrência
          setOcorrencia(data); // Atualiza o estado da ocorrência com os dados recebidos da API
          setCarregando(false); // Define que o carregamento foi concluído
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchOcorrencia();
    }, [])

    return (
        <Animatable.View animation="fadeInDown" delay={250}>

            <View style={styles.containerNavbar}>
                <Text style={styles.bemVindo}>Ocorrência</Text>
            </View>

            <View style={styles.container}>
            {carregando ? (
              <Text style={styles.modalLoading}>Carregando ocorrências...</Text>
            ) : (
              <FlatList
                style={styles.modalContent}
                data={dadosOcorrencia} // Substitua ocorrencia por dadosOcorrencia
                keyExtractor={(item) => `${item.veiculoID}-${item.idOcorrenciaVeiculo}`}
                renderItem={({ item }) => (
                  <View style={styles.lista} key={`${item.veiculoID}-${item.idOcorrenciaVeiculo}`}>
                    <Text style={styles.apresentarDadosOcorrencia}>ID da Ocorrencia: {item.idOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Descrição da Ocorrencia: {item.descricaoOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Tipo da Ocorrencia: {item.nomeOcorrencia}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Data da Ocorrencia: {item.dataOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Hora da Ocorrencia: {item.horaOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Objetos Envolvidos: {item.objetosOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>CEP da Ocorrencia: {item.cepOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Relato da Ocorrencia: {item.relatoOcorrenciaVeiculo}</Text>
                    <Text style={styles.apresentarDadosOcorrencia}>Veiculo: {item.placaVeiculo}</Text>
                    {/* <TouchableOpacity onPress={verificaEnvolvidos}>
                      <Text style={styles.apresentarDadosOcorrencia}>Cidadãos Envolvidos <FontAwesome name="question-circle" size={20} color="#008080" style={styles.icon} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={verificaVeiculosEnvolvidos}>
                      <Text style={styles.apresentarDadosOcorrencia}>Veiculos Envolvidos <FontAwesome name="question-circle" size={20} color="#008080" style={styles.iconVeiculo} /></Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={verificaDeclarante}>
                      <Text style={styles.apresentarDadosOcorrencia}>Cidadão Declarante <FontAwesome name="question-circle" size={20} color="#008080" style={styles.iconVeiculo} /></Text>
                    </TouchableOpacity> */}
                  </View>                    
                )}
              />

            )}
          </View>

          {/* <Modal
          visible={modalEnvolvidos}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModalEnvolvidos}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Cidadãos Envolvidos</Text>
            {carregando ? (
              <Text style={styles.modalLoading}>Carregando ocorrências...</Text>
            ) : (
                <FlatList
                    style={styles.modalEnvolvidos}
                    data={envolvidos}
                    keyExtractor={(item) => `${item.idCidadao}-${item.idOcorrencia}`}
                    renderItem={({ item }) => (
                        <View style={styles.listaEnvolvidos} key={`${item.idCidadao}-${item.idOcorrencia}`}>
                          <Text style={styles.apresentarDadosEnvolvidos}>Nome: {item.nomeCidadao} {item.sobrenomeCidadao}</Text>
                          <Text style={styles.apresentarDadosEnvolvidos}>CPF: {item.cpfCidadao}</Text>
                        </View>
                      )}
                />

            )}
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModalEnvolvidos}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

        {/* <Modal
          visible={modalDeclarante}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModalDeclarante}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Cidadão Declarante</Text>
            {carregando ? (
              <Text style={styles.modalLoading}>Carregando ocorrências...</Text>
            ) : (
                <FlatList
                    style={styles.modalEnvolvidos}
                    data={declarante}
                    keyExtractor={(item) => `${item.idCidadao}-${item.idOcorrencia}`}
                    renderItem={({ item }) => (
                        <View style={styles.listaEnvolvidos} key={`${item.idCidadao}-${item.idOcorrencia}`}>
                          <Text style={styles.apresentarDadosEnvolvidos}>Nome: {item.nomeCidadao} {item.sobrenomeCidadao}</Text>
                          <Text style={styles.apresentarDadosEnvolvidos}>CPF: {item.cpfCidadao}</Text>
                        </View>
                      )}
                />

            )}
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModalDeclarante}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

        {/* <Modal
          visible={modalVeiculosEnvolvido}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModalVeiculosEnvolvidos}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Veiculos Envolvidos</Text>
            {carregando ? (
              <Text style={styles.modalLoading}>Carregando envolvidos...</Text>
            ) : (
                <FlatList
                    style={styles.modalEnvolvidos}
                    data={veiculosEnvolvidos}
                    keyExtractor={(item) => `${item.idVeiculo}-${item.idOcorrencia}`}
                    renderItem={({ item }) => (
                        <View style={styles.listaEnvolvidos} key={`${item.idVeiculo}-${item.idOcorrencia}`}>
                          <Text style={styles.apresentarDadosEnvolvidos}>Placa: {item.placaVeiculo}</Text>
                          <Text style={styles.apresentarDadosEnvolvidos}>Modelo: {item.nomeModeloVeiculo}</Text>
                          <Text style={styles.apresentarDadosEnvolvidos}>Marca: {item.nomeMarca}</Text>
                          <Text style={styles.apresentarDadosEnvolvidos}>Cor: {item.nomeCor}</Text>
                        </View>
                      )}
                />

            )}
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModalVeiculosEnvolvidos}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

        {/* <Modal visible={modalSem} animationType="fade" transparent>
          <View style={styles.modalContainerSem}>
            <View style={styles.modalContentSem}>
              <Text style={styles.modalTitle}>Cidadãos Envolvidos</Text>
              <Text style={styles.titulosCamposModalSem}>Não há envolvidos nessa ocorrencia</Text>
              <TouchableOpacity style={styles.modalButtonSem} onPress={closeModalSem}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

        {/* <Modal visible={modalSemVeiculos} animationType="fade" transparent>
          <View style={styles.modalContainerSem}>
            <View style={styles.modalContentSem}>
              <Text style={styles.modalTitle}>Veiculos Envolvidos</Text>
              <Text style={styles.titulosCamposModalSem}>Não há Veiculos Envolvidos</Text>
              <TouchableOpacity style={styles.modalButtonSem} onPress={closeModalSemVeiculos}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

        

          <View>
            <TouchableOpacity style={styles.btnVoltar} onPress={handleVoltar}>
                <Text style={styles.btnTextVoltar}>Voltar</Text>
            </TouchableOpacity>
          </View>

        </Animatable.View>
  );
}