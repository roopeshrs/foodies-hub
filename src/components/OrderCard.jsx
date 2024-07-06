import React from 'react'
import { GoDash } from "react-icons/go";

const OrderCard = ({order}) => {
    const {items, status} = order;
  return (
    <div className='bg-white border-b py-8 max-w-[75%] sm:max-w-[90%] dark:bg-stone-900 dark:text-white'>
        <h2 className='text-md font-semibold uppercase'>items</h2>
        {items?.map((item, index) => (
            <div key={index}>
                <h3 className='flex items-center'><GoDash size={15} /> {item?.card?.info?.name} ({item?.quantity} No) </h3>
            </div>
        ))}
        <h2 className='text-md font-semibold uppercase mt-4'>status</h2>
        {status === 'delivered' ? <span className='text-green-700 font-semibold'>{status}</span> : <span className='text-yellow-700 font-semibold'>{status}</span>}
    </div>
  )
}

export default OrderCard