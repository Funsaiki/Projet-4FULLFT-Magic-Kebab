import blanche from '../images/blanche.png'
import harissa from '../images/harissa.png'
import andalouse from '../images/andalouse.png'
import bbq from '../images/bbq.png'
import ketchup from '../images/ketchup.png'
import curry from '../images/curry.png'
import './Ingredients.css'
import React from 'react'

const Sauces = (props) => {
    const handleButton = (e) => {
        if (props.nbSauces < 2) {
            if (e.currentTarget.disabled === false) {
                props.addSauce(e)
            }
            e.currentTarget.disabled = true
        }
    }
    return (
        <div>
            <h1>
                Quelques sauces ?
            </h1>
            <div className='card-container'>
                <button className='card' onClick={handleButton}>
                    <img src={blanche} alt='blanche' />
                    <span>Blanche</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={harissa} alt='harissa' />
                    <span>Harissa</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={andalouse} alt='andalouse' />
                    <span>Andalouse</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={bbq} alt='bbq' />
                    <span>BBQ</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={ketchup} alt='ketchup' />
                    <span>Ketchup</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={curry} alt='curry' />
                    <span>Curry</span>
                </button>
            </div>
            <button className='nextButton' onClick={props.handler}>Continuer</button>
        </div>
    )
}

export default Sauces
