import { ProgressBarAndroidComponent, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        width:'100%',
    },
    containerNavbar:{
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        backgroundColor: '#008080',
        height: 60,
        elevation: 3,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,

        // Efeito de Sombra:

        // shadowColor: define a cor da sombra.
        // shadowOffset: define o deslocamento horizontal e vertical da sombra.
        // shadowOpacity: define a opacidade da sombra.
        // shadowRadius: define o raio do desfoque da sombra.
        // elevation (apenas para Android): define a elevação do elemento, que afeta a sombra.

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tituloPagina:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:'26px',
    },
    acordeao:{
        marginTop:'5%',
        width:'80%',
        height:'40px',
        backgroundColor:'rgba(0, 128, 128, 0.6)',
        alignSelf:'center',
        fontSize:'14px',
        fontWeight:'bold',
        borderRadius:50,
    },
    textAcordeao:{
        color:'#fff',
        fontSize:'18px',
        fontWeight:'bold',
        alignSelf:'center',
        justifyContent:'center',
        textAlign:'center',
        marginVertical:'2%',
    },
    cardPrincipal:{
        marginLeft:'3%',
    },
    buttonDadosCidadao:{
        backgroundColor:'#008080',
        width:'105px',
        height:'30px',
        borderRadius:50,
        marginTop:'10px',
        alignSelf:'center',
    },
    textDadosCidadao:{
        alignSelf:'center',
        textAlign:'center',
        justifyContent:'center',
        marginTop:'5%',
        color:'#fff',
        fontWeight:'bold',
        fontSize:'14',
    },
    lista:{
        backgroundColor:'rgba(0, 128, 128, 0.6)',
        width:'80%',
        height:'185px',
        borderRadius:'25px',
        marginBottom:'15px',
        marginTop:'10px',
        alignSelf:'center',

        //Sombra:
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    listaEndereco:{
        backgroundColor:'rgba(0, 128, 128, 0.6)',
        width:'80%',
        height:'260px',
        borderRadius:'25px',
        marginBottom:'15px',
        marginTop:'10px',
        alignSelf:'center',

        //Sombra:
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    apresentarDados:{
        color:'#fff',
        fontSize:'16px',
        fontWeight:'bold',
        margin:'5px',
        paddingTop:'3px',
        paddingBottom:'3px',
    },
    btnVoltar:{
        alignSelf:'center',
        backgroundColor:'#a1a1a1',
        marginTop:'15px',
        marginBottom:'10%',
        width:'20%',
        height:'25px',
        borderRadius:50,
        
    },
    btnTextVoltar:{
        alignSelf:'center',
        marginTop:'3px',
        color:'#fff',
        fontWeight:'bold',
        fontSize:'18',
    },
})