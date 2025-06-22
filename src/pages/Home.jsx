import { faker } from '@faker-js/faker';
import { Button } from '@material-tailwind/react';
import {
  List,
  ListItem,
  ListItemSuffix,
  Chip,
  Card,
} from "@material-tailwind/react";
import { useState } from 'react';

export default function Home() {

  const [data, setData] = useState([]);

  const handleClick = () => {
    setData((prev) => [...prev, faker.science.chemicalElement()]);
  }

  const handleDelete = (indexToDelete) => {
    setData((prev) => prev.filter((_, index) => index !== indexToDelete));
  }

  return (
    <div className='p-5'>

      <Button onClick={handleClick} className='cursor-pointer'> Add Fake Data</Button>

      {data.length > 0 && <Card className="w-96 mt-6">
        <List>
          {data.map((chemical, index) => {
            return <ListItem key={index}>
              {chemical.name}
              <ListItemSuffix className='flex gap-5'>
                <Chip
                  value={chemical.symbol}
                  variant="ghost"
                  size="sm"
                  className="rounded-full"
                />
                <Button onClick={() => handleDelete(index)} size='sm' className='text-[10px]' color='pink'>Delete</Button>
              </ListItemSuffix>
            </ListItem>
          })}


        </List>
      </Card>
      }


    </div>
  )
}