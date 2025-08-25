import{Text, View, StyleSheet} from 'react-native';

export default function Rodape(){
    return(
        <View style={styles.container}>           
            <Text style={styles.texto1}>Dont't Have An Account?</Text>
            <Text style={styles.texto2}>Sing Up</Text>      
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:90,      
    },
    texto1:{
        fontSize:18,
        marginRight:11,
        color:'#fff',
    },
    texto2:{
        fontSize:18,
        color:'#FFBA14',
    }

})