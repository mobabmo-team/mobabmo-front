import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  HomeContainer,
  LogoSection,
  LogoContainer,
  LogoEmoji,
  LogoTitle,
  LogoSubtitle,
  MainContent,
  ContentCard,
  WelcomeMessage,
  WelcomeText,
  ButtonContainer,
  RandomButton,
  LoginButton,
  FoodResult,
  FoodEmoji,
  FoodName,
  FoodDescription
} from './Home.styled';

// 임시 데이터
const foods = [
  { emoji: '🍕', name: '피자', description: '치즈가 쭉쭉 늘어나는 맛있는 피자!' },
  { emoji: '🍔', name: '햄버거', description: '육즙이 가득한 패티와 신선한 야채!' },
  { emoji: '🍜', name: '라면', description: '따뜻하고 얼큰한 라면 한 그릇!' },
  { emoji: '🍱', name: '도시락', description: '영양 만점 알록달록 도시락!' },
  { emoji: '🍗', name: '치킨', description: '바삭바삭 황금빛 치킨!' },
  { emoji: '🍝', name: '파스타', description: '쫄깃한 면발과 진한 소스!' },
  { emoji: '🍲', name: '찌개', description: '뜨끈뜨끈 속이 든든한 찌개!' },
  { emoji: '🥘', name: '덮밥', description: '한 그릇으로 든든한 덮밥!' },
  { emoji: '🌮', name: '타코', description: '멕시코의 매콤한 맛!' },
  { emoji: '🍤', name: '새우튀김', description: '바삭하고 통통한 새우튀김!' },
  { emoji: '🥙', name: '샌드위치', description: '신선한 재료가 가득한 샌드위치!' },
  { emoji: '🍛', name: '카레', description: '향신료가 가득한 진한 카레!' }
];

interface HomeProps {
  onNavigateToLogin: () => void;
}

const Home: React.FC<HomeProps> = ({ onNavigateToLogin }) => {
  const [selectedFood, setSelectedFood] = useState<typeof foods[0] | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const navigate = useNavigate();

  const handleRandomFood = () => {
    setIsSpinning(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * foods.length);
      setSelectedFood(foods[randomIndex]);
      setIsSpinning(false);
    }, 1000);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <HomeContainer>
      <LogoSection>
        <LogoContainer>
          <LogoEmoji>🍚</LogoEmoji>
          <LogoTitle>MOBABMO</LogoTitle>
          <LogoEmoji>🍽️</LogoEmoji>
        </LogoContainer>
        <LogoSubtitle>음식 랜덤 추천 서비스</LogoSubtitle>
      </LogoSection>
      
      <MainContent>
        <ContentCard>
          <WelcomeMessage>뭐 먹을지 고민되나요?</WelcomeMessage>
          <WelcomeText>
            버튼을 눌러서 오늘의 랜덤 음식을<br/> 추천받아보세요!✨<br/>
          </WelcomeText>

          <ButtonContainer>
            <RandomButton onClick={handleRandomFood} disabled={isSpinning}>
              {isSpinning ? '🎲 선택 중...' : '랜덤 음식 추천'}
            </RandomButton>

            <LoginButton onClick={handleLoginClick}>
              로그인
            </LoginButton>
          </ButtonContainer>
          
          {selectedFood && !isSpinning && (
            <FoodResult>
              <FoodEmoji>{selectedFood.emoji}</FoodEmoji>
              <FoodName>{selectedFood.name}</FoodName>
              <FoodDescription>{selectedFood.description}</FoodDescription>
            </FoodResult>
          )}
        </ContentCard>
      </MainContent>
    </HomeContainer>
  );
};

export default Home;