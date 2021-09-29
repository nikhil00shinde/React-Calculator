import React from "react";
import "./App.css"
import Input from "./Input";
import Button from "./Button";
class App extends React.Component{
   

     state = {
       input:"",
       display:""
     }

     assignInput = (op)=>{
        this.setState({input:this.state.input+op});
     }

     showResult = ()=>{
       this.setState({display:eval(this.state.input)})
       this.setState({input:eval(this.state.input)})
     }
     changeAll = ()=>{
      this.setState({display:""})
      this.setState({input:""})
     }

    render = ()=>{
      return (
          <div className = "container">

            <Input input = {this.state.input}/>
            <div className = 'buttons'>
            <Button display ={"0 1 2 3"}   assignInput = {this.assignInput} showResult = {this.showResult}/>
            <Button display ={"4 5 6 7"}  assignInput = {this.assignInput} showResult = {this.showResult}/>
            <Button display ={"8 9 + -"}  assignInput = {this.assignInput} showResult = {this.showResult}/>
            <Button display ={"/ * = C"}  changeAll = {this.changeAll} assignInput = {this.assignInput} showResult = {this.showResult}/>
            </div>
            
            
          </div>
      )
    }
}


export default App;