import React, { Component } from 'react'

export default class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs:[]
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(res=>{
            console.log(res.data)
            const{memes}=res.data
            // console.log(memes[0])
            this.setState({allMemeImgs:memes})
        })
    }
    handleChange(e){
        const{name,value}=e.target
        return (
            this.setState(prevState=>{
                return(
                    {
                        ...prevState,
                        [name]:value
                    }
                )
            })
        )
    }
    handleSubmit(e){
        e.preventDefault()
        const randNum=Math.floor(Math.random()*this.state.allMemeImgs.length)
        const randomImg=this.state.allMemeImgs[randNum].url
        this.setState({randomImg:randomImg})
        console.log(randomImg)
    }
  render() {
    return (
      <div>
          <form className='form' onSubmit={this.handleSubmit}>
              <input type="text"
              name='topText'
              className='top-text'
              placeholder='TopText'
              value={this.state.topText}
              onChange={this.handleChange}
              />
              <input type="text"
              name='bottomText'
              className='bottom-text'
              placeholder='BottomText'
              value={this.state.bottomText}
              onChange={this.handleChange}
              />
              <button type="submit">Generate</button>
              
          </form>
          <div className='meme'>
              <img src={this.state.randomImg} alt="memeImage"/>
              <h2 className='top'>{this.state.topText}</h2>
              <h2 className='bottom'>{this.state.bottomText}</h2>
          </div>
      </div>
    )
  }
}
