export const initialState = {
    cart: [],
    totalPrice: 0,
    credentials: null
}

const calculatePrice = (cart) => {
    return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
}

const updateQuantity = (cart, payload) => { 
    console.log(payload);
    const { id, quantity } = payload;
    const index = cart.findIndex(item => item.id === id);
    cart[index].quantity = quantity;
    return cart;
}

export const reducer = (state, action) => {
    switch (action.type) { 
        case 'ADD_TO_CART': {
            return { ...state, cart: [...state.cart, action.payload], totalPrice: calculatePrice([...state.cart, action.payload])};
        }
        case "REMOVE_FROM_CART": { 
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload), totalPrice: calculatePrice(state.cart.filter(item => item.id !== action.payload))};
        }
        case "UPDATE_QUANTITY": { 
            return { ...state, cart:updateQuantity(state["cart"],action.payload),totalPrice:calculatePrice(state["cart"])};
        }
        case "UPDATE_CREDENTIALS": {
            return { ...state, credentials: action.payload };
        }
    }
}