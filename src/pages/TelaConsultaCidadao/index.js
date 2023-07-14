import { View, Text, FlatList } from 'react-native';
import moment from 'moment';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation, StackActions  } from '@react-navigation/native';
import { Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';

function TelaConsultaCidadao() {

    const route = useRoute();
    const navigation = useNavigation();

    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [modalOcorrencia, setModalOcorrencia] = useState(false);
    const [modalSem, setModalSem] = useState(false);

    const [ocorrencias, setOcorrencias] = useState([]);
    const [carregandoOcorrencias, setCarregandoOcorrencias] = useState(true);
    
    const [cpf, setCpf] = useState(route.params?.cpf || '');

    const [mensagem, setMensagem] = useState();
    const [situacao, setSituacao] = useState(null);

    const handleVoltar = () => {
      navigation.dispatch(StackActions.replace('Home'));
    };

    const enviarOcorrencia = (idOcorrencia) => {
      fetch(`http://localhost/api-easy_search/ocorrencias.php?idOcorrencia=${idOcorrencia}`, {
        method: 'GET',
      })
        .then((response) => {
          // Verificar o status da resposta da API
          if (response.ok) {
            // A resposta foi bem-sucedida
            return response.json();
          } else {
            // A resposta foi um erro
            throw new Error('Erro na requisição');
          }
        })
        .then((data) => {
          // Processar os dados da resposta da API
          console.log(data);
        })
        .catch((error) => {
          // Tratar erros
          console.error(error);
        });
    
      navigation.navigate('TelaDetalhesOcorrencia', { idOcorrencia });
      closeModalOcorrencia();
    };
    


    function openModalOcorrencia(){
      setModalOcorrencia(true)
    }

    function closeModalOcorrencia(){
      setModalOcorrencia(false)
    }

    function openModalSem(){
      setModalSem(true)
    }

    function closeModalSem(){
      setModalSem(false)
    }
   
    const Accordion = () => {
      const [collapsed, setCollapsed] = useState(false);
    
      const toggleAccordion = () => {
        setCollapsed(!collapsed);
      };
    
      return (
        <View>
          <TouchableOpacity style={styles.acordeao} onPress={toggleAccordion}>
            <Text style={styles.textAcordeao}>Dados do Cidadão</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <FlatList style={styles.lista}
              data={dados}
              keyExtractor={({id},index)=>`{id}-${index}`}
              renderItem={({item})=>(
                <View style={styles.cardPrincipal} >
                  <View style={styles.cardDados}>
                    <Text style={styles.apresentarDados}>Nome: {item.nomeCidadao} {item.sobrenomeCidadao}</Text>
                    <Text style={styles.apresentarDados}>E-mail: {item.emailCidadao}</Text>
                    <View style={styles.containerDados}>
                      <Text style={styles.apresentarDados}>CPF: </Text>
                      <TextInputMask
                          style={styles.apresentarDados}
                          type={'cpf'}
                          value={item.cpfCidadao}
                          options={{
                            maskType: 'BRL',
                            withDDD: true,
                            dddMask: '(99) ',
                          }}
                          editable={false}
                        />
                      </View>
                    <Text style={styles.apresentarDados}>Data de Nascimento: {moment(item.DataNascCidadao).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.apresentarDados}>Genero: {item.generoCidadao}</Text>
                    <Text style={styles.apresentarDados}>Situação: {mensagem} {icon}</Text>
                  </View>
                </View>
              )}
            />
          </Collapsible>
        </View>
      );
    };

    const AccordionEndereco = () => {
      const [collapsed, setCollapsed] = useState(false);
    
      const toggleAccordion = () => {
        setCollapsed(!collapsed);
      };
    
      return (
        <View>
          <TouchableOpacity style={styles.acordeao} onPress={toggleAccordion}>
            <Text style={styles.textAcordeao}>Endereço do Cidadão</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <FlatList style={styles.listaEndereco}
              data={dados}
              keyExtractor={({id},index)=>`{id}-${index}`}
              renderItem={({item})=>(
                <View style={styles.cardPrincipal} >
                  <View style={styles.cardDados}>
                    <Text style={styles.apresentarDados}>Logradouro: {item.logradouroCidadao}</Text>
                    <Text style={styles.apresentarDados}>Número: {item.numLogCidadao}</Text>
                    <Text style={styles.apresentarDados}>CEP: {item.cepCidadao}</Text>
                    <Text style={styles.apresentarDados}>Complemento: {item.complementoCidadao}</Text>
                    <Text style={styles.apresentarDados}>Bairro: {item.bairroCidadao}</Text>
                    <Text style={styles.apresentarDados}>Cidade: {item.cidadeCidadao}</Text>
                  </View>
                </View>
              )}
            />
          </Collapsible>
        </View>
      );
    };

    useEffect(() => {
      fetch("http://localhost/api-easy_search/cidadao.php")
        .then((resp) => resp.json())
        .then((data) => {
          // Filtrar os dados com base no CPF
          const cpfFiltrado = data.filter((item) => item.cpfCidadao === cpf);
          setDados(cpfFiltrado);
    
          // Verificar o resultado do filtro
          if (cpfFiltrado.length === 0) {
            setMensagem("CPF não encontrado");
          } else {
            const idSituacao = parseInt(cpfFiltrado[0].idSituacao, 10); // Converter para número
            if (idSituacao === 1) {
              setMensagem("Procurado");
              setSituacao("Procurado");
            } else if (idSituacao === 2) {
              setMensagem("Sem Pendencia");
              setSituacao("Sem Pendencia");
            } else if (idSituacao === null) {
              setMensagem("A situação é Desconhecida");
              setSituacao("Sei lá");
            } else {
              setMensagem("Situação desconhecida");
            }
          }
        })
        .catch((e) => console.log(e))
        .finally(() => setCarregando(false));
    }, []);

    const icon =
    situacao === "Procurado" ? (
      <FontAwesome name="exclamation-triangle" size={24} color="red" />
    ) : situacao === null ? (
      <FontAwesome name="clock" size={24} color="orange" />
    ) : situacao === "Sem Pendencia" ? (
      <FontAwesome name="check" size={24} color="green" />
    ) : null;
  
    
    

  useEffect(() => {
    fetch(`http://localhost/api-easy_search/ocorrenciasCidadao.php?cpfCidadao=${cpf}`)
      .then((resp) => resp.json())
      .then((data) => {
        setOcorrencias(data);
      })
      .catch((e) => console.log(e))
      .finally(() => setCarregandoOcorrencias(false));
  }, []);

  function verificaOcorrencia() {
    if (ocorrencias.length > 0) {
      openModalOcorrencia();
    } else {
      openModalSem();
    }
  }


  return (
    <Animatable.View style={styles.container} animation="fadeInDown" delay={150}>
      <View>
        <View style={styles.containerNavbar}>
          <Text style={styles.tituloPagina}>Consulta de Dados</Text>
        </View>

        <Accordion/>
        <AccordionEndereco/>

        <TouchableOpacity style={styles.btnOcorrencia} onPress={verificaOcorrencia}>
            <Text style={styles.btnTextOcorrencia}>Consultar Ocorrêcia</Text>
        </TouchableOpacity> 

        <Modal
          visible={modalOcorrencia}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModalOcorrencia}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Ocorrências do Cidadão</Text>
            {carregandoOcorrencias ? (
              <Text style={styles.modalLoading}>Carregando ocorrências...</Text>
            ) : (
              <FlatList 
                style={styles.modalContent}
                data={ocorrencias}
                keyExtractor={(item) => `${item.idCidadao}-${item.idOcorrencia}`}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() =>enviarOcorrencia(item.idOcorrencia)}>
                    <View style={styles.listaModal} key={`${item.idCidadao}-${item.idOcorrencia}`}>
                      <Text style={styles.titulosCamposModal}>Descrição:</Text>
                      <Text style={styles.apresentarDadosOcorrencia}>{item.descricaoOcorrencia}</Text>
                      <FontAwesome name="question-circle" size={20} color="#008080" style={styles.icon} />
                    </View>
                  </TouchableOpacity>
                )}
              />
            )}
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModalOcorrencia}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal visible={modalSem} animationType="fade" transparent>
          <View style={styles.modalContainerSem}>
            <View style={styles.modalContentSem}>
              <Text style={styles.modalTitle}>Ocorrencias</Text>
              <Text style={styles.titulosCamposModalSem}>O cidadão não possui Ocorrencias</Text>
              <TouchableOpacity style={styles.modalButtonSem} onPress={closeModalSem}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View>
          <TouchableOpacity style={styles.btnVoltar}  onPress={handleVoltar}>
            <Text style={styles.btnTextVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>

      </View>
    </Animatable.View>

  );
}

export default TelaConsultaCidadao;