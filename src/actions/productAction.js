import {Actiontype} from '../container/actionType'
export const SampleProducts=(products)=>{
    return{
        type:Actiontype.SAMPLE_PRODUCTS,
        payload:products
    }
}