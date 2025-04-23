import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 bg-gray-50 p-6">
          {/* Main content will go here */}
        </main>
      </div>
    </div>
  );
}

export default App;