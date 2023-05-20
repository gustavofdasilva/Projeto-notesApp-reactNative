import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

/*
Fazer estilo da notas
Decidir paleta de cores
*/ 


export default function App() { 
  
  const notesData = [
    {title: 'Test', text: 'I need to remember to do that', editable: false}
  ]

  const [notes, setNotes] = useState(notesData)

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{alignSelf:'center'}}
        data={notes}
        extraData={this.state}
        renderItem={({item, index}) => (
          <View style={[styles.note,{backgroundColor:item.editable ? '#5a5a5a': '#303030',}]}>
            <View style={{
              display: 'flex',
              justifyContent: "space-between",
              alignItems: 'center',
              flexDirection: 'row',
              padding: 8,
              backgroundColor:item.editable ? '#5a5a5a': '#3d3d3d',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}>
                {/*note Title*/}
                <TextInput 
                  style={[styles.noteTitle]}
                  editable={item.editable}
                  cursorColor={'#F0d'}>
                    {item.title}
                </TextInput>

                {/*Buttons view*/}
                <View style={{
                  display: 'flex',
                  flexDirection: 'row'
                }}>
                  {/*edit note button*/}
                  <TouchableOpacity
                    onPress={()=>{
                      /*edit note function*/    
                      let arr = [...notes]
                      arr[index] = {
                        title: notes[index].title,
                        text: notes[index].text,
                        editable: !notes[index].editable,
                      }
                      setNotes(arr)
                      console.log('edit note', item.editable, index);        
                    }}
                    style={styles.noteButton}>
                    <Image
                      source={require('./assets/edit.png')}
                      tintColor={item.editable?'#F0d':'#fff'}
                      style={styles.noteIcon}
                      />
                  </TouchableOpacity>

                  {/*delete note button*/}
                  <TouchableOpacity
                    style={styles.noteButton}
                    onPress={()=>{
                      let arr = [...notes]
                      arr.splice(index,1)
                      setNotes(arr)
                      console.log('Delete note')
                    }}>
                    <Image
                      source={require('./assets/trash-2.png')}
                      tintColor={'#fff'}
                      style={styles.noteIcon}/>
                  </TouchableOpacity>
                </View>
            </View>

            {/*note description*/}
            <TextInput
                  multiline={true}
                  style={styles.noteBody}
                  editable={item.editable}
                  cursorColor={'#F0d'}>
                  {item.text}
            </TextInput>
           </View>
        )}
        />
      <TouchableOpacity
        style={styles.addButton}
          onPress={() => {
            var arr = [...notes, {title: 'Hello!', text: 'I also need to remember that', editable: false}]
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
    backgroundColor: '#1d1d1d',
    padding: 20,
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
    width: 300,
    height: 300,
    backgroundColor: '#2d2d2d',
    textAlign: 'justify',
    margin: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },

    noteTitle: {
      color: '#fdfdfd',
      margin: 8,
      fontSize: 20,
    },

    noteBody: {
      color: '#fdfdfd',
      margin: 8,
      fontSize: 15,
      lineHeight: 30,
    },

    noteIcon: {
      width: '100%',
      height: '100%',
    },

    noteButton: {
      width: 35,
      height: 35,
      marginLeft: 8
    }
});
