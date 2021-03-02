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

    const loadActionMovies = () => {
        loadFilteredResults({
            category: ["5fb68c1845f92d0293fdedf8"],
            price:[]
        })
    }

    const loadComedyMovies = () => {
        loadFilteredResults({
            category: ["5fb68c1d45f92d0293fdedf9"],
            price:[]
        })
    }

    const loadDramaMovies = () => {
        loadFilteredResults({
            category: ["5fb68c2345f92d0293fdedfa"],
            price:[]
        })
    }

    const loadHorrorMovies = () => {
        loadFilteredResults({
            category: ["5fb68c2a45f92d0293fdedfb"],
            price:[]
        })
    }

    const loadAnimationMovies = () => {
        loadFilteredResults({
            category: ["5fb68c2e45f92d0293fdedfc"],
            price:[]
        })
    }
    const loadScifiMovies = () => {
        loadFilteredResults({
            category: ["5fb69aa145f92d0293fdedfe"],
            price:[]
        })
    }
    const loadThrillerMovies = () => {
        loadFilteredResults({
            category: ["5fb69aaf45f92d0293fdee00"],
            price:[]
        })
    }
    const loadWesternMovies = () => {
        loadFilteredResults({
            category: ["5fb69abb45f92d0293fdee01"],
            price:[]
        })
    }
    const loadWarMovies = () => {
        loadFilteredResults({
            category: ["5fb69ac245f92d0293fdee03"],
            price:[]
        })
    }
    const loadSuperheroMovies = () => {
        loadFilteredResults({
            category: ["5fba989fbb2bab039aebbd47"],
            price:[]
        })
    }
    const loadAll = () => {
        loadFilteredResults({
            price:[]
        })
    }

    const loadMore = () => {
        let toSkip = skip + limit
        getFilteredProducts(toSkip, limit, myFilters.filters).then(data => {
            if (data.error){
                setError(data.error)
            }else{
                setFilteredResults([...filteredResults, ...data.data])
                setSize(data.size)
                setSkip(toSkip)
            }
        })
    }

    // const loadMoreButton = () => {
    //     return (
    //         size > 0 && size >= limit && (
    //             <button onClick={loadMore} className="btn btn-warning mb-5">Load more</button>
    //         )
    //     )
    // }

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

            <h2 className="mb-4">Select your Genres</h2>
            <div className="row">
                <button onClick={loadAll} className="btn btn-success">
                    All
                </button>
                 <span>&nbsp;&nbsp;</span>
                <button onClick={loadActionMovies} className="btn btn-success">
                    Action
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadComedyMovies} className="btn btn-success">
                    Comedy
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadDramaMovies} className="btn btn-success">
                    Drama
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadHorrorMovies} className="btn btn-success">
                    Horror
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadAnimationMovies} className="btn btn-success">
                    Animation
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadScifiMovies} className="btn btn-success">
                    Sci-fi
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadThrillerMovies} className="btn btn-success">
                    Thriller
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadWesternMovies} className="btn btn-success">
                    Western
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadWarMovies} className="btn btn-success">
                    War
                </button>
                <span>&nbsp;&nbsp;</span>
                <button onClick={loadSuperheroMovies} className="btn btn-success">
                    Superhero
                </button> 
            </div>
        <h2 className="mb-4">All Products</h2>






            <div className="row">  
                {/* {console.log(filteredResults)}    */}
                {filteredResults.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                        <Card key={i} product={product} />
                    </div>
                ))}
            </div>
            {/* {loadMoreButton()} */}

        </Layout>
    )
}
export default Home;