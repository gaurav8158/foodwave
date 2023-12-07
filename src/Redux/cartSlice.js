import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addTocart: (state, action) => {
            console.log(action.payload)
            // console.log(state)
            const index = state.items.findIndex(val => val.item.id === action.payload.item.id);
            console.log(index)
            if (index == -1) {
                let cartObj = {
                    item: action.payload.item,
                    count: action.payload.count,
                }
                console.log(cartObj)
                state.items.push(cartObj);
                localStorage.setItem("cart", JSON.stringify(state.items))
            }
            else {
                state.items = state.items.map((data) => {
                    if (data.item.id === action.payload.item.id) {
                        return { ...data, count: action.payload.count };
                    }
                    return data;
                });
                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },
        removeFromCart: (state, action) => {
            console.log(state.items, action.payload)
            if (action.payload.count == 0) {
                state.items = state.items.filter((data) => {
                    return data.item.id != action.payload.item.id;
                })
                localStorage.setItem("cart", JSON.stringify(state.items))
            }
            else {
                state.items = state.items.map((data) => {
                    if (data.item.id === action.payload.item.id) {
                        return { ...data, count: action.payload.count };
                    }
                    return data;
                });
                localStorage.setItem("cart", JSON.stringify(state.items));
            }

            //    console.log(JSON.stringify(state.items));


        },





        clearCart: (state) => {
            localStorage.removeItem("cart");
            state.items = [];
        },
        // removeFromCart: (state, action) => {
        //     console.log(action.payload)
        //     const arr = state.items.map((val) => {
        //         if (val.item.id !== action.payload.itemId) {
        //             val.count = action.payload.count;
        //         }
        //     })
        //     localStorage.setItem("cart", JSON.stringify(arr))
        //     state.items = arr;
        //     console.log('arr', arr);
        // }
    }
})

export const { addTocart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;




// const arr = [
//     {
//     items:[ {
//         item: item1,
//         count: count1,
//     },
// {
//     item: item2,
//     count: count2,
// },
// {
//     item: item2,
//     count: count2,
// }],
//     count: 0,
// }
// ]