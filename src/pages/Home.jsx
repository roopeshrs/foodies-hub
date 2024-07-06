import React, {useState, useEffect} from 'react'
import axios from '../utils/axios';
import { toast } from 'react-toastify';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetchRestaurants();
  }, [])

  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/restaurants/list/v5?lat=13.0384064&lng=77.5183272`);
      setData(response?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to fetch restaurants");
    }
  }

  return (
    <div className='min-h-[80vh] dark:bg-stone-900 dark:text-white'>
      <div className='flex flex-wrap justify-center'>
        {loading ? <img src='./loading.gif' alt="loading..." /> : (
          data?.map(item => <RestaurantCard key={item?.info?.id} restaurant={item} />)
        )}
      </div>
    </div>
  )
}

export default Home