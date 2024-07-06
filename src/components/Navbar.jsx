import React, {useState} from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineSun } from "react-icons/ai";
import { AiFillMoon } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineFile } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../store/reducers/appSlice';
import { logout } from '../store/reducers/appSlice';
import { clearCart } from '../store/reducers/cartSlice';
import { clearOrders } from '../store/reducers/ordersSlice';
import CheckOutsideClick from './CheckOutsideClick';
import { toast } from 'react-toastify';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector(state => state.app.isDarkMode);
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const cart = useSelector(state => state.cart.items);
  const toggleMode = () => dispatch(toggleDarkMode());
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const toggleLoginMenu = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen);
  }
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    dispatch(clearOrders());
    toast.success("Logged out successfully!");
    navigate('/');
  }
  return (
    <div className='flex items-center justify-between h-[10vh] px-4 py-1 shadow-md border-b dark:bg-stone-900 dark:text-white'>
        <Link to='/' className='flex items-center gap-2'>
            <img src='/chefs-hat.png' alt='logo' className='w-9 h-9' />
            <h5 className='uppercase font-semibold'>Foodies <span className='text-[#FF0000]'>Hub</span></h5>
        </Link>
        <nav className='flex items-center gap-4 text-sm'>
            {darkMode ?
                <AiFillMoon onClick={toggleMode} size={25} className='cursor-pointer' /> : 
                <AiOutlineSun onClick={toggleMode} size={25} color='#facc15' className='cursor-pointer' /> }
            <NavLink to='/cart' className='flex items-center gap-1' style={(e)=>{
                return {
                    color: e.isActive ? '#FF0000' : '',
                }
            }}>
                <span className='relative'>
                    <AiOutlineShoppingCart size={25} />
                    <span className='absolute -top-3 -right-3 rounded-full bg-green-600 text-white w-5 h-5 flex items-center justify-center text-xs'>{cart?.length}</span>
                </span> cart
            </NavLink>
            {
                isLoggedIn ? (
                    <div onClick={toggleLoginMenu} className='flex items-center gap-1 cursor-pointer relative'>
                        <RxAvatar size={25} /> Test User <IoMdArrowDropdown size={20} />
                        {isLoginMenuOpen && <CheckOutsideClick onClickOutside={toggleLoginMenu}><div className='absolute top-full left-0 bg-white w-full shadow-md rounded-md mt-2'>
                            <Link to='/orders' className='flex items-center gap-2 px-3 py-2 border-b dark:text-black'><AiOutlineFile size={15} /> All Order</Link>
                            <div onClick={handleLogout} className='flex items-center gap-2 px-3 py-2 border-b dark:text-black'><AiOutlineLogout size={15} /> Logout</div>
                        </div></CheckOutsideClick>}
                    </div>
                ) : (
                    <NavLink to='/login' className='flex items-center gap-1' style={(e)=>{
                        return {
                            color: e.isActive ? '#FF0000' : '',
                        }
                    }}>
                        <AiOutlineLogin size={25} /> login
                    </NavLink>
                )
            }
        </nav>
    </div>
  )
}

export default Navbar