import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

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
      <DataDisplay />
    </QueryClientProvider>
  );
}

export default App;
