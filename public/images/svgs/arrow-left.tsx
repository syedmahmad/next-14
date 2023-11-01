import React from 'react';

const ArrowLeft = (props) => {
  const { className, style, onClick } = props;
  return (
    <svg
      width="73"
      height="74"
      viewBox="0 0 73 74"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <path
        d="M48.6667 37.0111H24.3333M24.3333 37.0111L34.9792 47.657M24.3333 37.0111L34.9792 26.3653M36.5 67.4278C53.2991 67.4278 66.9167 53.8103 66.9167 37.0111C66.9167 20.212 53.2991 6.59448 36.5 6.59448C19.7009 6.59448 6.08334 20.212 6.08334 37.0111C6.08334 53.8103 19.7009 67.4278 36.5 67.4278Z"
        stroke="#222222"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
