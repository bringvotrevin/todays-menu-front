// Button.tsx
import React from 'react';
import * as S from './Button.styled';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'orange' | 'white';
};

const Button: React.FC<ButtonProps> = ({ children, variant = 'white', ...props }) => {
  return (
    <S.StyledButton variant={variant} {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;
