import React, { useState, useEffect } from 'react'
import Layout from "../core/Layout"
import {getPurchaseHistory} from './apiUser'
import Dashboard from './userDashboard'
import moment from 'moment'
import {isAuthenticated} from '../auth'


const purchaseHistory = (history) => {
    return (
        <div className="card mb-5">
            <h3 className="card-header">Purchase History</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    {history.map((h, i) => {
                        return (
                            <div>
                                <hr/>
                                {h.products.map((p, i) => {
                                    return (
                                        <div key={i}>
                                            <h6>Product name: {p.name}</h6>
                                            <h6>Product price: ${p.price}</h6>
                                            <h6>
                                                Product date: {" "}
                                                {moment(p.createdAt).fromNow()}
                                            </h6>

                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </li>
            </ul>
        </div>
    )
}

const Lishi = () => {
    const [history, setHistory] = useState([])

    const {
        user: {_id, name, email, role}
    } = isAuthenticated()
    const token = isAuthenticated().token

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setHistory(data)
            }
        })
    }

    useEffect(() => {
        init(_id, token)
    }, [])

    return(
        <Layout>
            <div>
                <h1>Purchase History</h1>
                {purchaseHistory(history)}
            </div>
        </Layout>
    )
}

export default Lishi