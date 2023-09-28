import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="main">
        <nav>
          <div className="upperNav">
            <div>
              <a href="https://www.google.com"> Newsletter</a>
              <a href="https://www.google.com"> Careers</a>
            </div>
            <div>
              <a href="https://www.google.com"> f</a>
              <a href="https://www.google.com"> t</a>
              <a href="https://www.google.com"> g+</a>
              <a href="https://www.google.com"> search</a>
              <a href="https://www.google.com" className="fareBtn">
                {" "}
                GET A FARE RATE
              </a>
            </div>
          </div>
          <div className="navFlex">
            <div>LOGO</div>
            <div className="thelinks">
              <a href="https://www.google.com">HOME</a>
              <a href="https://www.google.com">PAGES</a>
              <a href="https://www.google.com">SERVICES</a>
              <a href="https://www.google.com">FLEETS</a>
              <a href="https://www.google.com">NEWS</a>
              <a href="https://www.google.com">CALCULATOR</a>
            </div>
          </div>
        </nav>
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
        <div className="clientDesc">
          <p className="serviceTitle"> OUR CLIENTS</p>
          <p className="serviceTitle2">CLIENTS THAT TRUST OUR SERVICES</p>
        </div>
        <div className="clientPad">
          <div className="clientCard"> I owe my success</div>
          <div className="clientCard"> Successful people....</div>
        </div>
        <div className="clientLogos">
          <div className="clientLogo"></div>
          <div className="clientLogo"></div>
          <div className="clientLogo"></div>
          <div className="clientLogo"></div>
          <div className="clientLogo"></div>
          <div className="clientLogo"></div>
        </div>
      </div>
      <div className="ourValues">
        <div className="valuesTopDiv">
          <div>
            <p className="serviceTitle"> OUR CORE VALUES</p>
            <p className="serviceTitle2">OUR SKILLS AND EXPERTISE</p>
          </div>
          <div className="valuesCard">
            <p>Values PARAGRAPH</p>
          </div>
          <div className="valuesCard valuesPhoto"></div>
        </div>
        <div className="valuesBottomDiv">
          <div className="valuesStatsCard">
            <h4 className="valueTitle">1,273</h4>
            <h6 className="valueSubTitle">DELIVERED PACKAGES</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
          <div className="valuesStatsCard">
            <h4 className="valueTitle">473,793</h4>
            <h6 className="valueSubTitle">KM PER Year</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
          <div className="valuesStatsCard">
            <h4 className="valueTitle">3,279</h4>
            <h6 className="valueSubTitle">TONS OF GOODS</h6>
            <p>random paragpraph text and stuff. Make it make sense</p>
          </div>
          <div className="valuesStatsCard">
            <h4 className="valueTitle">513</h4>
            <h6 className="valueSubTitle">SATISFIED CLIENTS</h6>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15884.339648911175!2d-0.2210877317121349!3d5.5544305711237785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9099050ee617%3A0xec1887b5b7a1893d!2sMovenpick%20Ambassador%20Hotel%20Accra!5e0!3m2!1sen!2sgh!4v1695801926461!5m2!1sen!2sgh"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="magic"
        ></iframe>
      </div>
      <div className="footer">
        <div>
          <h2 className="footerHeader">RECENT POSTS</h2>
          <div className="divLine"></div>
          <div>
            <div className="recentPost">
              <div className="postImage"></div>
              <div>
                <h4>Liberalisation of Air Cargo Industry</h4>
                <h6>October 9, 2023</h6>
              </div>
            </div>
            <div className="recentPost">
              <div className="postImage"></div>
              <div>
                <h4>Liberalisation of Air Cargo Industry</h4>
                <h6>October 9, 2023</h6>
              </div>
            </div>
            <div className="recentPost">
              <div className="postImage"></div>
              <div>
                <h4>Liberalisation of Air Cargo Industry</h4>
                <h6>October 9, 2023</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="footerHeader">PHOTOGALLERY</h2>
          <div className="divLine"></div>
          <div className="photoBox">
            <div className="photogallery"></div>
            <div className="photogallery"></div>
            <div className="photogallery"></div>
          </div>
        </div>
        <div>
          <h2 className="footerHeader">RECENT COMMENTS</h2>
          <div className="divLine"></div>
          <div>
            <div className="recentComment">
              <div>
                <p>New trucks arriving </p>
                <p>October 9, 2023 - By admin</p>
              </div>
            </div>
          </div>
          <div className="recentComment">
            <div>
              <p>New trucks arriving </p>
              <p>October 9, 2023 - By admin</p>
            </div>
          </div>
          <div className="recentComment">
            <div>
              <p>New trucks arriving </p>
              <p>October 9, 2023 - By admin</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="footerHeader">QUICK LINKS</h2>
          <div className="divLine"></div>
          <div className="quickLinks">
            <div>
              <h6>Ocean Cargo</h6>
              <h6>Courier</h6>
              <h6>Cost Calculators</h6>
              <h6>Courier Calculator</h6>
              <h6>Air Cargo Calculator</h6>
              <h6>FAQs</h6>
            </div>
            <div>
              <h6>Air Cargo</h6>
              <h6>Trucking</h6>
              <h6>Trucking Calculator</h6>
              <h6>Ocean Cargo Calc</h6>
              <h6>Pricing</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="copyrightDiv">
          <div>Copyright by E K Brand Consult Ltd. All Rights Reserved</div>
          <div>Contact | FAQ</div>
        </div>
      </div>
    </div>
  );
}

export default App;
