import React, { memo, useEffect } from 'react';
import './ContextMenu.less';

const ContextMenu = (props) => {
  const { children, className = '', id, zIndex = 100 } = props;

  useEffect(() => {
    const contextMenu = document.getElementById(id);
    window.addEventListener('click', () => {
      window.onwheel = null;
      if (contextMenu) {
        contextMenu.style.opacity = 0;
        contextMenu.style.pointerEvents = 'none';
      }
    });
    return () => {
      window.removeEventListener('click', () => {
        if (contextMenu) {
          contextMenu.style.opacity = 0;
          contextMenu.style.pointerEvents = 'none';
        }
      });
    };
  }, []);

  if (!id) {
    return console.error('property:id is required');
  }

  return (
    <div
      id={id}
      className={`context-menu ${className}`}
      style={{ position: 'fixed', zIndex, top: 0, left: 0, opacity: 0, pointerEvents: 'none' }}
    >
      {children}
    </div>
  );
};

export default memo(ContextMenu);
