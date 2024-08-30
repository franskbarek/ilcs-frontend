import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const day = days[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  return (
    <div style={{ padding: '16px' }} className='flex gap-2 justify-center items-center'>
      {/* <h2 style={{ fontSize: '1.25rem', color: 'black' }}>Tanggal dan Waktu</h2> */}
      <p style={{ fontSize: '1rem', color: 'white' }}>
        {day}, {date} {month} {year}
      </p>
      <p style={{ fontSize: '1rem', color: 'white' }}>
        {hours}:{minutes}:{seconds}
      </p>
    </div>
  );
};

export default DateTimeDisplay;
