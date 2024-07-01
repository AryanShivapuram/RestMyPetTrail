import React from 'react';
import Header from './Header';
import Search from './Search';
import SearchResult from './SearchResult';
import Add from './Add';


const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <SearchResult />
      <Add />
      {/* Other components */}
    </div>
  );
};

export default App;
