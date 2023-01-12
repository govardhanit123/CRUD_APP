import React, { Component } from 'react'

export class BasicsOfReact extends Component {
  render() {
    return (
      <div>
        <div>
        <MyInput onChange={this.handleChange.bind(this)}/>
        <MyInput onChange={(e)=>{this.handleChange(e)}}/>
        </div>
      </div>
    )
  }
}

export default BasicsOfReact