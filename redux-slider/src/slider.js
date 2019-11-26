import React from 'react'
import {connect} from "react-redux";
import {nextSlide, prevSlide} from "./actions";

const Slider = ({store:slide, prevSlide, nextSlide}) => {
    return(
        <div>
            <button onClick={prevSlide} className="button">Prev</button>
            <div className="currentSlide">{slide}</div>
            <button onClick={nextSlide} className="button">Next</button>
        </div>
    )
}

const mapStateToProps = (store) => {
    return{
        store: store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextSlide: () => dispatch(nextSlide()),
        prevSlide: () => dispatch(prevSlide())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)

