import { createContext, useContext, useReducer } from "react";

export const cartContext = createContext();

export const useShoppingCart = () => useContext(cartContext);

const shoppingCartInitialState = [];
const addItem = 'addItem';
const removeItem = 'removeItem';
const emptyCart = 'emptyCart';

const shoppingCartReducer = (state, action) => {

    switch (action.type) {
        
        case addItem:

            const itemInCart = state.find(cartItem => cartItem.id === action.cartItem.id);
            const cartRemovedFoundItem = state.filter(item => item.id !== action.cartItem.id);
            
            if (!itemInCart)
                return [ ...state, { ...action.cartItem, quantity: 1 } ];
            else
                return [ ...cartRemovedFoundItem, { ...action.cartItem, quantity: itemInCart.quantity + 1 } ];
            
        case removeItem:
            
            return state.filter(item => item.id !== action.itemId);
        
        case emptyCart:
            
            return shoppingCartInitialState;
            
        default: break;
    }
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////

export const CartProvider = (props) => {

    const { children } = props;
    const [ shoppingCart, dispatch ] = useReducer(shoppingCartReducer, shoppingCartInitialState);

    const removeItemFromCart = (id) => {
        dispatch({
            type: removeItem,
            itemId: id,
        })
    };

    const addItemToCart = (product) => {

        dispatch({
            type: addItem,
            cartItem: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            }
        })
    };

    const emptyShoppingCart = () => {
        dispatch({ type: emptyCart })
    }

    const total = shoppingCart.reduce((previousValue, cartItem) => {
        return previousValue + (cartItem.price * cartItem.quantity);
    }, 0);

    return (
        <cartContext.Provider value={{ shoppingCart, removeItemFromCart, addItemToCart, emptyShoppingCart, total }}>
            {children}
        </cartContext.Provider>
    )
}