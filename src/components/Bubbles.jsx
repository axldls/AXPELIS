import { useEffect, useState } from 'react';
import './Bubbles.css';

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = Array.from({ length: 5 }, (_, i) => ({
        id: Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 10 + Math.random() * 30,
      }));
      setBubbles(newBubbles);
    };

    generateBubbles();

    // Regenerar burbujas cada 8 segundos
    const interval = setInterval(() => {
      generateBubbles();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bubbles-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
