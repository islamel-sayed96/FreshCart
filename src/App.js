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



let routers= createBrowserRouter([
    {path:'',element:<Layout/>,children:[
        {index:true,element:<Home/>},
        {path:'products',element:<ProductDetails/>},
        {path:'about',element:<About/>},
        {path:'categories',element:<CategorySlider/>},
        {path:'register',element:<Resgister/>},
        {path:'login',element:<Login/>},
        {path:'*',element:<NotFound/>},
        
    ]}
])


export default function App() {


    return <RouterProvider router={routers}></RouterProvider>
   

}


