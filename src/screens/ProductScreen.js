import React, { useEffect } from 'react'
// import Product from '../components/Product';
// import data from '../components/data';
import {Link} from 'react-router-dom'
// import HomeScreen from './HomeScreen';
import {useDispatch, useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { detailsProduct } from '../actions';


const ProductScreen = (props) => {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector (state => state.productDetails);
    const {loading, error, product} = productDetails;
//     const product = data.products.find((x)=> x._id === props.match.params.id)
    // if(!product){
    //     return <div> Product not found </div>
    // }
    useEffect(()=>{
        dispatch (detailsProduct(productId));
    }, [dispatch, productId])
    return (
        <div>
           {loading ? (<LoadingBox></LoadingBox>) : error ?
           (<MessageBox>{error}</MessageBox>) : 
           (
        //    <div className= "row center">
        //    {products.map((product) => ( 
        //   <Product key= {product._id} product= {product}></Product>
        //   ))
        //   }       
        //   </div>
        //   )}
        // </div>
        <div>
            <Link to="/">Back to Result</Link>
            <div className='row top'>
                <div className='col-2'>
                    <img className='large' src={product.image} alt={product.name}></img>
                </div>
                <div className='col-1'>
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            Price : {product.price}
                        </li>
                    </ul>
                </div>
                <div className='col-1'>
                    <div className='card card-body'>
                        <ul>
                            <li>
                                <div className='row'>
                                    <div>Price </div>
                                    <div className= 'price'>${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className='row'>
                                    <div>Status </div>
                                    <div>
                                        {product.countInStock>0 ? (<span className='success'>In Stock</span>):
                                        (<span className='error'> Unavailable</span>)}
                                    </div>
                            </div>                                
                            </li>
                            <li>
                                <button className='btn'>Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
           )
           }
           </div>
    )
}

export default ProductScreen
