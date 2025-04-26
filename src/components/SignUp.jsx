import { useState } from 'react';
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #E6E6E6;
  border-radius: 6px;
  font-size: 16px;
  
  &::placeholder {
    color: #999;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  margin: 8px 0;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  cursor: pointer;
  width: 20px;
  height: 20px;
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
  background-color: #6C25FF;
  color: white;
  text-align: center;
  
  &:disabled {
    background-color: #B7B7B7;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #FF4D4F;
  font-size: 14px;
  margin-top: 4px;
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    userType: 'individual'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle sign up logic here
      navigate('/settings');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container>
      <Title>Create your PopX account</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </div>

        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>

        <div>
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </div>

        <div>
          <p>Are you an Agency?</p>
          <RadioGroup>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="userType"
                value="individual"
                checked={formData.userType === 'individual'}
                onChange={handleChange}
              />
              Individual
            </RadioLabel>
            <RadioLabel>
              <RadioInput
                type="radio"
                name="userType"
                value="agency"
                checked={formData.userType === 'agency'}
                onChange={handleChange}
              />
              Agency
            </RadioLabel>
          </RadioGroup>
        </div>

        <Button 
          type="submit" 
          disabled={!formData.email || !formData.password || !formData.name || !formData.phone}
        >
          Create Account
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;