import './Checkout.css'

const Checkout = (props) => {

    const allKebabs = props.kebabs
    var price = allKebabs.length * 5.5

    const removeKebab = (e) => {
        e.currentTarget.remove()
    }

    return (
        <div className="checkout-container">
            <h2>Total: {price}€</h2>
            <button onClick={props.orderKebab}>Passer la commande</button>
            <h2>Votre commande</h2>
            {allKebabs.map((el) => (
                <div onClick={removeKebab} className='order-container' key={el}><p>{el.breadType}, {el.meatType}, {el.ingredients.join(', ')}, {el.sauces.join(', ')}</p> x1</div>
            ))}
        </div>
    )
}

export default Checkout
