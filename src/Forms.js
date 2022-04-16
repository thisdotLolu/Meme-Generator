import React, { Component } from 'react'

class Forms extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            age:'',
            gender:'',
            destination:'',
            dietaryRestrictions:{
                isVegan:false,
                isWasher:false,
                isLactoseFree:false
            }
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        const {name,value,type,checked}=e.target
        type==='checkbox'? 
        this.setState(prevState=>{
            return{
            dietaryRestrictions:{
                ...prevState,
                [name]:checked
            }
        }
    }):this.setState({[name]:value})
    }
  render() {
    return (
      <div>
          <main>
              <form>
                  <input name='firstName' value={this.state.firstName} onChange={this.handleChange} placeholder='first Name'/><br />
                  <input name='lastName' value={this.state.lastName} onChange={this.handleChange} placeholder='Last Name'/><br />
                  <input name='age' value={this.state.age} onChange={this.handleChange} placeholder='Age'/><br/>
                  <br />
                  <label >
                      <input 
                      type="radio"
                      name='gender'
                      value='male'
                      checked={this.state.gender==='false'}
                      onChange={this.handleChange}
                      /> Male
                      <input 
                      type="radio"
                      name='gender'
                      value='female'
                      checked={this.state.gender==='false'}
                      onChange={this.handleChange}
                      /> Female
                  </label>
                  <br />
                  <select value={this.state.destination} name='destination'onChange={this.handleChange}>
                      <option value="Germany">Germany</option>
                      <option value="Norway">Norway</option>
                      <option value="North Pole">North Pole</option>
                      <option value="South Pole">South Pole</option>
                  </select>
                  <br />
                  <label >
                      <input 
                      type="checkbox"
                      name='isVegan'
                      onChange={this.handleChange}
                      checked={this.state.dietaryRestrictions.isVegan}
                      />VEGAN
                  </label>
                  <label >
                      <input 
                      type="checkbox"
                      name='isWasher'
                      onChange={this.handleChange}
                      checked={this.state.dietaryRestrictions.isWasher}
                      />Washer
                  </label>
                  <label >
                      <input 
                      type="checkbox"
                      name='isLactoseFree'
                      onChange={this.handleChange}
                      checked={this.state.dietaryRestrictions.isLactoseFree}
                      />LactosFree
                  </label>
                  <br />

                  <button>Submit</button>
              </form>
              <hr />
              <h2>Entered Information</h2>
              <p>Your name: {this.state.firstName} {this.state.lastName}</p>
              <p>Your age: {this.state.age}</p>
              <p>Your gender: {this.state.gender}</p>
              <p>Your destination:{this.state.destination} </p>
              <p>Your dietary restriction:{} </p>
          </main>
      </div>
    )
  }
}

export default Forms