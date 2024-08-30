import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';

const DataEntitas = () => {
  const { dataEntitas, setDataEntitas } = useContext(DataContext);
  const [entitasData, setEntitasData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://api-hub.ilcs.co.id/test/v2/dataEntitas?id_aju=04eb6a72-bb63-5aed-5e92-f58a3bfd5da2')
      .then(response => response.json())
      .then(data => {
        setEntitasData(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const renderInput = (label, value) => (
    <div className="mt-4">
      <label className="block text-gray-700">{label}</label>
      <input
        type="text"
        value={value || ''}
        readOnly
        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
      />
    </div>
  );

  if (loading) {
    return (
      <div className="p-4 bg-white shadow rounded">
        <h1 className="text-xl font-bold">Data Entitas</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold">Data Entitas</h1>
      <form className="mt-4 grid grid-cols-1 gap-4">
        {renderInput('User Portal', entitasData.user_portal)}
        {renderInput('NPWP Pengaju', entitasData.npwp_pengaju)}
        {renderInput('Kode Entitas Pemberitahu', entitasData.kd_entitas_pemberitahu)}
        {renderInput('Entitas Pemberitahu', entitasData.ur_entitas_pemberitahu)}

        {entitasData.pengusaha && (
          <div>
            <h2 className="text-lg font-semibold">Pengusaha</h2>
            {Object.entries(entitasData.pengusaha).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.pemusatan && (
          <div>
            <h2 className="text-lg font-semibold">Pemusatan</h2>
            {Object.entries(entitasData.pemusatan).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.pemilik && (
          <div>
            <h2 className="text-lg font-semibold">Pemilik</h2>
            {Object.entries(entitasData.pemilik).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.pengirim && (
          <div>
            <h2 className="text-lg font-semibold">Pengirim</h2>
            {Object.entries(entitasData.pengirim).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.pemasok && (
          <div>
            <h2 className="text-lg font-semibold">Pemasok</h2>
            {Object.entries(entitasData.pemasok).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.penjual && (
          <div>
            <h2 className="text-lg font-semibold">Penjual</h2>
            {Object.entries(entitasData.penjual).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.penanggungjawab && (
          <div>
            <h2 className="text-lg font-semibold">Penanggung Jawab</h2>
            {Object.entries(entitasData.penanggungjawab).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}

        {entitasData.pembeli && (
          <div>
            <h2 className="text-lg font-semibold">Pembeli</h2>
            {Object.entries(entitasData.pembeli).map(([key, value]) => 
              renderInput(key.replace(/_/g, ' ').toUpperCase(), value)
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default DataEntitas;
