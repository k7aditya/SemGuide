// useUserRole.js
import { useState } from 'react';

export const useUserRole = () => {
  const [userRole, setUserRole] = useState('user'); // Default to 'user' or 'admin' based on login
  return { userRole, setUserRole };
};
 