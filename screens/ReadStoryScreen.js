import React from 'react'
import { SearchBar } from 'react-native-elements';
import {Text,View, FlatList, ScrollView} from 'react-native'
import db from "../config.js";

export default class ReadStoryScreen extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        allStories: []
      }
    }
    
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

     componentDidMount = async ()=>{
      const query = await db.collection("Story").get()
      query.docs.map((doc) =>{
        this.setState ({
          allTransactions:[...this.state.allStories,doc.data()]
        })
      })
    }

  render() {
    const { search } = this.state;

    return (
<ScrollView>

       <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
         <FlatList
         data = {this.state.allStories}
         renderItem = {({item})=>(
          <View style ={{borderBottomWidth :2}}>
                <Text>{"Title:"+ story.bookId}</Text>
                <Text>{"Author:"+ story.studentId}</Text>
                <Text>{"StoryId:"+ story.transactionId}</Text>
            </View>
         )}
         keyExtractor ={(item,index)=>index.toString()}
 />  


       </ScrollView>
     );
  }
}
