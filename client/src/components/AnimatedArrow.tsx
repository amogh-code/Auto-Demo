interface AnimatedArrowProps {
  direction: 'left' | 'right';
  delay?: string;
}

export default function AnimatedArrow({ direction, delay = '0s' }: AnimatedArrowProps) {
  const arrowStyle = {
    animationDelay: delay,
    ...(direction === 'left' && { animationDirection: 'reverse' as const })
  };

  return (
    <div className="animate-bounce-arrow" style={arrowStyle}>
      {direction === 'right' ? (
        <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-10 h-10 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      )}
    </div>
  );
}
