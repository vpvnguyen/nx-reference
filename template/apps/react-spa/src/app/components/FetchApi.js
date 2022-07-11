import React from 'react';
import axios from 'axios';

export const FetchApi = () => {
  const [state, setState] = React.useState('');

  return (
    <div>
      <button
        onClick={async (event) => {
          event.preventDefault();
          try {
            const { data } = await axios.get('/api');
            setState(data?.message || 'Nothing retrieved');
          } catch (error) {
            console.error('FetchApi error', error);
            setState('Error fetching API');
          }
        }}
      >
        Fetch API
      </button>
      <p>{state}</p>
    </div>
  );
};
