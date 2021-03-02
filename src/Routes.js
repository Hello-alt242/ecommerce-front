import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'
import PrivateRoute from './auth/PrivateRoute'
import Dashboard from './user/userDashboard'
import AdminRoute from './auth/AdminRoute'
import AdminDashboard from './user/AdminDashboard'
import AddCategory from './admin/AddCategory'
import AddProduct from './admin/AddProduct'
import Shop from './core/Shop'
import Product from './core/Product'
import Cart from './core/Cart'
import Orders from './admin/Orders'
import Profile from './user/Profile'
import ManageProducts from './admin/ManageProducts'
import UpdateProduct from './admin/UpdateProduct'
import stepone from './core/StepOne'
import steptwo from './core/StepTwo'
import stepthree from './core/StepThree'
import stepfour from './core/StepFour'
import Lishi from './user/Lishi'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/> 
                <Route path="/shop" exact component={Shop}/> 
                <Route path="/signin" exact component={Signin}/> 
                <Route path="/signup" exact component={Signup}/> 
                <Route path="/stepone" exact component={stepone}/>
                <Route path="/steptwo" exact component={steptwo}/>
                <Route path="/stepthree" exact component={stepthree}/>
                <Route path="/stepfour" exact component={stepfour}/>
                <PrivateRoute 
                    path="/user/dashboard" 
                    exact 
                    component={Dashboard} 
                />
                <AdminRoute 
                    path="/admin/dashboard" 
                    exact 
                    component={AdminDashboard} 
                />
                <AdminRoute 
                    path="/create/category" 
                    exact 
                    component={AddCategory} 
                />
                <AdminRoute 
                    path="/create/product" 
                    exact 
                    component={AddProduct} 
                />
                <Route path="/product/:productId" exact component={Product}/>
                <Route path="/cart" exact component={Cart}/>  
                <AdminRoute 
                    path="/admin/orders" 
                    exact 
                    component={Orders} 
                />
                <PrivateRoute 
                    path="/profile/:userId" 
                    exact 
                    component={Profile} 
                />
                <PrivateRoute
                    path="/history/:userId"
                    exact
                    component={Lishi}
                />
                <AdminRoute 
                    path="/admin/products" 
                    exact 
                    component={ManageProducts} 
                />
                <AdminRoute 
                    path="/admin/product/update/:productId" 
                    exact 
                    component={UpdateProduct} 
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;