import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#008080",
    },
    containerHeader:{
        marginTop:'14%',
        marginBottom:'8%',
        paddingStart: '5%'
    },
    message:{
        fontSize:28,
        fontWeight:"bold",
        color: "#fff"
    },
    containerForm:{
        backgroundColor: "#fff",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingEnd: '5%',
        paddingStart: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28,
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color:'#000'
    },
    button:{
        backgroundColor: '#008080',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonVoltar:{
        backgroundColor: '#AFAFAF',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 18,
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText:{
        color:'#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonRegister:{
        marginTop: 14,
        alignSelf: 'center',
    },
    registerText:{
        color: '#1C1C1C'
    },
    colorInput:{
        color:'#000'
    },

    // Estilos de "CPF ou Senha Incorreto:
    mensagemErro: {
        color: "red",
        fontSize: 20,
        marginTop: 8,
    },
    
})