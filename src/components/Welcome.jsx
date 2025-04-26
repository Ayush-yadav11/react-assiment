import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: #666;
  margin-bottom: 24px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 8px 0;
  
  ${props => props.primary && `
    background-color: #6C25FF;
    color: white;
  `}
  
  ${props => props.secondary && `
    background-color: #F7F8F9;
    color: #6C25FF;
  `}
`;

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Welcome to PopX</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
      <Button primary onClick={() => navigate('/signup')}>Create Account</Button>
      <Button secondary onClick={() => navigate('/signin')}>Already Registered? Sign In</Button>
    </Container>
  );
};

export default Welcome;