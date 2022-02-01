import { useState } from 'react';

export const useHandleInputChange = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    // ovo je univerzalni kod za upotrebu u formama unutar funkcionalnih komponenti sa useState hook-om.
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value
    });
  }

  return [state, handleChange, setState];
};