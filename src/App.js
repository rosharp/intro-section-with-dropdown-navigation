import logo from './logo.svg';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <section className="main">
      
        <div>
        <nav>
            <img className="logo-img" src="/images/logo.svg" />
            <ul className="main-nav">
              <li>
                <a href="">Features</a>
                <ul>
                  <li><a href='#'><span><img src="/images/icon-todo.svg"/></span>Todo List</a></li>
                  <li><a href='#'><span><img src="/images/icon-calendar.svg"/></span>Calendar</a></li>
                  <li><a href='#'><span><img src="/images/icon-reminders.svg"/></span>Reminders</a></li>
                  <li><a href='#'><span><img src="/images/icon-planning.svg"/></span>Planning</a></li>
                </ul>
              </li>
              <li>
                <a href="">Company</a>
                <ul>
                  <li><a href='#'>History</a></li>
                  <li><a href='#'>Team</a></li>
                  <li><a href='#'>Blog</a></li>
                </ul>
              </li>
              <li><a href="">Career</a></li>
              <li><a href="">About</a></li>
            </ul>
            <ul className="login-nav">
              <li><a href="">Login</a></li>
              <li><a href="">Register</a></li>
            </ul>
          </nav>

        <img className="main-hero-img" src="images/image-hero-desktop.png" />

          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.
          </p>

          <button className="black-btn">Learn more</button>

          <div className="sponsors-img">
            <img src="/images/client-databiz.svg" />
            <img src="/images/client-audiophile.svg" />
            <img src="/images/client-meet.svg" />
            <img src="/images/client-maker.svg" />
          </div>
        </div>

      </section>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
