import React, { useEffect, useRef } from 'react';

const ContextMenuTrigger = (props) => {
  const { children, id, className = '', onContextMenu = () => {}, ...rest } = props;
  const timer = useRef(null);

  useEffect(() => {
    attachEventListeners();
    window.addEventListener('contextmenu', (ev) => {
      ev.preventDefault();
    });
    return () => {
      window.removeEventListener('contextmenu', (ev) => {
        ev.preventDefault();
      });
      removeEventListeners();
    };
  }, []);

  const hideContextMenu = () => {
    const contextMenu = document.getElementById(id);
    if (contextMenu) {
      contextMenu.style.opacity = '0';
      contextMenu.style.pointerEvents = 'none';
      removeEventListeners();
    }
  };

  const setPostionShow = (contextMenu, top, left) => {
    contextMenu.style.top = `${top}px`;
    contextMenu.style.left = `${left}px`;
    contextMenu.style.opacity = '1';
    contextMenu.style.pointerEvents = 'auto';
    attachEventListeners();
  };

  const attachEventListeners = () => {
    window.addEventListener('click', hideContextMenu);
    window.addEventListener('scroll', hideContextMenu, true);
  };

  const removeEventListeners = () => {
    window.removeEventListener('click', hideContextMenu);
    window.removeEventListener('scroll', hideContextMenu, true);
  };

  const handleContextMenu = (ev) => {
    ev.persist();
    const contextMenu = document.getElementById(id);
    let top = ev.clientY;
    let left = ev.clientX;
    let rect = contextMenu.getBoundingClientRect();
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;
    if (!rect.height) {
      timer.current = window.setTimeout(() => {
        rect = contextMenu.getBoundingClientRect();
        if (winWidth - left < rect.width) {
          left -= rect.width;
        }
        if (winHeight - top < rect.height) {
          top -= rect.height;
        }
        setPostionShow(contextMenu, top, left);
        clearTimeout(timer.current);
      }, 1000 / 60);
    } else {
      if (winWidth - left < rect.width) {
        left -= rect.width;
      }
      if (winHeight - top < rect.height) {
        top -= rect.height;
      }
      setPostionShow(contextMenu, top, left);
    }
    onContextMenu(ev);
  };

  if (!id) {
    return console.error('property id is required');
  }
  return (
    <div
      className={`context-menu-trigger ${className}`}
      onContextMenu={handleContextMenu}
      {...rest}
    >
      {children}
    </div>
  );
};
export default ContextMenuTrigger;
