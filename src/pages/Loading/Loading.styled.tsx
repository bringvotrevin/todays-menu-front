import styled, { keyframes } from 'styled-components';
import backgroundImg from 'assets/images/bg-loading.svg';

type LoadingImgProps = {
  left?: string;
  top?: string;
  delay?: string;
};

const foodFadeInOut = keyframes`
  0%, 10%, 70% {
    opacity: 0;
  }

  20%, 60% {
    opacity: 1;
  }
`;

const dotsFadeInOut = keyframes`
  0%, 9%, 61%, 100% {
    opacity: 1;
  }

  18%, 59% {
    opacity: 0;
  }

`;

const hideFoodIcons = keyframes`
  0%, 60% {
    opacity: 1;
  }
  61%, 100% {
    opacity: 0;
  }
`;

const showDotIcons = keyframes`
  0%, 60% {
    opacity: 1;
  } 
  61%, 100% {
    opacity: 1;
  }
  
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentsWrapper = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 57px;
`;

export const LoadingH2 = styled.h2`
  color: var(--color-main-orange);
  font-weight: var(--font-bold);
  font-size: 27px;
  text-align: center;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const DotsIconsWrapper = styled.div`
  opacity: 1;
  animation: ${showDotIcons} 7s infinite;
`;

export const DotsIcons = styled.img<LoadingImgProps>`
  position: absolute;
  opacity: 1;
  left: ${(props) => props.left || '0px'};
  animation: ${dotsFadeInOut} 7s infinite;
  animation-delay: ${(props) => props.delay || '0s'};
`;

export const FoodsIconsWrapper = styled.div`
  animation: ${hideFoodIcons} 7s infinite;
`;
export const FoodsIcons = styled.img<LoadingImgProps>`
  position: absolute;
  top: -5px;
  left: ${(props) => props.left || '0px'};
  opacity: 0;
  animation: ${foodFadeInOut} 7s infinite;
  animation-delay: ${(props) => props.delay || '0s'};
`;
