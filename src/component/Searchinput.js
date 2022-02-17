// import { render } from "@testing-library/react"; 
import React from "react";

class Searchinput extends React.Component {
  constructor(props){
   super(props)
   this.state ={open: ""}
//    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onFormSubmit = (event)=> {
      event.preventDefault();
      this.props.onSearchSubmit(this.state.open);
  }
    render() {
        return(
            <div>
          <div className="ui segment" >
          <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                  <div className="ui messive icon input">
                      <input type="text" placeholder="search..." onChange={(event) => this.setState({open:event.target.value})} value={this.state.open} />
                      <i className="search icon"></i>
              </div>
            </div>
          </form>  
        </div>
        <button type ="submit" className ="ui segment" >Click me</button>
        </div>
        )
    }
}
export default Searchinput;