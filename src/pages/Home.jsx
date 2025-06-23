import { faker } from '@faker-js/faker';
import { useState } from 'react';
import { Button } from '@material-tailwind/react';

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(0);
  const [avatar, setAvatar] = useState('');
  const [randomEmail, setEmail] = useState('');

  const handleColor = () => {
    setToggle(!toggle);
  };

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  const generateRandomUser = () => {
    const fakeAvatar = faker.image.avatar();
    const fakeEmail = faker.internet.email();
    setAvatar(fakeAvatar);
    setEmail(fakeEmail);
  };

  return (
    <div className={`p-5 min-h-screen transition-colors duration-300`}>
      <Button color={`${toggle ? 'red' : 'black'}`} onClick={handleColor}>Toggle Color</Button>
      <br /><br />

      <Button onClick={increment}>Increment</Button>
      <h1 className="text-2xl my-2">{count}</h1>
      <Button onClick={decrement}>Decrement</Button>
      <br /><br />

      <Button color="purple" onClick={generateRandomUser}>Create Random Image</Button>
      {avatar && (
        <div className="mt-4">
          <img src={avatar} alt="Random Avatar" className="rounded-full w-32 h-32 mx-auto" />
          <p className="text-center mt-2">{randomEmail}</p>
        </div>
      )}
    </div>
  );
}
