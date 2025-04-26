import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Settings from './components/Settings';
import styled from 'styled-components';

// Global styles
const AppContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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
  text-align: center;
  
  ${props => props.primary && `
    background-color: #6C25FF;
    color: white;
  `}
  
  ${props => props.secondary && `
    background-color: #F7F8F9;
    color: #6C25FF;
  `}
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #E6E6E6;
  border-radius: 6px;
  margin: 8px 0;
  font-size: 16px;
  
  &::placeholder {
    color: #999;
  }
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

function App() {
  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App
