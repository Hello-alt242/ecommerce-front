import React from 'react'
import Layout from './Layout'
import {Link, useHistory} from 'react-router-dom'

const StepOne = () => {
    const history = useHistory()

    const redir = () => {
        history.push(`/steptwo`)
    }
    
    const newPostForm = () => {
        return (
            <form className="mb-3">
                <h4>Enter your address</h4>

                <div className="form-group">
                    <label className="text-muted">Street</label>
                    <input 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Room Number</label>
                    <input 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">City</label>
                    <input 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">State</label>
                    <input 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Country</label>
                    <input 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <div className="form-group">
                    <label className="text-muted">Zip Code</label>
                    <input 
                        type="text" 
                        className="form-control" 
                    />
                </div>

                <button className="btn btn-outline-primary" onClick={redir}>Go to Step 2</button>
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
            </div>
        </Layout>
    )
}

export default StepOne