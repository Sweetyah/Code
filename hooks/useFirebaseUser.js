import React, {useContext} from 'react';
import {FirebaseContext} from '../contexts/FirebaseContext';

const useFirebaseUser = () => {
  const {user} = useContext(FirebaseContext);
  return user;
};

export default useFirebaseUser;
