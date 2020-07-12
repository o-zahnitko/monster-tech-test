import throttle from 'lodash.throttle';
import { useCallback, useEffect, useState } from 'react';

const MIN_UPDATE_INTERVAL = 100;

const windowIsMinWidth = (minWidth) => window.innerWidth >= minWidth;

const useGetDimensions = ({ minWidth, elementReference }) => {
  const [expanded, setExpanded] = useState(() => windowIsMinWidth(minWidth));
  const [offsetTop, setOffsetTop] = useState(null);

  const handleResize = useCallback(
    throttle(() => {
      setExpanded(windowIsMinWidth(minWidth));
      setOffsetTop(() => elementReference.current.offsetTop);
    }, MIN_UPDATE_INTERVAL),
    []
  );

  useEffect(() => {
    handleResize();
  }, [elementReference.current]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { expanded, offsetTop };
};

export default useGetDimensions;
