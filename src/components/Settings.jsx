import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 20px;
`;

const ProfileSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 76px;
  height: 76px;
`;

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #F2F2F2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AvatarUpload = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Name = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Email = styled.p`
  color: #666;
  margin-bottom: 8px;
`;

const Description = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #E6E6E6;
  border-radius: 6px;
  font-size: 16px;
  resize: vertical;
  margin-top: 16px;
  
  &::placeholder {
    color: #999;
  }
`;

const Settings = () => {
  const [avatar, setAvatar] = useState(null);
  const [description, setDescription] = useState('');
  
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container>
      <ProfileSection>
        <AvatarContainer>
          <Avatar>
            {avatar ? (
              <img src={avatar} alt="Profile" />
            ) : (
              '📷'
            )}
          </Avatar>
          <AvatarUpload
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
          />
        </AvatarContainer>
        
        <UserInfo>
          <Name>Marry Doe</Name>
          <Email>marry@gmail.com</Email>
        </UserInfo>
      </ProfileSection>
      
      <Description
        placeholder="Tell us about yourself"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Container>
  );
};

export default Settings;