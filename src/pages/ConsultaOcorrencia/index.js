import { View, Text, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native';
import { useNavigation, StackActions  } from '@react-navigation/native';
// import { Modal } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import styles from './styles';

function TelaConsultaOcorrencia() {

    const route = useRoute();
    const navigation = useNavigation();
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const [cpf, setCpf] = useState(route.params?.cpf || '');

    const handleVoltar = () => {
      navigation.dispatch(StackActions.replace('Home'));
    };

    const Accordion = () => {
      const [collapsed, setCollapsed] = useState(false);
    
      const toggleAccordion = () => {
        setCollapsed(!collapsed);
      };
    
      return (
        <View>
          <TouchableOpacity style={styles.acordeao} onPress={toggleAccordion}>
            <Text style={styles.textAcordeao}>Ocorrêcia do Cidadão</Text>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed}>
            <FlatList style={styles.lista}
              data={dados}
              keyExtractor={({id},index)=>id}
              renderItem={({item})=>(
                <View style={styles.cardPrincipal} >
                  <View style={styles.cardDados}>
                    <Text style={styles.apresentarDados}>Nome: {item.nomeCidadao} {item.sobrenomeCidadao}</Text>
                    <Text style={styles.apresentarDados}>E-mail: {item.emailCidadao}</Text>
                    <Text style={styles.apresentarDados}>CPF: {item.cpfCidadao}</Text>
                    <Text style={styles.apresentarDados}>Idade: {item.idadeCidadao}</Text>
                    <Text style={styles.apresentarDados}>Genero: {item.generoCidadao}</Text>
                  </View>
                </View>
              )}
            />
          </Collapsible>
        </View>
      );
    };
    

    useEffect(
      ()=>{
        fetch("http://localhost/api-easy_search/ocorrenciaCidadao.php")
        .then((resp)=>resp.json())
          .then((data)=>{
            // Filtrar os dados com base no CPF
            const cpfFiltrado = data.filter((item) => item.cpfCidadao === cpf);
            setDados(cpfFiltrado);})
          .catch(e=>console.log(e))
          .finally(()=>setCarregando(false))
      },[]
    )

    

  return (
    <Animatable.View style={styles.container} animation="fadeInDown" delay={150}>
      <View>
        <View style={styles.containerNavbar}>
          <Text style={styles.tituloPagina}>Consulta de Dados</Text>
        </View>

        <Accordion/>

        <View>
          <TouchableOpacity style={styles.btnVoltar}>
              <Text style={styles.btnTextVoltar} onPress={handleVoltar}>Voltar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Animatable.View>

  );
}

export default TelaConsultaOcorrencia;