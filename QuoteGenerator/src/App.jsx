import React, { useEffect, useState } from 'react'

function App() {

  const [quote, setQuote] = useState("");

  const handleSubmit = async() => {
    try {
      const res = await fetch("https://api.quotable.io/quotes/random?limit=1");
      const data = await res.json();
      setQuote(data[0]);

    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div>
      <button onClick={handleSubmit}>Change</button>
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