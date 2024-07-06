import React, {useState, useEffect} from 'react'
import axios from '../utils/axios'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import MenuCard from '../components/MenuCard';

const Menu = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetchMenuDetails();
    }, [])

    const fetchMenuDetails = async () => {
        try {
          setLoading(true);
          const response = await axios.get(`/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0384064&lng=77.5183272&restaurantId=${id}`);
          setData(response?.data?.data?.cards);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          toast.error("Failed to fetch menu details");
        }
    }

  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
        <h2 className='text-4xl text-white font-bold px-4 py-16 bg-slate-600'>{data[0]?.card?.card?.text}</h2>
        <div className='flex flex-col items-center py-16'>
            {loading ? <img src='/loading.gif' alt="loading..." /> : (
                data[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item, index) => <MenuCard key={index} menuItem={item} />)
            )}
        </div>
    </div>
  )
}

export default Menu