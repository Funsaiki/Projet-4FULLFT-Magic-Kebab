import salad from '../images/salad.png'
import tomato from '../images/tomato.png'
import onion from '../images/onion.png'
import './Ingredients.css'

const Ingredients = (props) => {

    const handleButton = (e) => {
        if (e.currentTarget.disabled === false) {
            props.addIngredients(e);
        }
        e.currentTarget.disabled = true
    }

    return (
        <div>
            <h1>
                Salade, Tomates, Oignons ?
            </h1>
            <div className='card-container'>
                <button className='card' onClick={handleButton}>
                    <img src={salad} alt='salad' />
                    <span>Salade</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={tomato} alt='tomato' />
                    <span>Tomates</span>
                </button>
                <button className='card' onClick={handleButton}>
                    <img src={onion} alt='onion' />
                    <span>Oignon</span>
                </button>
            </div>
            <button className='nextButton' onClick={props.handler}>Continuer</button>
        </div>
    )
}

export default Ingredients
