import React, { useContext, useEffect } from 'react';
import { DataContext } from '../context/DataContext';

const DataUtama = () => {
  const { dataUtama, setDataUtama } = useContext(DataContext);

  useEffect(() => {
    fetch('https://api-hub.ilcs.co.id/test/v2/dataUtama?nomor_pengajuan=20120B388FAE20240402000001')
      .then(response => response.json())
      .then(data => setDataUtama(data.data)); // Mengakses objek data secara langsung
  }, [setDataUtama]);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold">Data Utama</h1>
      <form className="mt-4 grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-700 font-medium">ID Aju</label>
          <input 
            type="text" 
            value={dataUtama.id_aju || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Nomor Pengajuan</label>
          <input 
            type="text" 
            value={dataUtama.nomor_pengajuan || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Tanggal Pengajuan</label>
          <input 
            type="text" 
            value={dataUtama.tanggal_pengajuan || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Jenis Kegiatan</label>
          <input 
            type="text" 
            value={dataUtama.jenis_kegiatan || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Kode Pabean Asal</label>
          <input 
            type="text" 
            value={dataUtama.kd_pabean_asal || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Pabean Asal</label>
          <input 
            type="text" 
            value={dataUtama.ur_pabean_asal || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Cara Bayar</label>
          <input 
            type="text" 
            value={dataUtama.ur_cara_bayar || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Jenis PIB</label>
          <input 
            type="text" 
            value={dataUtama.ur_jenis_pib || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Jenis Impor</label>
          <input 
            type="text" 
            value={dataUtama.ur_jenis_impor || ''} 
            readOnly 
            className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 text-sm shadow-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default DataUtama;
