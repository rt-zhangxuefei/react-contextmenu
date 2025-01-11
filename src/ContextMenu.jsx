import React from 'react';
import './ContextMenu.css';

const ContextMenu = (props) => {
  const { children, className = '', id, zIndex = 100, ...rest } = props;

  if (!id) {
    console.error('property:id is required');
    return <div>property:id is required</div>;
  }

  return (
    <div
      id={id}
      {...rest}
      className={`context-menu ${className}`}
      style={{ position: 'fixed', zIndex, top: 0, left: 0, opacity: 0, pointerEvents: 'none' }}
    >
      {children}
    </div>
  );
};

export default ContextMenu;
