import { useState, useEffect } from 'react';

export function useHRGiniChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState(() => {
    const saved = localStorage.getItem('hrGiniChat.position');
    return saved ? JSON.parse(saved) : { corner: 'bottom-right' };
  });

  useEffect(() => {
    localStorage.setItem('hrGiniChat.position', JSON.stringify(position));
  }, [position]);

  const getPositionStyle = () => {
    switch (position.corner) {
      case 'top-left':
        return { top: '1rem', left: '1rem' };
      case 'top-right':
        return { top: '1rem', right: '1rem' };
      case 'bottom-left':
        return { bottom: '5rem', left: '1rem' };
      case 'bottom-right':
        return { bottom: '5rem', right: '1rem' };
      default:
        return { bottom: '5rem', right: '1rem' };
    }
  };

  const handleDragEnd = (event, info) => {
    const { x, y } = info.point;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const isTop = y < viewportHeight / 2;
    const isLeft = x < viewportWidth / 2;
    
    const newCorner = `${isTop ? 'top' : 'bottom'}-${isLeft ? 'left' : 'right'}`;
    setPosition({ corner: newCorner });
  };

  return {
    isOpen,
    setIsOpen,
    position,
    handleDragEnd,
    getPositionStyle
  };
}