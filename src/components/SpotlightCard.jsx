import React, { useRef } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(182, 154, 101, 0.16)',
  onClick
}) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      style={{
        '--spotlight-color': spotlightColor,
      }}
      className={`spotlight-card relative rounded-sm border border-[#1E231D]/12 bg-[#EBE4D8]/90 transition-all duration-300 hover:border-[#B69A65]/60 hover:shadow-lg ${className}`}
    >
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
