import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



export default function App() {

  const [Audio,SetarAudio] = useState(null);

  const [Musica,SetarMusica] = useState([
    {
      nome: 'Minha Cura',
      artista: 'Mc Cabelinho',
      playing:  false,
      file: ''
    },

    {
      nome: ' Até o final',
      artista: 'Caio Luccas',
      playing: false,
      file: ''
    },

    {
      nome: ' Conexão incomum',
      artista: ' Mc Gabzin',
      playing: false,
      file: ' '
    }

  ]);

  const changeMusic = async (id) =>{
    let curFlie = null;
    let newMusics = Musica.filter((val,k)=>{
        if(id == k) {
          Musica[id].playing = true;
          curFlie= Musica[k].file;
        }
        else{
          Musica[k].playing = false;

        }
        return Musica [k];
    })

      if(audio != null){
        audio.unloadAsync();
      };

      let curAudio = new Audio.sound();

      try{
        await curAudio.loadAysnc(curFlie);
        await curAudio.playAysnc();
      }catch(error){}

      SetarAudio(curAudio)
      SetarMusica(newMusics)

  }
 
  return (
     <ScrollView style= {styles.container}> 
        <StatusBar hidden/>
        <View style={styles.hearder}>
          <Text style ={{textAlign:'center',color:'black',fontSize:15}}>
              Music DSC
          </Text>
        </View>

        <View style={styles.table}>
          <Text style={{width:'50%', color:'rgb(200,200,200 )'}}>Música</Text>
          <Text style={{width:'50%', color:'rgb(200,200,200 )'}}>Artista</Text>
        </View>
        
        {
          Musica.map((val,k)=>{
            
            if(val.playing){
              //aparece algo aqui
              return( 
              <View style={styles.table}>
                <TouchableOpacity onPress={()=>changeMusic(k)} style={{width:'100%', flexDirection: 'row'}}> 
                   <Text style={{width:'50%', color:'#1DB954'}}> <AntDesign name= "play" size={15} 
                   color= "#1DB954" />{val.nome} </Text>
                   <Text style={{width:'50%', color:'#1DB954'}}>{val.artista} </Text>
                </TouchableOpacity>
              </View>
              );
            } else{
              //aparece outra coisa aqui
              return( 
                <View style={styles.table}>
                <TouchableOpacity onPress={()=>changeMusic(k)} style={{width:'100%', flexDirection: 'row'}}> 
                   <Text style={{width:'50%', color:'white'}}> <AntDesign name= "play" size={15} 
                   color= "white" />{val.nome} </Text>
                   <Text style={{width:'50%', color:'white'}}>{val.artista} </Text>
                </TouchableOpacity>
              </View>
              );
            }
          })
          
        }


     </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    
  },
 hearder: {
   backgroundColor: '#1DB954',
   width: '100%',
   padding:20
 },
 table:{
   flexDirection: 'row',
   padding: 20,
   borderBottomColor: 'white',
   borderBottomWidth: 1
 }
 
});
