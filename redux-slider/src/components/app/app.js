import React, {Component} from 'react'
import "./app.sass"
import image1 from "./images/image1.jpg"
import image2 from "./images/image2.jpg"
import image3 from "./images/image3.jpg"

const arr = [image1, image2, image3];

export default class App extends Component{

    state = {
        slide: 0
    };

    prevSlide = () => {
        const {slide:oldSlide} = this.state;
        let slide;

        if(oldSlide === 0) slide = arr.length-1;
        else slide = oldSlide - 1;

        this.setState({slide})
    };

    nextSlide = () => {
        const {slide:oldSlide} = this.state;
        let slide;

        if(oldSlide === arr.length-1) slide = 0;
        else slide = oldSlide + 1;

        this.setState({slide})
    };

    render(){
        return(
            <div className={"slider-box"}>
                <div className="arrow prev" onClick={this.prevSlide}> {"<"} </div>
                <div className="arrow next" onClick={this.nextSlide}> {">"} </div>
                <div
                    style={{"backgroundImage" : `url(${arr[this.state.slide]})`}}
                    className="slider">
                </div>
            </div>
        )
    }
}