import React, { memo, useEffect } from 'react';
import './ContextMenu.less';

const ContextMenu = (props) => {
  const { children, className = '', id, zIndex = 100, width = '110px', height = '200px' } = props;

  useEffect(() => {
    const ctxMenu = document.getElementById(id);
    window.addEventListener('click', () => {
      window.onwheel = null;
      if (ctxMenu) {
        ctxMenu.style.display = 'none';
      }
    });
    return () => {
      window.removeEventListener('click', () => {
        if (ctxMenu) {
          ctxMenu.style.display = 'none';
        }
      });
    };
  }, []);

  if (!id) {
    return console.error('property id is required');
  }

  return (
    <div
      id={id}
      className={`context-menu ${className}`}
      style={{ position: 'fixed', zIndex, top: 0, left: 0, display: 'none', width, height }}
    >
      {children}
    </div>
  );
};

export default memo(ContextMenu);
