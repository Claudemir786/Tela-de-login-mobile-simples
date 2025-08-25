import {Text, View, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Cabecalho({name='default'}){
    return(
        <View style={styles.container}>

            <View style={styles.logo}>
                <Text><Ionicons name="logo-bitcoin" size={90} color="#2C2956" /></Text>
               
            </View>

            <View style={styles.login}>
                 <Text style={styles.texto}>{name}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
       
    },
    logo:{
       alignItems:'center',
       justifyContent:'center',
       marginTop:50,
       marginBottom:20, 

    },
    login:{
       alignItems:'center',
       justifyContent:'center', 
    },
    texto:{
        color:'#fff',
        fontSize:60,
        textTransform:'uppercase',
        fontWeight:'bold',
    }
})