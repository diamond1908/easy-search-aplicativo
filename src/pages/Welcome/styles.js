import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#4F4F4F',
    },
    containerLogo:{
        flex: 2,
        backgroundColor:'#4F4F4F',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        height: 100        
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        alignSelf:'center'
    },
    text:{
        color:'#000',
        fontSize:18,
        alignSelf:'center',
        fontWeight:'bold'
    },
    buttonPolicial:{
        position:"absolute",
        backgroundColor:"#008080",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    }
})