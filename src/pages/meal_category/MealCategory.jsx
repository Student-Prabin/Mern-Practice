import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react';
import axios from 'axios';
import { useEffect, useState } from 'react'

export default function MealCategory() {

  const [data, setData] = useState();
  const [err, setErr] = useState();

  const getData = async () => {
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setData(response.data);
    } catch (err) {
      setErr(err.message);
    }
  }


  useEffect(() => {
    getData();
  }, []);


  console.log(data);


  return (
    <div className='p-10'>
      {data &&
        <Card className='p-5'>
          <List>
            {data && data.categories.map((category) => {
              return <div key={category.idCategory} className='space-y-3 mb-5'>

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