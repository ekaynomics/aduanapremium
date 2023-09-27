import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main">
        <div className="mainText">
          <h4>Welcome To</h4>
          <h1>Aduana Premium</h1>
          <p>
            Global Turnkey Logistics and transportation services via sea, land
            and air. We will protect you from risk and liability
          </p>
        </div>
        <div className="buttonDiv">
          <button className="getQuote">GET FULL QUOTE</button>
          <button className="findOut">FIND OUT MORE</button>
        </div>
      </div>
      <div className="details">
        <div className="callCenter">
          <h3> CALL CENTER</h3>
          <p>Give us a free Call</p>
          <p> +233 55 8182017</p>
        </div>
        <div className="workingHours">
          <h3> WORKING HOURS</h3>
          <p>Mon-Fri: 7am-5pm</p>
          <p> Sat: 9am - 3pm</p>
        </div>
        <div className="ourLocation">
          <h3> OUR LOCATION</h3>
          <p>GHANA</p>
          <p> Shiashi, ACCRA</p>
        </div>
        <div className="getDetailedQuote">
          <h3> GET DETAILED QUOTE</h3>
          <p>DROPDOWN HERE!!!</p>
        </div>
      </div>
      <div className="ourServices">
        <div className="serviceDesc">
          <p className="serviceTitle"> OUR SERVICES</p>
          <p className="serviceTitle2">WHAT WE CAN DO FOR YOU</p>
        </div>
        <div>
          <div className="serviceCard">
            <div>icon</div>
            <div className="serviceText">
              <p>OCEAN CARGO</p>
              <p>
                Praesent eu rhoncus nibh. Quisque tincidunt, nisi in venenatis
                commodo, neque quam pharetra dolor, nec lacinia urna quam.
              </p>
            </div>
          </div>
          <div className="serviceCard">
            <div> icon </div>
            <div className="serviceText">
              <p>FLY ANYWHERE</p>
              <p>
                Praesent eu rhoncus nibh. Quisque tincidunt, nisi in venenatis
                commodo, neque quam pharetra dolor, nec lacinia urna quam.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="serviceCard">
            <div> icon </div>
            <div className="serviceText">
              <p>PROFESSIONAL COURIER SERVICES</p>
              <p>
                Praesent eu rhoncus nibh. Quisque tincidunt, nisi in venenatis
                commodo, neque quam pharetra dolor, nec lacinia urna quam.
              </p>
            </div>
          </div>
          <div className="serviceCard">
            <div>icon</div>
            <div className="serviceText">
              <p>CARGO STORAGE</p>
              <p>
                Praesent eu rhoncus nibh. Quisque tincidunt, nisi in venenatis
                commodo, neque quam pharetra dolor, nec lacinia urna quam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ourClients">
        <div>
          <p className="serviceTitle"> OUR CLIENTS</p>
          <p className="serviceTitle2">CLIENTS THAT TRUST OUR SERVICES</p>
        </div>
        <div className="clientCard"> I owe my success</div>
        <div className="clientCard"> Successful people....</div>
        <div className="clientLogos">
          <div>LOGO1</div>
          <div>LOGO2</div>
          <div>LOGO3</div>
          <div>LOGO4</div>
          <div>LOGO5</div>
          <div>LOGO6</div>
        </div>
      </div>
      <div className="ourValues">
        <div className="valuesTopDiv">
          <div>
            <p className="serviceTitle"> OUR CORE VALUES</p>
            <p className="serviceTitle2">OUR SKILLS AND EXPERTISE</p>
          </div>
          <div>
            <p>Values PARAGRAPH</p>
          </div>
          <div>VALUES PHOTOGRAPH</div>
        </div>
        <div className="valuesBottomDiv">
          <div className="valuesStatsCard">
            <h4>1,273</h4>
            <h6>Delivered Packages</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
          <div className="valuesStatsCard">
            <h4>473,793</h4>
            <h6>KM per Year</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
          <div className="valuesStatsCard">
            <h4>3,279</h4>
            <h6>Tons of Goods</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
          <div className="valuesStatsCard">
            <h4>513</h4>
            <h6>Satisfied Clients</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
        </div>
      </div>
      <div className="cargoNumbers">
        <div className="cargoNumbersTop">
          <p className="serviceTitle">We are the best</p>
          <p className="serviceTitle2">CARGO in NUMBERS</p>
          <p>paragraph something something something something </p>
        </div>
        <div className="cargoNumbersBottom">
          <div>
            <p>Market Share</p>
            <p>Revenue Growth</p>
            <p>Profit</p>
            <p>Increase</p>
          </div>
        </div>
      </div>
      <div className="map">
        <p>Place map here</p>
      </div>
      <div className="footer">
        <div>RECENT POSTS</div>
        <div>PHOTOGALLERY</div>
        <div>RECENT COMMENTS</div>
        <div>
          <h2>QUICK LINKS</h2>
          <div></div>
        </div>
        <div>
          <div>Copyright by E K Brand Consult Ltd. All Rights Reserved</div>
        </div>
        <div className="contactFAQ">
          <p>Contact | FAQ</p>
        </div>
      </div>
    </div>
  );
}

export default App;
