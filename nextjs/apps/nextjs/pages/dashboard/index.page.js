import * as Styled from './index.styles';
import { useRouter } from 'next/router';

export const DashboardPage = () => {
  const router = useRouter();

  return (
    <Styled.Page>
      <h1>Dashboard</h1>
      <button
        onClick={() => {
          router.push('/');
        }}
      >
        Logout
      </button>
    </Styled.Page>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  console.log('DashboardPage getServerSideProps', res.locals);
  return {
    props: {
      dashboard: 'props',
    },
  };
};

export default DashboardPage;
