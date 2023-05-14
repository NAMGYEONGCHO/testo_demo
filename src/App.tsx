import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import WeatherDataComponent from './components/WeatherData';

const queryClient = new QueryClient();

function DataDisplay() {
  const { isLoading, isError, error, data } = useQuery('data', fetchData);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    // Type assertion
    const errorMessage = (error as Error).message;
    return <span>Error: {errorMessage}</span>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

async function fetchData() {
  const response = await fetch('https://your-api-url.com/data');
  const data = await response.json();
  return data;
}


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-screen">
        <header className="bg-gray-800 p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-white font-bold text-xl">Carbon Emission Monitoring</h1>
            <button className="text-white font-bold">Logout</button>
          </nav>
        </header>
        <main className="container mx-auto flex-grow px-4">
          <h2 className="text-3xl font-bold mt-6">Welcome to the Dashboard</h2>
          <WeatherDataComponent />
        </main>
        <footer className="bg-gray-800 py-2">
          <div className="container mx-auto">
            <p className="text-center text-white">© 2023 Carbon Emission Monitoring. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </QueryClientProvider>
  );
}

export default App;


