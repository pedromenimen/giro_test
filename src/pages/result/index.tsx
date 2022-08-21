import { useState } from 'react';
import selicApi from '../../services';

const Result = () => {
  const [selic, setSelic] = useState(0);
  const investedValue = parseInt(localStorage.getItem('value')!);
  const investedTime = parseInt(localStorage.getItem('time')!);
  selicApi
    .get('')
    .then((res) => {
      setSelic(res.data[0].valor);
    })
    .catch(() => {
      setSelic(0.050788);
    });
  const finalValue =
    investedValue * ((selic / 12) * investedTime) + investedValue;

  return (
    <>
      <div className='text-center pt-[30vh]'>
        <div>O valor investido foi {investedValue} reais.</div>
        <div>O período de investimento será de {investedTime} meses.</div>
        <div>
          O valor final será de {Math.round(finalValue * 100) / 100} reais.
        </div>
      </div>
    </>
  );
};

export default Result;
