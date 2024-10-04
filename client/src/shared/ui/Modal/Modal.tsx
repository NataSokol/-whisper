import React from 'react';
import './Modal.css';

type ModalWindowProps = {
  active: boolean;
  setActive: (value: boolean) => void;
  children: React.ReactNode;
};

function ModalWindow({ active, setActive, children }: ModalWindowProps): JSX.Element {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__conten'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default ModalWindow;
