import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='text-center card'>
      <h3>{login}</h3>
      <img
        className='round-img'
        src={avatar_url}
        style={{ width: '70px' }}
        alt='Not displayed'
      />
      <div>
        <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
