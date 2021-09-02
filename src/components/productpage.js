import React,{useEffect} from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import axios from 'axios';
import {SampleProducts} from '../actions/productAction';


export const ProductPage=()=>{
    const products=useSelector((state)=>state.allproducts.products);
    const{id,title}=products;
    console.log(products);

    const dispatch=useDispatch()

    const fetchSampleProducts=async()=>{
        const response=await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log("Err",err);
        })
        dispatch(SampleProducts(response.data));
    }

    useEffect(()=>{fetchSampleProducts()},[])

    const renderproduct=products.map((products)=>{
        return(
            <div>
                <div>
                    <span>{products.id}</span>
                    <span>{products.title}</span>
                    <div >
                    <img src={products.image}/>
                    </div>
                    

                </div>
            </div>
        )
    })
    console.log(products);
    return(
        <div>{renderproduct}</div>
    )
        
    
}

export default ProductPage;