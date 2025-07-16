
import { Button, Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "./userSlice";


export default function UserList() {
  const { users } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <div className="p-5">

      {users.map((user, index) => {
        return <div key={user.id}>
          <Typography variant="h5">{user.username}</Typography>
          <p className="italic">{user.email}</p>
          <p>{user.country}</p>
          <p>{user.gender}</p>
          <p>{user.detail}</p>
          <div className="flex gap-6">
            {user.habits.map((habit) => {
              return <p key={habit}>{habit}</p>
            })}
          </div>
          <div className="space-x-5">

            <Button >Edit</Button>
            <Button onClick={() => dispatch(removeUser(index))}>delete</Button>
          </div>
        </div>
      })}

    </div>
  )
}
