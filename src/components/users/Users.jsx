import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../spinner/Spinner';
import './Users.css';
import githubContext from '../../context/github/githubContext';

let Users = () => {
  const GithubContext = useContext(githubContext);
  const { loading, users } = GithubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='wrapper'>
        {users.map(user => {
          return <UserItem user={user} key={user.id} />;
        })}
      </div>
    );
  }
};

export default Users;
