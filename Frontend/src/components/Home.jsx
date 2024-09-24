import React, { useState } from 'react';
import logo from '../images/LNMIIT.png';
import building from '../images/Building.jpg'
import { Link } from 'react-router-dom';

function BusOptions() {
  const [selectedBus, setSelectedBus] = useState('');

  const handleSelectChange = (event) => {
    setSelectedBus(event.target.value);
  };

  return (
    <div>
      <div className="h-5 w-full bg-maroon"></div>

      <div className='bg-white-200 flex flex-auto shadow-md'>
        <img src={logo} className="h-12 w-32 ml-auto mb-2 mt-1" alt="Logo" />
      </div>

      <div className="bg-maroon p-6">
        <h1 className='flex justify-center items-center text-4xl font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>BUS TRACKING</h1>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm border border-gray-600 rounded-lg m-8 p-4 mt-20">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900 m-4">SELECT BUS</h2>
        </div>
      
        <div className='flex justify-center items-center'>
          <form>
            <select 
              className="w-64 h-12 mt-14 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedBus}
              onChange={handleSelectChange}
            >
              <option value="" disabled>Select a Bus</option>
              <option value="show-bus1">Bus 1</option>
              <option value="show-bus2">Bus 2</option>
            </select>
          </form>
        </div>
      
        <div className='flex justify-center items-center'>
        <Link to={selectedBus ? `/${selectedBus}` : '#'}>

            <button 
              className="w-32 h-10 mt-16 mb-10 rounded-md bg-maroon py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
              type="button"
              disabled={!selectedBus}
            >
              Track
            </button>
          </Link>
        </div>
      </div>
      
      <div>
        <img src={building} className='rounded-lg h-48 w-full mt-12' alt="Building" />
      </div>
    </div>
  );
}

export default BusOptions;