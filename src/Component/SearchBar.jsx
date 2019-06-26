import React from 'react'
import { RSA_NO_PADDING } from 'constants';

class SearchBar extends React.Component{
   constructor(props){
      super(props)
      this.state = {
       search :''
      }
      
   }
    formSubmit = (e) =>{
       e.preventDefault()
      this.props.fetchVideo(this.state.search)
    }
   
 




   render(){
      return[
         <div class="ui segment">
            <form onSubmit = {this.formSubmit}>
               <div class="ui fluid icon input">
               <input 
               type="text" 
               placeholder="Search a very wide input..."
               value = {this.state.search}
               onChange = {(e)=>{
                  this.setState({search:e.target.value})
               }}
               />
               <i className="search icon"></i>
            </div>
            </form>
          
         </div>
      ]
   }
   
}
export default SearchBar