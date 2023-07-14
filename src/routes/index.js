import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome';
import ConsultaOcorrencia from '../pages/ConsultaOcorrencia';
import LoginPolicial from '../pages/LoginPolicial';
import Home from '../pages/Home';
import TelaConsultaCidadao from '../pages/TelaConsultaCidadao'
import TelaConsultaVeiculo from '../pages/TelaConsultaVeiculo';
import TelaDetalhesOcorrencia from '../pages/TelaDetalhesOcorrencia';
import TelaDetalhesOcorrenciaVeiculo from '../pages/TelaDetalhesOcorrenciaVeiculo';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Welcome'
            component={Welcome}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name='ConsultaOcorrencia'
            component={ConsultaOcorrencia}
            options={{ headerShown: false}}
            />

            <Stack.Screen
            name='Login Policial'
            component={LoginPolicial}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='Home'
            component={Home}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='TelaConsultaCidadao'
            component={TelaConsultaCidadao}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='TelaConsultaVeiculo'
            component={TelaConsultaVeiculo}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='TelaDetalhesOcorrencia'
            component={TelaDetalhesOcorrencia}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name='TeladetalhesOcorrenciaVeiculo'
            component={TelaDetalhesOcorrenciaVeiculo}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}
