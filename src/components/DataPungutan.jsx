import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

const DataPungutan = () => {
  const { dataPungutan, setDataPungutan } = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://api-hub.ilcs.co.id/test/v2/dataPungutan?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2')
      .then(response => response.json())
      .then(data => {
        setDataPungutan(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [setDataPungutan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDataPungutan(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="p-4 bg-white shadow rounded">
        <h1 className="text-xl font-bold mb-4">Data Pungutan</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold mb-4">Data Pungutan</h1>
      {Object.keys(dataPungutan).map((key) => (
        <div key={key} className="mb-3">
          <label htmlFor={key} className="block text-sm font-medium text-gray-700">
            {key.replace(/_/g, ' ')}
          </label>
          <input
            type="text"
            id={key}
            name={key}
            value={dataPungutan[key] || ''}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default DataPungutan;
