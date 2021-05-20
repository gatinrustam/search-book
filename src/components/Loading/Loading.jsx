import React from 'react';
import './Loading.sass';

export function Loading() {
  return (
    <div className="loading">
      <div className="loading-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}