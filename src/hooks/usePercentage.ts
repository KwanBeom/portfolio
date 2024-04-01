import { useEffect, useState } from 'react';

const usePercentage = (is: number, of: number) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(() => {
      const percentage = Number((is / of).toFixed(2)) * 100;

      return isFinite(percentage) ? percentage : 0;
    });
  }, [is]);

  return state;
};

export default usePercentage;
