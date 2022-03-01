import Link from 'next/link';

export const IndexPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">Login</Link>
    </div>
  );
};

// will run from server; hides from user
export const getServerSideProps = async (context) => {
  const { req, res, query, resolvedUrl } = context;
  console.log('IndexPage getServerSideProps', { req, res, query, resolvedUrl });
  return {
    props: {
      initProps: 'initProps',
    },
  };
};

export default IndexPage;
