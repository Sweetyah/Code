import React, {useContext} from 'react';
import {FirebaseContext} from '../contexts/FirebaseContext';

const useFirebaseUserData = () => {
  const {userData} = useContext(FirebaseContext);
  return userData;
};

export default useFirebaseUserData;
