import logo from './logo.svg';
import './css/style.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <section className="main">
        <Navbar />

        <div className="body">

          <img className="main-hero-img" src="images/image-hero-desktop.png" />

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

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
     
    </div>
  );
}

export default App;
