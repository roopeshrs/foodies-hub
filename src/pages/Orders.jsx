import React from 'react'
import { useSelector } from 'react-redux'
import OrderCard from '../components/OrderCard';

const Orders = () => {
  const orders = useSelector(state => state.orders.orders);
  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
      <h2 className='text-3xl font-semibold p-8'>Orders History</h2>
      <div className='flex flex-col min-h-[80vh] px-8 pb-8'>
        {orders?.map(order => <OrderCard key={order?.orderId} order={order} />)}
      </div>
    </div>
  )
}

export default Orders