import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Resgister from './Components/Resgister/Resgister';
import Login from './Components/Login/Login';
import CategorySlider from './Components/CategorySlider/CategorySlider';
import NotFound from './Components/NotFound/NotFound';
import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';


function App(){

    const [userData, setUserData] = useState(null);
    function saveUserData(){
        //el function de bta3mel 3 7agat 
        //1-bto7 ll localStorage ta get el item el asmo userToken
        let encodedToken = localStorage.getItem('userToken');
        //2- bnl5i el tashfer tani 
        let decodedToken = jwtDecode(encodedToken);
        //3-el data b2a bta3et el user el rag3a ba a3mlha save fen fel userData
        setUserData(decodedToken);
    }
    let routers= createBrowserRouter([
        {path:'',element:<Layout userData={userData}/> ,children:[
            {index:true,element:<Home/>},
            {path:'products',element:<ProductDetails/>},
            {path:'about',element:<About/>},
            {path:'categories',element:<CategorySlider/>},
            {path:'register',element:<Resgister/>},
            {path:'login',element:<Login saveUserData={saveUserData}/>},
            {path:'*',element:<NotFound/>},
            
        ]}
    ])
    
    return <RouterProvider router={routers}></RouterProvider>
}


export default  App ;



