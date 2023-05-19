import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

/*
Fazer estilo da notas
Decidir paleta de cores
*/ 


export default function App() {
  const notesData = [
    {title: 'Test', text: 'I need to remember to do that', editable: true}
  ]

  const [notes, setNotes] = useState(notesData)

  return (
    <View style={styles.main}>
      <FlatList
      style={{alignSelf:'center'}}
        data={notes}
        renderItem={({item}) => (
          <View style={[styles.note,{backgroundColor: item.editable ? '#D0d000' : '#000'}]}>
            <View style={{
              display: 'flex',
              justifyContent: "space-between",
              alignItems: 'center',
              flexDirection: 'row',
              margin: 8,
            }}>
                <TextInput 
                  style={[styles.noteText]}
                  editable={item.editable}>{item.title}</TextInput>
                <TouchableOpacity
                  onPress={()=>{
                    item.editable = !item.editable
                    setRerender(true)
                    setRerender(false)
                    console.log(item.editable + item.title)                   
                  }}
                  style={{width:30, height:30}}>
                  <Image
                    source={require('./assets/edit.png')}
                    tintColor={'#fff'}
                    style={{width:'100%', height:'100%'}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{
              display: 'flex',
              justifyContent: "space-between",
              alignItems: 'center',
              flexDirection: 'row',
              margin: 8,
            }}>
              <TextInput
                multiline={true}>
                Here comes the body of the note
              </TextInput>
              <TouchableOpacity>
                  <Image
                    source={require('./assets/trash-2.png')}
                    tintColor={'#fff'}/>
              </TouchableOpacity>
            </View>
           </View>
        )}
        />
      <TouchableOpacity
        style={styles.addButton}
          onPress={() => {
            var arr = [...notes, {title: 'Hello!', text: 'I also need to remember that'}]
            setNotes(arr)
          }}
        >
        <Image
          source={require('./assets/plus.png')}
          style={{width: 50, height: 50}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#1d1d1d'
  },

  addButton: {
    position: 'absolute',
    borderRadius: 10,
    width: 100,
    height: 100,
    marginBottom: 10,
    backgroundColor: '#F0D',
    alignSelf: 'center',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  note: {
    width: 250,
    height: 250,
    backgroundColor: '#2d2d2d',
    textAlign: 'justify',
    margin: 8,
    borderRadius: 8,
  },

    noteText: {
      color: '#fdfdfd',
      margin: 8,
      fontSize: 20,
      
    }
});
