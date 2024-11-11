import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }

    // this.clickHandler=this.clickHandler.bind(this)  third approach statement

     }
    
    clickHandler() {
        this.setState({
            message:'Goodbye!'
        })
        console.log(this)
    }

    // 4th approach

//    clickHandler = () => {
//     this.setState ({
//         message:'Goodbye!'
//     })
//    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */} 

        {/* second approach using arrow function */}
        <button onClick={() => this.clickHandler()}>click</button>  

        {/* third approach  writing line in constructor */}
        {/* <button onClick ={this.clickHandler}>click</button> */}
      </div>
    )
  }
}

export default EventBind



