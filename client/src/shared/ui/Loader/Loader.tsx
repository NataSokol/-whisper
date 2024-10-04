// import React from 'react';

import './Loader.css';

export default function Loader(): JSX.Element {
  return (
    <div className='lds-ellipsis'>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}