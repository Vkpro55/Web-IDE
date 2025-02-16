import React from 'react';

const LoadingAnimation = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 z-50">
          <div className="animate-bounce">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-32 h-32"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingAnimation;