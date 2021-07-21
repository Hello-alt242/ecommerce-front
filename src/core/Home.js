import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import {getCategories, getProducts, getFilteredProducts} from './apiCore'
import Card from './Card'
import Search from './Search'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../Components/Navbar'
import {handleFilters} from './Shop.js'
import Shop from './Shop.js'
import {genres} from './fixedGenres'



const Home = () => {
    const [myFilters, setMyFilters] = useState({
        filters: { category: [], price: [], fenlei: []}
    })
    const [productsBySell, setProductsBySell] = useState([])
    const [productsByArrival, setProductsByArrival] = useState([])
    const [filteredResults, setFilteredResults] = useState([])

    
    const [listCategories, setProductsByCategories] = useState([])
    const [error, setError] = useState(false)
    const [skip, setSkip] = useState(0)
    const [size, setSize] = useState(0)
    const [limit, setLimit] = useState(100)

    const loadFilteredResults = (newFilters) => {
        getFilteredProducts(skip, limit, newFilters).then(data => {
            if (data.error){
                setError(data.error)
            }else{
                setFilteredResults(data.data)
                setSize(data.size)
                setSkip(0)
            }
        })
    }
    
    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error){
                setError(data.error)
            }else{
                setProductsBySell(data)
            }
        })
    }

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error){
                setError(data.error)
            }else{
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()
        // loadFilteredResults(/*skip, limit, */myFilters.filters)
        loadFilteredResults({
            price: []
        })
    }, [])

    return (
        <Layout 
            title="Welcome" 
            description="Please select your favorite movies" 
            className="container-fluid"
        >
            <Search />
        {/* <div className="col-4">
                <h4>What is your price range?</h4>
                <div>
                    <RadioBox 
                        prices={prices} 
                        handleFilters={filters =>
                            handleFilters(filters, 'price')}
                    />
                </div>
        </div> */}
        <h2 className="mb-4 col-8">All Products</h2>
            <div className="row">  
                {filteredResults.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card key={i} product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    )
}
export default Home;