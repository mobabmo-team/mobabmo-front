import styled from 'styled-components';

export const HomeContainer = styled.div`
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

export const LogoSection = styled.section`
  text-align: center;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

export const LogoContainer = styled.div`
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

export const LogoEmoji = styled.div`
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

export const LogoTitle = styled.h1`
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

export const LogoSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const MainContent = styled.main`
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

export const ContentCard = styled.div`
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

export const WelcomeMessage = styled.h2`
  font-size: 1.8rem;
  color: #7DA2FF;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const RandomButton = styled.button`
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

export const LoginButton = styled.button`
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

export const FoodResult = styled.div`
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

export const FoodEmoji = styled.div`
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

export const FoodName = styled.h3`
  font-size: 1.5rem;
  color: #343434;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const FoodDescription = styled.p`
  font-size: 1rem;
  color: #666;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;