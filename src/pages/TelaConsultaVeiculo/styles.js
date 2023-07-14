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
        width:'75%',
        height:'320px',
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
    apresentarDadosOcorrencia:{
        color:'#000',
        fontSize:'16px',
        fontWeight:'bold',
        margin:'5px',
        paddingTop:1,
        paddingBottom:'3px',
        alignSelf:'center',
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
    btnMulta:{
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'#008080',
        marginTop:'15px',
        width:'75%',
        height:'35px',
        borderRadius:50,
    },
    btnOcorrencia:{
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'#008080',
        marginTop:'15px',
        marginBottom:'10%',
        width:'75%',
        height:'35px',
        borderRadius:50,
    },
    btnTextOcorrencia:{
        alignSelf:'center',
        color:'#fff',
        fontWeight:'bold',
        fontSize:'24',
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    modalContent: {
        // alignSelf:'center',
        // margin:15,
        // maxHeight:'80%',
        borderRadius:10,
        padding:15,
        width:'75%',
        backgroundColor:'#a1a1a1',
        // marginBottom:'5px',
        // marginTop:'15px',

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
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'#212121',
        marginTop:10,
        marginBottom:'15px',
        alignSelf:'center'
    },
    modalButton: {
        backgroundColor: '#008080',
        padding: 5,
        borderRadius: 5,
        marginTop: 25,
        width:'70%',
        alignSelf:'center',
        justifyContent:'center',
    },

    viewButton:{
        width:'50%',
        height:'10%',
    },

    listaModal:{
        backgroundColor:'rgb(255, 255, 255 )',
        justifyContent:'center',
        marginTop:'5px',
        marginBottom:'5px',
        padding:'5px',
        // height:'30%',
        width:'100%',
        borderRadius:10,
    },

    titulosCamposModal:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:'5px',
        marginBottom:'2px',
    },

    modalButtonText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    titulosCampos:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:12,
        color:'#212121',
        justifyContent:'center',
        alignSelf:'center',

    },

    modalContainerSem:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'rgba(161, 161, 161, 0.5)',
    },
    modalContentSem:{
        alignSelf:'center',
        margin:15,
        borderRadius:10,
        padding:10,
        height:'15%',
        width:'75%',
        backgroundColor:'#fff',
        marginBottom:'35px',
        marginTop:'35px',

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
    modalTitleSem: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'#212121',
        // marginTop:5,
        alignSelf:'center'
    },
    modalButtonSem: {
        backgroundColor: '#008080',
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        width:'70%',
        alignSelf:'center',
        justifyContent:'center',
    },
    titulosCamposModalSem:{
        color:'#000',
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        // marginTop:'5px',
        marginBottom:'5px',
    },
    containerDados: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginBottom: ,
    },
    icon:{
        alignSelf:'center',
    }, 
})