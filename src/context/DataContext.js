import React from 'react'

const DataContext = React.createContext({
  activeData: '',
  addNewData: () => {},
})

export default DataContext;
