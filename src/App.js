import React,{Component} from 'react';
import SearchBar from './Component/SearchBar'

class App extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return[
            <div className = "ui container">
                <SearchBar/>
            </div>
        ]
    }
}
export default App