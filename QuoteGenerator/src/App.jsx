import React, { useEffect, useState } from 'react'

function App() {

  const [quote, setQuote] = useState("");

  useEffect(() => { 
    const getQuote = async () => { 
      try {
        const res = await fetch("https://api.quotable.io/quotes/random?limit=1");
        const data = await res.json();
        setQuote(data[0]); // Get the first quote from the array
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }
    getQuote();
  }, []);

  return (
    <div>
      <h2>Quote of the Visit</h2>
      {quote ? (
        <>
          <h3>"{quote.content}"</h3>
          <p>- {quote.author}</p>
        </>
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  )
}

export default App