import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerNavbar: {
        flexDirection: 'row',
        justifyContent:'center',
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

    bemVindo:{
        color:'#fff',
        fontWeight:'bold',
        alignItems:'center',
        fontSize:24,
        justifyContent:'center',
    },

    inputOcorrencia:{
        borderColor:'red',
    },

    buttonVeiculo: {
        backgroundColor: '#008080',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '65%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop:'85%',
    },
    iconeCarro:{
        color:'#ffffff',
        marginRight: 10,
    },

    buttonCidadao:{
        backgroundColor: '#008080',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '65%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop:'5%',
    },
    iconeCidadao:{
        color:'#ffffff',
        marginRight: 10,
    },
    mensagemErro: {
        color: "red",
        fontSize: 16,
        marginTop: '2px',
        marginBottom:'10px',
        paddingLeft:'35px',
    },

    // O comando "alignSelf" coloca o Botão no meio da tela.

    buttonTextVeiculo: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonTextCidadao:{
        color:'#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
        marginTop: 4,
    },

    buttonContainer: {
        marginTop:'50%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        width:200,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:"space-between",
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    apresentarDadosOcorrencia:{
        color:'#000',
        fontSize:'16px',
        fontWeight:'bold',
        margin:'5px',
        paddingTop:1,
        paddingBottom:'3px',
    },
    apresentarDadosEnvolvidos:{
        color:'#000',
        fontSize:'20px',
        fontWeight:'bold',
        margin:'5px',
        paddingTop:1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    modalContainer: {
        flex: 1,
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    modalContent: {
        paddingLeft:2.5,
        paddingRight:2.5,
        paddingStart:2,
        height:'40%',
        borderRadius: 10,
        width:'90%',
    },
    modalEnvolvidos: {
        backgroundColor:'rgba(0, 0, 0, 0.6)',
        paddingLeft:2.5,
        paddingRight:2.5,
        paddingStart:2,
        maxHeight:'80%',
        borderRadius: 10,
        width:'90%',
    },
    modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 25,
        color:'#212121',
        marginTop:15,
        alignSelf:'center'
    },
    modalButton: {
        backgroundColor: '#008080',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width:'150%',
        marginTop:'15%',
        alignSelf:'center',
        justifyContent:'center',
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
    lista:{
        backgroundColor:'rgb(255, 255, 255 )',
        justifyContent:'center',
        marginTop:'5px',
        marginBottom:'5px',
        padding:'5px',
        // height:'30%',
        width:'100%',
        borderRadius:10,
    },
    listaEnvolvidos:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignSelf:'center',
        marginTop:'5px',
        padding:'10px',
        marginBottom:'5px',
        width:'80%',
        borderRadius:10,
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
        padding:15,
        height:'20%',
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
        marginTop:5,
        alignSlf:'center',
        marginBottom:10,
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
        marginTop:'5px',
        marginBottom:'15px',
    },
    containerDados:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:{
        padding:'35px',
    },
    iconVeiculo:{
        padding:'41px',
    },  


})
