import React, { memo, useCallback, useEffect } from 'react';

const ContextMenuTrigger = (props) => {
  const { children, id } = props;

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
    let top = ev.clientY;
    let left = ev.clientX;
    const { width, height } = ctxtMenu.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    if (winWidth - left < width) {
      left -= width;
    }
    if (winHeight - top < height) {
      top -= height;
    }

    window.onwheel = (ev2) => {
      ev2.preventDefault();
    };
    ctxtMenu.style.top = `${top}px`;
    ctxtMenu.style.left = `${left}px`;
    ctxtMenu.style.visibility = 'visible';
  }, []);

  if (!id) {
    return console.error('property id is required');
  }
  return <div onContextMenu={handleContextMenu}>{children}</div>;
};
export default memo(ContextMenuTrigger);
