import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function Welcome() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <View sytele={styles.containerLogo}>
                <Animatable.Image 
                    animation='flipInY'
                    source={require('../../assets/logo provisoria.png')}
                    style={{height: 250, width: 250}}
                    resizeMode='contain'
                    />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Agilize o processo de revista</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.buttonPolicial} onPress={ () =>navigation.navigate('Login Policial')}>
                    <Text style={styles.buttonText}>Acessar como Policial</Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    )
}
