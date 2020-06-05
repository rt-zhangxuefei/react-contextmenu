import React, { memo, useEffect } from 'react';
import './ContextMenu.less';

const ContextMenu = (props) => {
  const { children, className = '', id, zIndex = 100 } = props;

  useEffect(() => {
    const ctxMenu = document.getElementById(id);
    window.addEventListener('click', () => {
      window.onwheel = null;
      if (ctxMenu) {
        ctxMenu.style.opacity = 0;
      }
    });
    return () => {
      window.removeEventListener('click', () => {
        if (ctxMenu) {
          ctxMenu.style.opacity = 0;
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
