import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Itemcard from '../RestaurentCard/Itemcard';
import { useState } from 'react';
import { useEffect } from 'react';
import { clearCart } from '../../Redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const item = useSelector((state) => state.cart.items);
    const total = item.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
    const dispatch = useDispatch();
    const isLogin = useSelector((state) => state.user.isLogin)
    const [sum, setSum] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        calculateSum();
    }, [dispatch, total])
    const calculateSum = () => {
        let total = 0;
        total = item.reduce((accumulator, currentValue) => accumulator + (currentValue.item.price!==undefined ? currentValue.item.price : 10000)  * currentValue.count, 0);
        setSum(total / 100);
    }
    const handleCheck = () => {
        if (isLogin) {
            handleClear();
        }
        else {
            navigate("/signin");
            return;
        }
        navigate("/checkout")
    }
    const handleClear = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            {total != 0 && total ? <div className='flex flex-col md:flex-row m-auto max-w-screen-lg'>

                <div className='w-full md:w-1/2 md:m-auto'>
                    {item != undefined && item.map((val) => {
                        return <Itemcard key={val.item.id} item={val.item} />
                    })}
                </div>

                <div className='w-full md:w-1/3 '>
                    <div className='my-5 p-5 bg-emerald-100 text-black font-semibold rounded-md'><span>Want to clear Cart..??</span><button className='ml-2 bg-rose-600 text-white p-2 rounded-lg' onClick={handleClear}>Clear cart</button></div>
                    <div className='p-5 bg-emerald-100 rounded-md'>
                        <p className='text-xl font-bold'>Bill Details</p>
                        <div className='flex justify-between '><span>number of items: </span>{total}</div>
                        <div className='flex justify-between'><span>Item Total</span><span>₹ {sum}</span></div>
                        <hr className='mt-5 border-slate-950' />
                        <div className='mt-2 flex justify-between font-bold'><span>TO PAY</span> <span>₹ {sum} /-</span></div>

                    </div>
                    <div onClick={handleCheck} className='bg-rose-600 mt-4 py-2 text-center font-extrabold rounded-lg text-white hover:bg-rose-700 cursor-pointer'>Checkout</div>
                </div>
            </div> : <div className='py-2 px-10 bg-blue-100 text-red-700 font-sans font-bold text-7xl h-screen flex justify-self-start items-center'>Your Cart is empty please Add items in to cart...</div>}
        </div>


    )
}

export default Cart