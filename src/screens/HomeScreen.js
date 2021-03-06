 import React, { useEffect}  from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import {useSelector, useDispatch} from 'react-redux';
import { listProducts } from '../actions/index';

const HomeScreen = () => {
    const dispatch = useDispatch();
     const productList =  useSelector (state => state.productList);
     const {loading, error, products} = productList;
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);
    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>) : error ?
             (<MessageBox>{error}</MessageBox>) : 
             (<div className= "row center">
             {products.map((product) => (
            <Product key= {product._id} product= {product}></Product>
            ))
            }       
           </div>
            )}
        </div>
    );
}

export default HomeScreen
