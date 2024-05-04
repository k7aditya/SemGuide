// UserRoleContext.js
import React from 'react';

const UserRoleContext = React.createContext();

export const UserRoleProvider = UserRoleContext.Provider;
export const UserRoleConsumer = UserRoleContext.Consumer;

export default UserRoleContext;
