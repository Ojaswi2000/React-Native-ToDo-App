import React,{Component} from 'react';
import {View,StyleSheet,Text,Button,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import Note from './Note';
export default class Main extends Component
{
  constructor(props)
  {
    super(props);
    this.state={
      noteArray:[],
      noteText:'',
    }
  }
  
  render()
  {
    let notes=this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyval={key} val={val} 
              deleteMethod={()=> this.deleteNote(key)} />

    });
    
    return(
      <View style={styles.container}>

         <View style={styles.header}>
             <Text style={styles.headerText}>- Ojaswi's Todo App -</Text>
         </View>

        <ScrollView style={styles.scrollContainer}>
        {notes}
        </ScrollView>

        <View style={styles.footer}>
        <TextInput style={styles.textinp} placeholder='Note' placeholderTextColor='white' underlineColorAndroid='transparent'
          onChangeText={(noteText)=>this.setState({noteText})}
          value={this.state.noteText}></TextInput>
        </View>

        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText} onPress={this.addNote.bind(this)}>+</Text>
        </TouchableOpacity>
      
      
      
      
      </View>
    );
  }
  addNote(){
    if(this.state.noteText){
      var d=new Date();
      this.state.noteArray.push({
        'date':d.getFullYear()+
        '/'+ (d.getMonth()+1) +
        '/'+d.getDate(),
        'note':this.state.noteText,

      });
      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText:'' });
    }


    }
    deleteNote(key){
      this.state.noteArray.splice(key,1);
      this.setState({noteArray : this.state.noteArray})
    }

  }

const styles=StyleSheet.create({
  container:
  {
    flex:1,
  },
  header:{
      backgroundColor:'#00BFFF',
      alignItems:'center',
      justifyContent:'center',
      borderBottomWidth:10,
      borderBottomColor:'#ddd',
      borderTopWidth:10,
      borderTopColor:'#00BFFF',
    },
    headerText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        padding:25,
    },
    scrollContainer:{
        flex:1,
        marginBottom:10,
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:10,
    },
    textinp:{
        alignSelf:'stretch',
        color:'#fff',
        padding:10,
        backgroundColor: '#252525',
        borderTopWidth:10,
        borderTopColor:'#ddd',
        padding: 20,
    },
    addButton:{
        position:'absolute',
        zIndex:11,
        right:10,
        bottom:90,
        backgroundColor:'#00BFFF',
        width:100,
        height:100,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        elevation:0,

    },
    addButtonText:{
        color:'white',
        fontSize:24,
    },
});