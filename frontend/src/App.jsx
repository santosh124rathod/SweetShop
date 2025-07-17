import React, { useState } from 'react';
import SweetList from './components/SweetList';
import AddSweetForm from './components/AddSweetForm';

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = () => setReload(!reload);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">🍬 Sweet Shop Management</h1>
      <AddSweetForm onSweetAdded={handleReload} />
      <SweetList key={reload} />
    </div>
  );
}

export default App;
