import { useEffect } from 'react';

export const useDacast = ({ contentId, onLoad }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//player.dacast.com/js/player.js?contentId=${contentId}`;
    script.onload = onLoad
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [contentId, onLoad]);
};

