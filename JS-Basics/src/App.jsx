import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">MyBrand</div>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h1>Welcome to My Landing Page</h1>
          <p>Discover amazing features and services</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="features">
          <div className="feature">
            <h3>Feature 1</h3>
            <p>Description of feature 1</p>
          </div>
          <div className="feature">
            <h3>Feature 2</h3>
            <p>Description of feature 2</p>
          </div>
          <div className="feature">
            <h3>Feature 3</h3>
            <p>Description of feature 3</p>
          </div>
          <div className="feature">
            <h3>Feature 4</h3>
            <p>Description of feature 4</p>
          </div>
          <div className="feature">
            <h3>Feature 5</h3>
            <p>Description of feature 5</p>
          </div>
          <div className="feature">
            <h3>Feature 6</h3>
            <p>Description of feature 6</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about our company</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: info@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </footer>
    </div>
  )
}

export default App
