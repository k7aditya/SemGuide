// // src/context/SearchContext.js
// import PropTypes from 'prop-types';
// import React, { useState, useContext, createContext } from 'react';

// const SearchContext = createContext();

// export const useSearch = () => useContext(SearchContext);

// export const SearchProvider = ({ children }) => {
//   const [filterName, setFilterName] = useState('');

//   const handleFilterNameChange = (event) => {
//     setFilterName(event.target.value);
//   };

//   return (
//     <SearchContext.Provider value={{ filterName, handleFilterNameChange }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };


// SearchProvider.propTypes = {
//   children: PropTypes.object,
// };

