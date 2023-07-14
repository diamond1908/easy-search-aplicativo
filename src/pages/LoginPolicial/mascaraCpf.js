import React, { useState } from 'react';
import { Text, TextInput } from 'react-native';
import styles from './styles';

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

function CPFInput() {
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');

  const handleCPFChange = (event) => {
    const inputValue = event.target.value;
    setCPF(formattedValue);
  };

  const formatCPF = (value) => {
    if (value.length <= 3) {
      return value;
    } else if (value.length <= 6) {
      return value.slice(0, 3) + '.' + value.slice(3);
    } else if (value.length <= 9) {
      return value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6);
    } else {
      return value.slice(0, 3) + '.' + value.slice(3, 6) + '.' + value.slice(6, 9) + '-' + value.slice(9);
    }
  };

  return (
    <>
    <Text style={styles.title}>CPF</Text>
    <TextInput
        style={styles.input}
        type="text"
        id="cpf"
        value={cpf}
        onChange={handleCPFChange}
        placeholder="CPF"
    />
    <Text style={styles.title}>Senha</Text>
        <TextInput
        placeholder="Senha"
        onChangeText={setSenha}
        value={senha}
        style={styles.input}
        secureTextEntry={true}
    />
    </>
  );
}

export default CPFInput;