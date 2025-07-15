import React from 'react';
import tokens from '../../tokens/tokens.json';

interface ButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant, onClick }) => {
  const buttonStyle = {
    backgroundColor: tokens.color[variant].value,
    color: '#fff',
    padding: `${tokens.space.medium.value} ${tokens.space.large.value}`,
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontFamily: tokens.typography.fontFamily.value,
    fontSize: tokens.typography.fontSize.medium.value,
    fontWeight: tokens.typography.fontWeight.bold.value,
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
