import React, { useEffect, useState } from 'react';
import { testHttp } from '../api';

export default function() {
  const [hData, setHData] = useState('');

  useEffect(() => {
    (async () => {
      const backData = await testHttp();
      console.log('back', backData);
      setHData(JSON.stringify(backData));
    })()
  }, []);

  return (
    <div>
      { hData }
    </div>
  );
}