import React, { memo, useCallback } from 'react';

const ContextMenuTrigger = (props) => {
  const { children, id } = props;
  const handleContextMenu = useCallback((ev) => {
    ev.persist();
    const ctxtMenu = document.getElementById(id);
    let top = ev.clientY;
    let left = ev.clientX;
    let { width, height } = getComputedStyle(ctxtMenu);
    width = Number.parseInt(width, 10);
    height = Number.parseInt(height, 10);
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
    ctxtMenu.style.display = 'block';
  }, []);
  return <div onContextMenu={handleContextMenu}>{children}</div>;
};
export default memo(ContextMenuTrigger);
