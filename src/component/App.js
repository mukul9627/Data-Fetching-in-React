import React from 'react';
import axios from 'axios';
import Searchinput from './Searchinput';
import Images from './images';

class  App extends React.Component{
   constructor(props){
    super(props)
    this.state ={images: [] }
       
  
    
}

    onSearchSubmit = async (entry)=>{
       
     const response = await axios.get(`https://pixabay.com/api/?key=25731460-27064da48681893a07c554480&q=${entry}&image_type=photo`)
     console.log(response.data.hits);
     this.setState({images: response.data.hits})

   }
    render(){
    return (
        <div className='ui container' style={{margin: "30px"}}>
            <Searchinput onSearchSubmit={this.onSearchSubmit}/>
            <Images images ={this.state.images}/>
         
        </div>
    )
}
}
export default App; 