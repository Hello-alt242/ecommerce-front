import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Layout from './Layout'
import { getCart } from './cartHelpers'
import Card from './Card'
import Checkout from './Checkout'

const StepThree = () => {
    const [items, setItems] = useState([])
    const [run, setRun] = useState(false);

    useEffect(() => {
        setItems(getCart())
    }, [run])

    return (
        <Layout 
                title="Shopping Cart" 
                description="Manage your cart items. Add remove checkout or continue shopping" 
                className="container-fluid"
            >
                <div className="row">

                    <div className="col-6">
                        <h2 className="mb-4">Your cart summary</h2>
                        <hr/>
                        <Checkout products={items}/>
                    </div>

                    
                </div>

        </Layout>
    )
}

export default StepThree