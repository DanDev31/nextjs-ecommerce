import { InitialState } from "./AppContext";

export const reducer = (state:InitialState, action:{type:string, payload:any}):InitialState => {
    switch(action.type){
        case "ADD_TO_CART":
            const cartItem = state.cart.find(item => item._id === action.payload.product._id);
            state.total = state.total + (action.payload.product.price * action.payload.quantity);
            state.totalProducts = state.totalProducts + 1;
            if(cartItem){
                const updateProducts = state.cart.map(product => {
                    if(product._id === action.payload.product._id){
                        return {
                            ...product,
                            quantity:product.quantity + action.payload.quantity
                        }
                    }else{
                        return product
                    }
                })
                localStorage.setItem("cart", JSON.stringify({...state, updateProducts}));
                return {
                    ...state,
                    cart:updateProducts
                }
            }else{
                const product = {
                    ...action.payload.product,
                    quantity:action.payload.quantity
                }
                localStorage.setItem("cart", JSON.stringify({...state, cart:[...state.cart, product]}));
                return {
                    ...state,
                    cart:[...state.cart, product]
                }
            }

         case "INCREMENT_QUANTITY":
             const incrementQuantity = state.cart.map(product => {
                if(product._id === action.payload.id){
                    state.total = state.total + product.price
                    return {
                        ...product,
                        quantity:product.quantity + 1
                    }
                }else{
                    return product
                }
             });
             localStorage.setItem("cart", JSON.stringify({...state, cart:incrementQuantity}));
             return {
                ...state,
                cart:incrementQuantity
             }

             case "DECREMENT_QUANTITY":
             const decrementQuantity = state.cart.map(product => {
                if(product._id === action.payload.id){
                    if(product.quantity > 1){
                        state.total = state.total - product.price
                        return {
                            ...product,
                            quantity:product.quantity + 1
                        }
                    }else{
                        return product
                    }
                }else{
                    return product
                }
             });
             localStorage.setItem("cart", JSON.stringify({...state, cart:decrementQuantity}));
             return {
                ...state,
                cart:decrementQuantity
             }
         case "REMOVE_FROM_CART":
            const foundItem = state.cart.find(product => product._id === action.payload.id);
            const removeItems = state.cart.filter(product => product._id !== action.payload.id);
            if(foundItem){
                state.total = state.total - (foundItem?.price * foundItem.quantity);
            }
            state.totalProducts = state.totalProducts - 1;
            localStorage.setItem("cart", JSON.stringify({...state, cart:removeItems}));
            return {
                ...state,
                cart:removeItems
            }   
         default:
            return state;   
    }
}