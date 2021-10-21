import Cooking from '../images/cooking.gif'

const Waiting = () => {
    return (
        <div>
            <h1>C'est parti !</h1>
            <h2>
                Notre maître kébabier prépare votre commande.
                <br/>
                Patience...
            </h2>
            <img src={Cooking} alt='waiting gif'></img>
        </div>
    )
}

export default Waiting
