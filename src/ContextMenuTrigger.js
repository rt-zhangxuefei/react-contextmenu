import React, { memo, useCallback, useEffect, useRef } from 'react';

const ContextMenuTrigger = (props) => {
  const { children, id } = props;
  const timer = useRef(null);

  useEffect(() => {
    window.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
    });
    return () => {
      window.removeEventListener('contextmenu', (ev) => {
        ev.preventDefault();
      });
    };
  }, []);
  const handleContextMenu = useCallback((ev) => {
    ev.persist();
    const ctxtMenu = document.getElementById(id);
    window.onwheel = (ev2) => {
      ev2.preventDefault();
    };
    let top = ev.clientY;
    let left = ev.clientX;
    let rect = ctxtMenu.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    if (!rect.height) {
      timer.current = window.setTimeout(() => {
        rect = ctxtMenu.getBoundingClientRect();
        if (winWidth - left < rect.width) {
          left -= rect.width;
        }
        if (winHeight - top < rect.height) {
          top -= rect.height;
        }
        ctxtMenu.style.top = `${top}px`;
        ctxtMenu.style.left = `${left}px`;
        ctxtMenu.style.opacity = 1;
        ctxtMenu.style.pointerEvents = 'auto';
        clearTimeout(timer.current);
      }, 1000 / 60);
    } else {
      if (winWidth - left < rect.width) {
        left -= rect.width;
      }
      if (winHeight - top < rect.height) {
        top -= rect.height;
      }
      ctxtMenu.style.top = `${top}px`;
      ctxtMenu.style.left = `${left}px`;
      ctxtMenu.style.opacity = 1;
      ctxtMenu.style.pointerEvents = 'auto';
    }
  }, []);

  if (!id) {
    return console.error('property id is required');
  }
  return <div onContextMenu={handleContextMenu}>{children}</div>;
};
export default memo(ContextMenuTrigger);
