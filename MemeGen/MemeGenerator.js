import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor(props){
        super(props)
        this.state = {
             topText: "",
             bottomText: "",
             randomImg : "http://i.imgflip.com/1bij.jpg",
             allMemeImgs : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
     componentDidMount(){
        fetch("https://jsonblob.com/api/d4441d23-d8a1-11eb-8f97-15a70385c46a")   /* https://api.imgflip.com/get_memes */
            .then(response => response.json())
             .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs : memes
                })
             })
     }

    handleChange(event){
        const {name,value}=event.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        console.log(randNum)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
    }
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                       type="text"
                       name="topText"
                       placeholder="enter top text"
                       value={this.state.topText}
                       onChange={this.handleChange}     
                    />
                       <input 
                       type="text"
                       name="bottomText"
                       placeholder="enter bottom text"
                       value={this.state.bottomText}
                       onChange={this.handleChange}     
                    />
                      <button>GEN</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="image" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;