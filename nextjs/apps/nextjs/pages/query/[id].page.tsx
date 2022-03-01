import axios from 'axios';
import { useMutation } from 'react-query';

export const QueryPage = ({ id }) => {
  const { mutate, isLoading, data } = useMutation('validateId', async () => {
    const { data } = await axios.post(`/api/query/${id}`, { id });
    return data;
  });

  return (
    <div>
      <h1>Query</h1>
      <p>id: {id}</p>
      <button
        onClick={() => {
          mutate();
        }}
      >
        Validate ID
      </button>
      {isLoading && <p>Validating...</p>}
      {data && <p>Validated {JSON.stringify(data)}</p>}
    </div>
  );
};

// // http://localhost:4200/query/1
// export const getStaticPaths = async () => {
//   return {
//     fallback: false, // false=no need to fetch more from the server that isnt defined under `paths`; true=fetch more from the server if it is not here
//     paths: [
//       {
//         params: {
//           id: '1',
//         },
//       },
//       {
//         params: {
//           id: '2',
//         },
//       },
//     ],
//   };
// };

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   console.log('QueryPage getStaticProps', { params }); // { params: { id: '1' }
//   return {
//     props: {
//       dashboard: 'props',
//     },
//   };
// };

// http://localhost:4200/query/1
export const getServerSideProps = async (context) => {
  const { query } = context;

  console.log('QueryPage getServerSideProps', { query }); // { query: { id: '1' } }
  return {
    props: {
      id: query.id || null,
    },
  };
};

export default QueryPage;
