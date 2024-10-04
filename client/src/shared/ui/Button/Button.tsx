import type { ButtonHTMLAttributes } from 'react';
import './Button.css';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

type ButtonProps = {
  theme: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps): JSX.Element {
  const { theme, children, ...otherProps } = props;
  return (
    <button className={`Button ${theme}`} {...otherProps}>
      {children}
    </button>
  );
}

export default Button;
