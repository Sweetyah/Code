import React, {useContext} from 'react';
import {LocationContext} from '../contexts/LocationContext';

const useCurrentLocation = () => {
  const {currentLocation} = useContext(LocationContext);
  return currentLocation;
};

export default useCurrentLocation;
