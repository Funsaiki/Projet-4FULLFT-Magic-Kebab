import './Checkout.css'

const Checkout = (kebabs) => {
    const allKebabs = kebabs.kebabs
    return (
        <div className="checkout-container">
            <h2>Total: {allKebabs.length * 5.5}€</h2>
            <button>Passer la commande</button>
            <h2>Votre commande</h2>
            {allKebabs.map((el) => (
                <div className='order-container' key={el}><p>{el.breadType}, {el.meatType}, {el.ingredients}, {el.sauces}</p> x1</div>
            ))}
        </div>
    )
}

export default Checkout
