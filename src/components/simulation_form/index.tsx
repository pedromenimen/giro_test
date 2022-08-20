import { useSimulation } from '../../provider/simulation';

const SimulationForm = () => {
  const { setValue, setTime, value, time } = useSimulation();
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const value = (
      evt.currentTarget.elements.namedItem('value') as HTMLInputElement
    ).value;
    const time = (
      evt.currentTarget.elements.namedItem('time') as HTMLInputElement
    ).value;
    setValue(parseInt(value));
    setTime(parseInt(time));
    window.location.replace("/result")
  };
  return (
    <>
      <div className='sm:w-[40vw] w-[80vw] -translate-x-1/2 relative left-1/2 pt-[25vh]'>
        <form
          className='bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'
          onSubmit={handleSubmit}
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='value'
            >
              Valor
            </label>
            <div className='flex'>
              <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
                R$
              </span>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-0 rounded-l-none border-gray-300'
                id='value'
                type='number'
                min='1'
                placeholder='Valor'
                required
              />
            </div>
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='time'
            >
              Tempo
            </label>
            <div className='flex'>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-r-0 rounded-r-none border-gray-300'
                id='time'
                type='number'
                min='1'
                required
              />
              <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-md border border-l-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
                meses
              </span>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Calcular
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SimulationForm;
