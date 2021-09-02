import {Actiontype} from '../container/actionType';
const intialstate={
    products:[{
        id:1,
        title:"GeolocationPosition",
        category:"programer",
    }]
}
export const ProductReducer=(state=intialstate,{type,payload})=>{

switch (type) {
    case Actiontype.SAMPLE_PRODUCTS:
         return {...state,products:payload};

    default:
        return state;
}
}