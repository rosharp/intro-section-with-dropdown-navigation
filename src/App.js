import React from "react";
import './css/style.css';

function App() {
  const [isActive, setActive] = React.useState(false);
  const [isToggledFeatures, setToggledFeatures] = React.useState(false);
  const [isToggledCompany, setToggledCompany] = React.useState(false);

  const toggleFeatures = () => {
    setToggledFeatures(!isToggledFeatures);
  }

  const toggleCompany = () => {
    setToggledCompany(!isToggledCompany);
  }

  const toggleActive = () => {
    setActive(!isActive);
  }

  return (
    <div className="App">
      <section className={isActive ? "main overlay" : "main"}>

        <button
          id="mobile-nav-btn"
          className={isActive ? "mobile-nav-toggle-inactive" : "mobile-nav-toggle"}
          aria-controls="navbar"
          aria-expanded="false"
          onClick={toggleActive}
        >
          <span className="sr-only">Menu</span>
        </button>

        <nav className="navbar" data-visible={isActive ? "false" : "true"}>
          <img className="logo-img" src="/images/logo.svg" />
          <ul className="main-nav">
            <li onMouseEnter={toggleFeatures} onMouseLeave={toggleFeatures}>
              <a className="nav-anchor" aria-controls="features-list" onClick={toggleFeatures}>
                Features
                <span><img className="nav-arrow-icon" src={isToggledFeatures ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} /></span>
              </a>
              <ul className="features-list" data-visible={isToggledFeatures ? "true" : "false"}>
                <li><a href='#'><span><img src="/images/icon-todo.svg" /></span>Todo List</a></li>
                <li><a href='#'><span><img src="/images/icon-calendar.svg" /></span>Calendar</a></li>
                <li><a href='#'><span><img src="/images/icon-reminders.svg" /></span>Reminders</a></li>
                <li><a href='#'><span><img src="/images/icon-planning.svg" /></span>Planning</a></li>
              </ul>
            </li>
            <li onMouseEnter={toggleCompany} onMouseLeave={toggleCompany}>
              <a className="nav-anchor" aria-controls="company-list" onClick={toggleCompany}>
                Company
                <span><img className="nav-arrow-icon" src={isToggledCompany ? "/images/icon-arrow-up.svg" : "/images/icon-arrow-down.svg"} /></span>
              </a>
              <ul className="company-list" data-visible={isToggledCompany ? "true" : "false"}>
                <li><a href='#'>History</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Blog</a></li>
              </ul>
            </li>
            <li id="career-li"><a href="">Career</a></li>
            <li id="about-li"><a href="">About</a></li>
          </ul>
          <ul className="login-nav">
            <li><a href="">Login</a></li>
            <li><a className="black-outline-btn" href="">Register</a></li>
          </ul>
        </nav>

        <div className="body" >

          <picture>
            <source srcSet="images/image-hero-mobile.png" media="(max-width: 1000px)" />
            <img className="main-hero-img" src="images/image-hero-desktop.png" />
          </picture>

          <div className="text-block">
            <div className="body-text">
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

          </div>
        </div>

      </section>


    </div>
  );
}

export default App;
