import { useCallback, useEffect, useRef } from 'react';

const ContextMenuTrigger = (props) => {
  const { children, id, className = '', ...rest } = props;
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
    const contextMenu = document.getElementById(id);
    window.onwheel = (ev2) => {
      ev2.preventDefault();
    };
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
        contextMenu.style.top = `${top}px`;
        contextMenu.style.left = `${left}px`;
        contextMenu.style.opacity = '1';
        contextMenu.style.pointerEvents = 'auto';
        clearTimeout(timer.current);
      }, 1000 / 60);
    } else {
      if (winWidth - left < rect.width) {
        left -= rect.width;
      }
      if (winHeight - top < rect.height) {
        top -= rect.height;
      }
      contextMenu.style.top = `${top}px`;
      contextMenu.style.left = `${left}px`;
      contextMenu.style.opacity = '1';
      contextMenu.style.pointerEvents = 'auto';
    }
  }, []);

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
