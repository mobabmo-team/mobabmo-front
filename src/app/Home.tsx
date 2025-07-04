import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #fff1cf 0%, #FFFADE 50%);
  color: #333;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LogoSection = styled.section`
  text-align: center;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const LogoEmoji = styled.div`
  font-size: 3rem;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const LogoTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Cherry Bomb One', cursive;
  color: #7DA2FF;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
`;

const LogoSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContentCard = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.8);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;
  }
`;

const WelcomeMessage = styled.h2`
  font-size: 1.8rem;
  color: #7DA2FF;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const WelcomeText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const RandomButton = styled.button`
  background: linear-gradient(45deg, #7DA2FF, #8e98ff);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgb(255, 250, 222);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgb(255, 250, 222);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
`;

const LoginButton = styled.button`
  background: transparent;
  color: #7DA2FF;
  border: 2px solid #7DA2FF;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7DA2FF;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 244, 205, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const FoodResult = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #b4d2ff, #eaf5ff);
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 1rem;
  }
`;

const FoodEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  animation: foodPop 0.5s ease-out;
  
  @keyframes foodPop {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FoodName = styled.h3`
  font-size: 1.5rem;
  color: #343434;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const FoodDescription = styled.p`
  font-size: 1rem;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

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
  const navigate = useNavigate(); // ✅ 라우터 이동 함수

  const handleRandomFood = () => {
    setIsSpinning(true);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * foods.length);
      setSelectedFood(foods[randomIndex]);
      setIsSpinning(false);
    }, 1000);
  };

  const handleLoginClick = () => {
    navigate('/login'); // ✅ /login 페이지로 이동
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
