import { Avatar, Card, List, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react'
import MealCategoryLoader from './MealCategoryLoader';
import { useNavigate } from 'react-router';

export default function MealCategory() {
  const nav = useNavigate();
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();

  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  }


  useEffect(() => {
    getData();
  }, []);


  if (load) return <MealCategoryLoader />


  return (
    <div className='p-10'>

      {data &&
        <Card className='p-5'>
          <List>
            {data && data.categories.map((category) => {
              return <div onClick={() => nav(`mealCategory/${category.strCategory}`)} key={category.idCategory} className='space-y-3 mb-5 bg-gray-100 p-2 rounded-2xl hover:bg-gray-300 cursor-pointer'>

                <div className='flex items-center gap-4'>
                  <Avatar variant="circular" size='xl' alt="candice" src={category.strCategoryThumb} />
                  <Typography variant="h6" color="blue-gray">
                    {category.strCategory}
                  </Typography>

                </div>

                <div>

                  <Typography variant="small" color="gray" className="font-normal">
                    {category.strCategoryDescription}
                  </Typography>
                </div>


              </div>
            })}


          </List>
        </Card>}




    </div>
  )
}