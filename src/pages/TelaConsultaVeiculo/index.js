import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation, StackActions, useRoute } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import Collapsible from 'react-native-collapsible';
import styles from './styles';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';

function TelaConsultaVeiculo() {

  const route = useRoute();
  const navigation = useNavigation();

  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const [placa, setPlaca] = useState(route.params?.placa || '');

  const [carregandoOcorrencias, setCarregandoOcorrencias] = useState(true);

  // const [modalMulta, setModalMulta] = useState(false);
  const [modalSem, setModalSem] = useState(false);

  const [modalOcorrencia, setModalOcorrencia] = useState(false);

  // const [multa, setMulta] = useState([]);

  const [ocorrencia, setOcorrencia] = useState(null);

  // const openModalMulta = () => {
  //   setModalMulta(true);
  //   console.log('Abrindo o modal de multa');
  // };

  // const closeModalMulta = () => {
  //   setModalMulta(false);
  // };

  const openModalSem = () => {
    setModalSem(true);
  };

  const closeModalSem = () => {
    setModalSem(false);
  };

  const openModalOcorrencia = () => {
    setModalOcorrencia(true);
    console.log('Abrindo o modal de Ocorrencia');
  };

  const closeModalOcorrencia = () => {
    setModalOcorrencia(false);
  };

  const handleVoltar = () => {
    navigation.dispatch(StackActions.replace('Home'));
  };

  const enviarOcorrencia = (idOcorrenciaVeiculo) => {
    fetch(`http://localhost/api-easy_search/ocorrenciaVeiculo.php?idOcorrenciaVeiculo=${idOcorrenciaVeiculo}`, {
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
  
    navigation.navigate('TeladetalhesOcorrenciaVeiculo', { idOcorrenciaVeiculo });
    closeModalOcorrencia();
  };

  const Accordion = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleAccordion = () => {
      setCollapsed(!collapsed);
    };

    return (
      <View>
        <TouchableOpacity style={styles.acordeao} onPress={toggleAccordion}>
          <Text style={styles.textAcordeao}>Dados do Veiculo</Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed}>
          <FlatList
            style={styles.lista}
            data={dados}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.cardPrincipal}>
                <View style={styles.cardDados}>
                  <Text style={styles.apresentarDados}>Placa: {item.placaVeiculo}</Text>
                  <Text style={styles.apresentarDados}>Cor: {item.nomeCor}</Text>
                  <Text style={styles.apresentarDados}>Modelo: {item.nomeModeloVeiculo}</Text>
                  <Text style={styles.apresentarDados}>Marca: {item.nomeMarca}</Text>
                  <Text style={styles.apresentarDados}>Combustivel: {item.TipoCombustivel}</Text>
                  <Text style={styles.apresentarDados}>Tipo do Veiculo: {item.nomeTipoVeiculo}</Text>
                  <Text style={styles.apresentarDados}>Eixo: {item.tipoEixoVeiculo}</Text>
                  <View style={styles.containerDados}>
                      <Text style={styles.apresentarDados}>CPF do Dono: </Text>
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
                </View>
              </View>
            )}
          />
        </Collapsible>
      </View>
    );
  };

  useEffect(() => {
    fetch(`http://localhost/api-easy_search/veiculo.php?placa=${placa}`)
      .then((resp) => resp.json())
      .then((data) => {
        // Filter the data based on the Placa
        const placaFiltrado = data.filter((item) => item.placaVeiculo === (route.params?.placa ?? ''));
        setDados(placaFiltrado);
      })
      .catch((e) => console.log(e))
      .finally(() => setCarregando(false));
  }, [placa]);

  // useEffect(() => {
  //   fetch(`http://localhost/api-easy_search/multaVeiculo.php?placaVeiculo=${placa}`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setMulta(data);
  //     })
  //     .catch((e) => console.log(e))
  //     .finally(() => setCarregandoOcorrencias(false));
  // }, []);

  // function verificaMulta() {
  //   if (multa.length > 0) {
  //     openModalMulta();
  //   } else {
  //     openModalSem();
  //   }
  // }

  useEffect(() => {
    fetch(`http://localhost/api-easy_search/ocorrenciasVeiculo.php?placaVeiculo=${placa}`)
      .then((resp) => resp.json())
      .then((data) => {
        setOcorrencia(data); // Atualiza o estado 'ocorrencia' com os dados recebidos da API
      })
      .catch((e) => console.log(e))
      .finally(() => setCarregandoOcorrencias(false));
  }, []);




  function verificaOcorrencia() {
  if (ocorrencia.length > 0) {
     openModalOcorrencia();
   }else {
    openModalSem();
   }
  }

  

  return (
    <Animatable.View style={styles.container} animation="fadeInDown" delay={150}>
      <View>
        <View style={styles.containerNavbar}>
          <Text style={styles.tituloPagina}>Consulta de Dados</Text>
        </View>

        <Accordion />

        {/* <TouchableOpacity style={styles.btnMulta} onPress={verificaMulta}>
          <Text style={styles.btnTextOcorrencia}>Consultar Multa</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.btnOcorrencia} onPress={verificaOcorrencia}>
          <Text style={styles.btnTextOcorrencia}>Consultar Ocorrencias</Text>
        </TouchableOpacity>

        <Modal
          visible={modalOcorrencia}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModalOcorrencia}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Ocorrências do Veiculo</Text>
            {carregandoOcorrencias ? (
              <Text style={styles.modalLoading}>Carregando ocorrências...</Text>
            ) : (
              <FlatList
                style={styles.modalContent}
                data={ocorrencia}
                keyExtractor={(item) => item.idOcorrenciaVeiculo} // Use toString() to convert the ID to a string
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => enviarOcorrencia(item.idOcorrenciaVeiculo)}>
                    <View style={styles.listaModal} key={item.idOcorrenciaVeiculo}>
                      <Text style={styles.titulosCamposModal}>Descrição:</Text>
                      <Text style={styles.apresentarDadosOcorrencia}>{item.descricaoOcorrenciaVeiculo}</Text>
               
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

        {/* <Modal
          visible={modalMulta}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModalMulta}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Multa do Veiculo</Text>
            {carregandoOcorrencias ? (
              <Text style={styles.modalLoading}>Carregando ocorrências...</Text>
            ) : (
              <FlatList
                style={styles.modalContent}
                data={multa}
                keyExtractor={(item) => `${item.idVeiculo}-${item.idMulta}`}
                renderItem={({ item }) => (
                  <View style={styles.listaModal} key={`${item.idVeiculo}-${item.idMulta}`}>
                    <Text style={styles.titulosCamposModal}>Descrição:</Text>
                    <Text style={styles.titulosCamposModal}>{item.motivoMulta}</Text>
                    <Text style={styles.titulosCamposModal}>Valor: {item.valorMulta}</Text>
                    <Text style={styles.titulosCamposModal}>Hora: {item.horaMulta}</Text>
                    <Text style={styles.titulosCamposModal}>Data: {item.dataMulta}</Text>
                    <Text style={styles.titulosCamposModal}>CEP: {item.cepMulta}</Text>
                    <Text style={styles.titulosCamposModal}>Logradouro:</Text>
                    <Text style={styles.titulosCamposModal}>{item.logradouroMulta}</Text>
                    <Text style={styles.titulosCamposModal}>Bairro: {item.bairroMulta}</Text>
                    <Text style={styles.titulosCamposModal}>Cidade: {item.cidadeMulta}</Text>
                  </View>
                )}
              />
            )}
            <View style={styles.viewButton}>
              <TouchableOpacity style={styles.modalButton} onPress={closeModalMulta}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}

        <Modal visible={modalSem} animationType="fade" transparent>
          <View style={styles.modalContainerSem}>
            <View style={styles.modalContentSem}>
              <Text style={styles.modalTitle}>Consulta</Text>
              <Text style={styles.titulosCamposModalSem}>O Veiculo não possui</Text>
              <TouchableOpacity style={styles.modalButtonSem} onPress={closeModalSem}>
                <Text style={styles.modalButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View>
          <TouchableOpacity style={styles.btnVoltar}>
            <Text style={styles.btnTextVoltar} onPress={handleVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );
}

export default TelaConsultaVeiculo;