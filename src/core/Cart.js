import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Layout from './Layout'
import { getCart } from './cartHelpers'
import Card from './Card'
import Checkout from './Checkout'

const Cart = () => {
    const history = useHistory()
    const [items, setItems] = useState([])
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart())
    }, [run])

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`${items.length}`}</h2>
                <hr/>
                {items.map((product, i) => (
                    <Card 
                        key={i} 
                        product={product} 
                        showAddToCartButton={false}
                        cartUpdate = {true}
                        showRemoveProductButton={true}
                    />
                ))}
            </div>
        )
    }

    const noItemsMessage = () => (
        <h2>Your cart is empty. <br/> <Link to="/shop">Continue shopping</Link> </h2>
    )

    const redir = () => {
        history.push(`/stepone`)
    }

    return (
        <Layout 
                title="Shopping Cart" 
                description="Manage your cart items. Add remove checkout or continue shopping" 
                className="container-fluid"
            >
                <div className="row">
                    <div className="col-6">
                        {items.length > 0 ? showItems(items) : noItemsMessage()}
                    </div>
                    <div className="col-6">
                        <h2 className="mb-4">Your cart summary</h2>
                        <hr/>
                        <Checkout products={items}/>
                    </div>
                    <button onClick={redir} className="btn btn-success btn-block">
                        Checkout
                    </button>

                    
                </div>

        </Layout>
    )
}

export default Cart