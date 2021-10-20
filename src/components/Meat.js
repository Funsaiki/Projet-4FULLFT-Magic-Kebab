import meat from '../images/meat.png'
import tofu from '../images/tofu.png'
import './Ingredients.css'
import React from 'react'

const Bread = (props) => {
    return (
        <div>
            <h1>
                Plutôt Viande ou Tofu ?
            </h1>
            <div className='card-container'>
                <button className='card' onClick={props.handler}>
                    <img src={meat} alt='meat'/>
                    <span>Viande</span>
                </button>
                <button className='card' onClick={props.handler}>
                    <img src={tofu} alt='tofu'/>
                    <span>Tofu</span>
                </button>
            </div>
        </div>
    )
}

export default Bread
