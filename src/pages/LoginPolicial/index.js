import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation} from '@react-navigation/native'
import {useState} from 'react'
import styles from "./styles";
import { set } from "react-hook-form";

export default function LoginPolicial() {

    const navigation = useNavigation();

    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const [mostrarMensagem, setMostrarMensagem] = useState(false);

    async function headerLoginPolicial() {
        try {
          // Faça uma solicitação de API para recuperar dados do usuário do banco de dados
          const response = await fetch('http://localhost/api-easy_search/validacaoLogin.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              cpf,
              senha,
            }),
          });
    
          if (response.ok) {
            // User data retrieved successfully
            const data = await response.json();
    
            if (data.valid) {
              // Valid credentials, navigate to the Home screen
              navigation.navigate('Home');
            } else {
              // Invalid credentials, display error message
              setMostrarMensagem(true);
              setSenha('');
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

    

    return(
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-Vindo(a) Policial</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>CPF</Text>
                <TextInputMask
                    type={'cpf'}
                    options={{
                      format: '999.999.999-99',
                      stripMask: true
                    }}
                    placeholder="CPF"
                    onChangeText={(text) => setCpf(text)}
                    value={cpf}
                    style={styles.input}
                />
                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Senha"
                    onChangeText={setSenha}
                    value={senha}
                    style={styles.input}
                    secureTextEntry={true}
                />

                {/* Mostar CPF ou senha incorrta */}
                {mostrarMensagem && (<Text style={styles.mensagemErro}>CPF ou Senha incorretos!</Text>)}

                <TouchableOpacity style={styles.button} onPress={headerLoginPolicial}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonVoltar} onPress={ () => navigation.navigate('Welcome')}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                
            </Animatable.View>

        </View>
    )
}
