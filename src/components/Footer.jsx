import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='h-[10vh] bg-slate-400 text-sm flex items-center px-2 font-semibold border-t dark:bg-stone-900 dark:text-white'>
      Copyright &nbsp;<AiOutlineCopyrightCircle size={20} />&nbsp; 2024 FoodiesHub. All rights reserved.
    </div>
  )
}

export default Footer