import styled from 'styled-components';

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #fff1cf 0%, #FFFADE 50%);
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LoginCard = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }
`;

export const LogoSection = styled.div`
  margin-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.3rem;
  }
`;

export const LogoEmoji = styled.div`
  font-size: 2rem;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Cherry Bomb One', cursive;
  color: #7DA2FF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 1px;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const WelcomeTitle = styled.h2`
  font-size: 1.5rem;
  color: #7DA2FF;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const SocialLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const KakaoLoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #7DA2FF, #8e98ff);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 2px 10px rgba(125, 162, 255, 0.3);
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(125, 162, 255, 0.4);
    background: linear-gradient(45deg, #6d8fff, #7da2ff);
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const GoogleLoginButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: transparent;
  color: #7DA2FF;
  border: 2px solid #7DA2FF;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(125, 162, 255, 0.2);
    background: #7DA2FF;
    color: white;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #ddd;
  }
  
  span {
    padding: 0 1rem;
    color: #999;
    font-size: 0.9rem;
  }
`;

export const BackButton = styled.button`
  background: transparent;
  color: #7DA2FF;
  border: 2px solid #7DA2FF;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #7DA2FF;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(125, 162, 255, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;