import React,{Component} from 'react';
import SearchBar from './Component/SearchBar';
import axios from 'axios'
import { async } from 'q';
import Key from './KEY';
import VideoList from './Component/VideoList';
import VideoPlayer from './Component/VideoPlayer'

class App extends Component{
    constructor(){
        super()
        this.state = {videos :[],selectedVideo:''}
    }
   
   componentDidMount(){
       this.fetchVideo('freinds')
   }

    fetchVideo =async (term)=>{ 
      let response =  await axios({
          method:'GET',
          url:'https://www.googleapis.com/youtube/v3/search',
          params:{
              q:term,
              part:'snippet',
              maxResults:10 ,
              key:Key.API_Key
          }
      })
      
      if(response){
          this.setState({
              videos:response.data,
              selectedVideo:response.data.items[0]
          })
      }else{
          alert('Error')
      }
    }

    onVideoSelect = (video)=>{
     this.setState({
         selectedVideo:video
     })
    }



    render(){
       
       
        return[
            <div className = "ui container">
                <SearchBar fetchVideo = {this.fetchVideo} />
                {Array.isArray(this.state.videos.items) ? this.state.videos.items.map(video=>{
                 return <VideoList data = {video} onVideoSelect = {this.onVideoSelect}/>
              }):[]} 
              <VideoPlayer video = {this.state.selectedVideo}/>
            </div>
        ]
    }
}
export default App