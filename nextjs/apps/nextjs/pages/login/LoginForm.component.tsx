import { useRouter } from 'next/router';
import * as Styled from './LoginForm.styles';

export const LoginForm = () => {
  const router = useRouter();

  return (
    <Styled.FormContainer>
      <Styled.Title>Login</Styled.Title>
      <button
        onClick={() => {
          router.push('/dashboard');
          console.log({ router });
        }}
      >
        Regular
      </button>
      <Styled.Button
        onClick={() => {
          router.push('/dashboard');
        }}
      >
        Sign In
      </Styled.Button>
    </Styled.FormContainer>
  );
};

export default LoginForm;
