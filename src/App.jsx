function App() {
  return (
    <main className="app">
      <nav className="nav">
        <h1>KhetLink</h1>
        <span>Farm Connect</span>
      </nav>

      <section className="hero">
        <p className="tag">SMART FARMING, STRONGER COMMUNITIES</p>
        <h2>Connect farmers directly to better opportunities.</h2>
        <p>
          KhetLink helps farmers access markets, information, and support in
          one simple place.
        </p>
        <button>Explore KhetLink</button>
      </section>

      <section className="features">
        <article>
          <h3>Market Access</h3>
          <p>Find buyers and sell produce more confidently.</p>
        </article>
        <article>
          <h3>Farm Updates</h3>
          <p>Receive useful updates for crops, weather, and prices.</p>
        </article>
        <article>
          <h3>Community Support</h3>
          <p>Connect with farmers and agricultural experts.</p>
        </article>
      </section>
    </main>
  );
}

export default App;