import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { initKakao, loginWithKakao } from '../utils/kakaoAuth';

const LoginContainer = styled.div`
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

const LoginCard = styled.div`
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

const LogoSection = styled.div`
  margin-bottom: 2rem;
`;

const LogoContainer = styled.div`
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

const LogoEmoji = styled.div`
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

const LogoTitle = styled.h1`
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

const WelcomeTitle = styled.h2`
  font-size: 1.5rem;
  color: #7DA2FF;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const WelcomeSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SocialLoginSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const KakaoLoginButton = styled.button`
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

const GoogleLoginButton = styled.button`
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

const Divider = styled.div`
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

const BackButton = styled.button`
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

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 카카오 SDK 초기화
    initKakao();
  }, []);

  const handleKakaoLogin = async () => {
    setIsLoading(true);
    try {
      const result = await loginWithKakao();
      console.log('Login successful:', result);

      // 로그인 성공 시 홈으로 이동
      alert(`환영합니다, ${result.userInfo.properties.nickname}님!`);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // TODO: Implement Google login logic
    alert('구글 로그인은 준비중입니다!');
  };

  const handleBack = () => {
    navigate('/'); // ⬅️ 홈으로 이동
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LogoSection>
          <LogoContainer>
            <LogoEmoji>🍚</LogoEmoji>
            <LogoTitle>MOBABMO</LogoTitle>
            <LogoEmoji>🍽️</LogoEmoji>
          </LogoContainer>
          <WelcomeTitle>로그인</WelcomeTitle>
          <WelcomeSubtitle>
            소셜 로그인으로 간편하게 시작하세요!<br/>
            더 많은 음식 추천을 받아보세요🍕
          </WelcomeSubtitle>
        </LogoSection>

        <SocialLoginSection>
          <KakaoLoginButton onClick={handleKakaoLogin} disabled={isLoading}>
            <span>💬</span>
            {isLoading ? '로그인 중...' : '카카오로 시작하기'}
          </KakaoLoginButton>

          <GoogleLoginButton onClick={handleGoogleLogin}>
            <span>🔍</span>
            구글로 시작하기
          </GoogleLoginButton>
        </SocialLoginSection>

        <Divider>
          <span>또는</span>
        </Divider>

        <BackButton onClick={handleBack}>
          🏠 홈으로
        </BackButton>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
