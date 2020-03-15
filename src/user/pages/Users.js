import React from 'react';
import UsersList from '../components/UsersList'

const USERS = [{
  id: 1,
  name: 'Jorge',
  image: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  places: 3
}, {
  id: 2,
  name: 'Jorge MC',
  image: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  places: 1
}]

function Users(props) {
  return (
    <div>
      <UsersList items={USERS}/>
    </div>
  );
}

export default Users;