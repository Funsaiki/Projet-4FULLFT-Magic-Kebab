import bread from '../images/pain.png'
import galette from '../images/galette.png'
import './Ingredients.css'
import React from 'react'

const Bread = (props) => {
    return (
        <div>
            <h1>
                Pain ou Galette ?
            </h1>
            <div className='card-container'>
                <button className='card' onClick={props.handler}>
                    <img src={bread} alt='bread'/>
                    <span>Pain</span>
                </button>
                <button className='card' onClick={props.handler}>
                    <img src={galette} alt='galette'/>
                    <span>Galette</span>
                </button>
            </div>
        </div>
    )
}

export default Bread
