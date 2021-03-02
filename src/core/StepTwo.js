import React from 'react'
import Layout from './Layout'
import {Link, useHistory} from 'react-router-dom'
import {shippingFees} from './fixedShippingFee'
import RadioBox from './RadioBox'



const StepTwo = () => {
    const history = useHistory()

    const redir = () => {
        history.push(`/stepthree`)
    }

    const newPostForm = () => {
        return (
            <form className="mb-3">
                
                <button className="btn btn-outline-primary" onClick={redir}>Go to Step 3</button>
            </form>
        )
    }

    return (
        <Layout
            title="Welcome to checkout screen"
            description="Did you find everything you are looking for?"
        >
            <div className="col-md-8 offset-md-2">
                {newPostForm()}
                What services would you prefer?
                <RadioBox 
                            prices={shippingFees} 
                            
                />
            </div>
        </Layout>
    )
}

export default StepTwo