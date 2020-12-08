import { useEffect } from 'react';
import './ContextMenu.less';

const ContextMenu = (props) => {
  const { children, className = '', id, zIndex = 100, ...rest } = props;

  const hanleWindowClick = () => {
    const contextMenu = document.getElementById(id);
    window.onwheel = null;
    if (contextMenu) {
      contextMenu.style.opacity = '0';
      contextMenu.style.pointerEvents = 'none';
    }
  };

  useEffect(() => {
    window.addEventListener('click', hanleWindowClick);
    return () => {
      window.removeEventListener('click', hanleWindowClick);
    };
  }, []);

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
