import React from 'react';
import { uploadFileHttp } from '../api';

export default function() {
  const handleFileChange = (event) => {
    const formData = new FormData();
    if (event.target.files[0]) {
      formData.append('file', event.target.files[0]);
      console.log('aaaaa', formData.get('file'));
      uploadFileHttp(formData);
    }
  }

  return (
    <div>
      <input onChange={handleFileChange} type='file' />
    </div>
  );
};