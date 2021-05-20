import React from 'react';
import './Loading.sass';

export function Loading() {
  return (
    <div className="loading">
      <div class="lds-circle">
        <div></div>
      </div>
    </div>
  )
}