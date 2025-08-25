import{Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function Corpo(){
    return(
        <View style={styles.container}> 

            <View style={styles.tecla}>
                <TouchableOpacity style={styles.teclaIn}>
                    <Text style={styles.icone}><FontAwesome5 name="user-alt" size={30} color="#fff" /></Text>
                    <Text style={styles.texto}> USER NAME</Text>

                </TouchableOpacity>              
            </View>

             <View style={styles.tecla}>
                <TouchableOpacity style={styles.teclaIn}>
                    <Text style={styles.icone}><FontAwesome5 name="lock" size={24} color="#fff" /></Text>
                    <Text style={styles.texto}>PASSWORD</Text>
                </TouchableOpacity>              
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:150,      
        alignItems:'center',       

    },
    tecla:{
       marginBottom:75,      
      
    },
    teclaIn:{
       flexDirection:'row',       
       borderRadius:50,
       width:350,   
       justifyContent:'space-evenly',
       padding:5,
       borderWidth:1,
       borderColor:'#fff',

      
    },
    texto:{
        fontSize:30,
        fontWeight:'bold',
        color:'#fff',

    },
    icone:{
         fontSize:30
    }

})