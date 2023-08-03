import React from 'react';
import Default from '../components/Default';
import { useSelector } from 'react-redux';

function Home() {
  // Use the correct state name from your rootReducer
  const {users} = useSelector(state => state.usersReducer)

  return (
    <Default>
      <h1>Home Page</h1>
      <h1>Users Length = {users.length}</h1>
    </Default>
  );
}

export default Home;
