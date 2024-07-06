import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../store/reducers/cartSlice';
import { addOrder, updateOrderStatus } from '../store/reducers/ordersSlice';

const PaymentSuccess = () => {
    const cartItems = useSelector(state => state.cart.items);
    const orders = useSelector(state => state.orders.orders);
    const dispatch = useDispatch();
    const [timeLeft, setTimeLeft] = useState(10); 
    const [currentOrderId, setCurrentOrderId] = useState(null);

    useEffect(()=>{
        dispatch(addOrder({cartItems}));
        dispatch(clearCart());
    }, [])

    useEffect(()=>{
        if(orders.length > 0 && currentOrderId === null){
            setCurrentOrderId(orders[orders.length - 1].orderId);
        }
    }, [orders, currentOrderId])

    useEffect(() => {
        if (timeLeft === 0 && currentOrderId !== null) {
            dispatch(updateOrderStatus({ orderId: currentOrderId, status: 'delivered' }));
        }
    }, [timeLeft, currentOrderId]);

    useEffect(() => {
        if (timeLeft === 0) return;
    
        const timerId = setInterval(() => {
          setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
    
        return () => clearInterval(timerId);
    }, [timeLeft]);

  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
        <div className='flex flex-col items-center justify-center min-h-[80vh] gap-12'>
            <h2 className='text-3xl font-medium uppercase'>Payment Success</h2>
            <img src='/scooter.gif' alt='scooter'/>
            {timeLeft > 0 ? (
                <div className='text-5xl font-mono'>{timeLeft} sec</div>
            ) : (
                <div className='text-5xl font-mono'>Food Arrived</div>
            )}
        </div>
    </div>
  )
}

export default PaymentSuccess