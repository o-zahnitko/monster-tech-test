import { useMemo } from 'react';

const useIdGenerator = () => {
  const generateId = useMemo(() => {
    let idCounter = 0;
    return { newId: (suffix) => `id_${++idCounter}_${suffix}` };
  }, []);
  return generateId;
};

export default useIdGenerator;
