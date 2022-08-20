import { useEffect } from 'react';
import { useSimulation } from '../../provider/simulation';

const Result = () => {
  useEffect;
  const { value, time } = useSimulation();
  return (
    <>
      <div>O valor investido foi {value}.</div>
      <div>O período de investimento será de {time} meses.</div>
    </>
  );
};

export default Result;
