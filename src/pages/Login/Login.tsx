import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { initKakao, loginWithKakao } from '../../utils/kakaoAuth';
import {
  LoginContainer,
  LoginCard,
  LogoSection,
  LogoContainer,
  LogoEmoji,
  LogoTitle,
  WelcomeTitle,
  WelcomeSubtitle,
  SocialLoginSection,
  KakaoLoginButton,
  GoogleLoginButton,
  Divider,
  BackButton
} from './Login.styled';

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
    navigate('/');
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