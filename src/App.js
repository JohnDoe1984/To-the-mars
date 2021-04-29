import './App.css';

import Opportunity from './Opportunity.jpg'
import Curiosity from './Curiosity.jpg'
import Spirit from './Spirit.jpg'



function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div className='headerContainer'>
          <button class="mdc-button mdc-button--outlined" linkTo={Spirit}>
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__label">Curiosity</span>
          </button>
          <button class="mdc-button mdc-button--outlined">
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__label">Opportunity</span>
          </button>
          <button class="mdc-button mdc-button--outlined">
            <span class="mdc-button__ripple"></span>
            <span class="mdc-button__label">Spirit</span>
          </button>
        </div>
      </header>

      <body>
        <div className='rovers'>

          <div className='curiosity'>
            <p> <img src={Curiosity} className="photos" ></img></p>
            <span className='text'>About Curiosity
            <p>Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission.
              Curiosity was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC.
               The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.</p>
            </span>
            <div className='buttons'>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">FHAZ</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">RHAZ</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">MAST</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">CHEMCAM</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">MAHLI</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">MARDI</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">NAVCAM</span>
              </button>
            </div>
          </div>




          <div className='Opportunity'>
            <p><img src={Opportunity} className="photos" ></img></p>
            <span className='text'>About Opportunity
              <p>Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, and nicknamed "Oppy",
              is a robotic rover that was active on Mars from 2004 until mid-2018. Opportunity was operational on
              Mars for 5110 sols (5250 days; 14 years, 136 days). Launched on July 7, 2003, as part of NASA's Mars
              Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin Spirit
              (MER-A) touched down on the other side of the planet. With a planned 90-sol duration of activity (slightly less than 92.5 Earth days),
              Spirit functioned until it got stuck in 2009 and ceased communications in 2010, while Opportunity was able to stay operational for 5111 sols after landing,
              maintaining its power and key systems through continual recharging of its batteries using solar power,
              and hibernating during events such as dust storms to save power. This careful operation allowed Opportunity
              to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 46 days (in Earth time).
              By June 10, 2018, when it last contacted NASA, the rover had traveled a distance of 45.16 kilometers (28.06 miles).</p>
            </span>
            <div className='buttons'>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">FHAZ</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">RHAZ</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">NAVCAM</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">PANCAM</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">MINITES</span>
              </button>
            </div>
          </div>





          <div className='Spirit'>
            <p> <img src={Spirit} className="photos" ></img></p>
            <span className='text'>About Spirit
               <p>Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a robotic rover on Mars, active from 2004 to 2010.
              Spirit was operational on Mars for 2208 sols (2249 days; 6 years, 77 days). It was one of two rovers of NASA's Mars Exploration
              Rover Mission managed by the Jet Propulsion Laboratory (JPL). Spirit landed successfully within the impact crater Gusev on Mars
              at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet.
              Its name was chosen through a NASA-sponsored student essay competition. The rover became stuck in a "sand trap" in late 2009
               at an angle that hampered recharging of its batteries; its last communication with Earth was sent on March 22, 2010.</p>
            </span>
            <div className='buttons'>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">FHAZ</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">RHAZ</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">NAVCAM</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">PANCAM</span>
              </button>
              <button class="mdc-button">
                <span class="mdc-button__ripple"></span>
                <span class="mdc-button__label">MINITES</span>
              </button>
            </div>
          </div>
        </div>
      </body>

    </div>
  );
}

export default App;
