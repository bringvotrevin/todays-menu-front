import React from 'react';
import * as S from './Button.styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  $variant?: 'white' | 'orange' | 'gray' | 'retry' | 'errorRetry';
  $style?: {
    [key: string]: string | undefined;
  };
};

const Button: React.FC<ButtonProps> = ({ children, $variant = 'white', ...props }) => {
  return (
    <S.StyledButton $variant={$variant} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
