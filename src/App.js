import React from "react";
import './css/style.css';
import mainHeroImgDesktop from "./images/image-hero-desktop.png";
import mainHeroImgMobile from "./images/image-hero-mobile.png";
import logo from "./images/logo.svg";
import iconArrowUp from "./images/icon-arrow-up.svg";
import iconArrowDown from "./images/icon-arrow-down.svg";
import iconToDo from "./images/icon-todo.svg";
import iconPlanning from "./images/icon-planning.svg";
import iconCalendar from "./images/icon-calendar.svg";
import iconReminders from "./images/icon-reminders.svg";
import clientDatabizImg from "./images/client-databiz.svg";
import clientMeetImg from "./images/client-meet.svg";
import clientAudiophileImg from "./images/client-audiophile.svg";
import clientMakerImg from "./images/client-maker.svg";

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
          <img className="logo-img" src={logo} />
          <ul className="main-nav">
            <li onMouseEnter={toggleFeatures} onMouseLeave={toggleFeatures}>
              <a className="nav-anchor" aria-controls="features-list" onClick={toggleFeatures}>
                Features
                <span><img className="nav-arrow-icon" src={isToggledFeatures ? iconArrowUp : iconArrowDown } /></span>
              </a>
              <ul className="features-list" data-visible={isToggledFeatures ? "true" : "false"}>
                <li><a href='#'><span><img src={iconToDo} /></span>Todo List</a></li>
                <li><a href='#'><span><img src={iconCalendar} /></span>Calendar</a></li>
                <li><a href='#'><span><img src={iconReminders} /></span>Reminders</a></li>
                <li><a href='#'><span><img src={iconPlanning} /></span>Planning</a></li>
              </ul>
            </li>
            <li onMouseEnter={toggleCompany} onMouseLeave={toggleCompany}>
              <a className="nav-anchor" aria-controls="company-list" onClick={toggleCompany}>
                Company
                <span><img className="nav-arrow-icon" src={isToggledCompany ? iconArrowUp : iconArrowDown} /></span>
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
            <source srcSet={mainHeroImgMobile} media="(max-width: 1000px)" />
            <img className="main-hero-img" src={mainHeroImgDesktop} />
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
                <img src={clientDatabizImg}/>
                <img src={clientAudiophileImg} />
                <img src={clientMeetImg} />
                <img src={clientMakerImg} />
              </div>
            </div>

          </div>
        </div>

      </section>


    </div>
  );
}

export default App;
