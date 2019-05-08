import React, { Component } from 'react';
import './App.css';


/*import:
  "dumb component"
  "functional stateless component (FSC)"
  "presentational component" 
  ^^^^^All different names for the same thing.  They don't manage state*/
import Form from "../components/Form";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.setState({userName: "Joe"})
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    //^Stop the page from reloading which is the default behavior of JavaScript's "onSubmit"

    alert(`User Name ${this.state.userName} has been submitted!`);
    
    this.setState({ userName: "" });
    //^Clearing state after user clicks submit button.

  };


  render() {
    const { userName } = this.state;
    //^ this is called destructuring. Cleaner code so you dont have to repeat this.props/this.state for everything.

    return (
      <div className="container">

      {/*Presentational Component(PC)*/}
      <Form 
        userName={userName} 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
        {/*^^^^Passing userName "Joe" and functions down to PC*/}
      </div>

    );
  }
}

export default App;
