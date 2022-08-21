import { Alert } from 'flowbite-react';
import { useState } from 'react';

const Form = () => {
  const [hidden, setHidden] = useState(true);
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const defaulUser = {
      email: 'admin@mail.com',
      password: '1234',
    };
    const email = (
      evt.currentTarget.elements.namedItem('email') as HTMLInputElement
    ).value;
    const password = (
      evt.currentTarget.elements.namedItem('password') as HTMLInputElement
    ).value;
    const authenticated =
      JSON.stringify({ email, password }) === JSON.stringify(defaulUser);
    authenticated ? window.location.replace('/simulation') : setHidden(false);
  };
  return (
    <>
      <div
        style={{ visibility: hidden ? 'hidden' : 'visible' }}
        id="error"
        className='pt-[5vh] absolute right-[2vw]'
      >
        <Alert color='warning' onDismiss={() => setHidden(!hidden)}>
          <span>
            <span className='font-medium'>Invalid email or password!</span>
          </span>
        </Alert>
      </div>
      <div className='sm:w-[40vw] w-[80vw] -translate-x-1/2 relative left-1/2 pt-[25vh]'>
        <form
          className='bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4'
          onSubmit={handleSubmit}
        >
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='email'
            >
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='Email'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
