import React, { useState } from 'react';
import './App.css'; // Assume you have a CSS file for styling

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle waitlist submission logic here
    console.log("Waitlist submitted:", email);
  };

  return (
    <div className="App">
      <header className="hero">
      <h1> KAUSTUBH..</h1>
        <h1>Sure: Pure Videos, No Doubts.</h1>
        <p>Join our waitlist to be the first to know when we launch! Currently builduing full power</p>
        <button onClick={() => alert('Coming Soon!')}>Join the Waitlist</button>
      </header>
      
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Real-time video authenticity.</li>
          <li>AI-driven fingerprinting for accurate tracing.</li>
          <li>User-friendly insights for all videos.</li>
        </ul>
      </section>

      <section className="waitlist">
        <h2>Join the Waitlist</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>

      <footer>
        <p>Connect with us on social media!</p>
      </footer>
    </div>
  );
}

export default App;
