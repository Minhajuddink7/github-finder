import React, { useState, useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const GithubContext = useContext(githubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please Enter the username', 'light');
    } else {
      GithubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          placeholder='Search Users...'
          name='text'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {GithubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={GithubContext.clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
