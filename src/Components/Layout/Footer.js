import "./Footer.css";
export function Footer() {
  return (
    <>
      <footer className="text-bg-dark text-center text-lg-start mt-1 afooter bottom-0">
        {/* Grid container */}
        <div className="container text-center p-4">
          {/*Grid row*/}
          <div className="row">
            {/*Grid column*/}
            <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
              <h4 className="text-uppercase text-start ms-4">Legal</h4>
              <br />
              <ul className="List text-start">
                <li>Accessibility Statement</li>
                <li>FOIA</li>
                <li>Information Quality</li>
                <li>Non-Discrimination Statement</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
              <h4 className="text-uppercase">Stay Connected</h4>
              <br />
              <p>Follow us on social media channels</p>
              <div>
                <img
                  src="https://img.icons8.com/fluency/48/null/facebook-new.png"
                  alt="facebook"
                />
                <img
                  src="https://img.icons8.com/fluency/48/null/instagram-new.png"
                  alt="instagram"
                />
                <img
                  src="https://img.icons8.com/fluency/48/null/twitter.png"
                  alt="twitter"
                />
                <img
                  src="https://img.icons8.com/fluency/48/null/snapchat.png"
                  alt="snapchat"
                />
                <img
                  src="https://img.icons8.com/office/48/null/whatsapp--v1.png"
                  alt="whatsapp"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
              <h4 className="text-uppercase text-start ms-4">Resources</h4>
              <br />
              <ul className="List text-start">
                <li>Program Deadlines</li>
                <li>Tools</li>
                <li>Disaster Resource Center</li>
                <li>Farm Surveys and Statistics</li>
                <li>Veterans</li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 mb-4 mb-md-0">
              <h4 className="text-uppercase text-start">
                subscribe to our updates
              </h4>
              <br />
              <p className="text-start">
                Stay updated on the latest news and stories from farmers.gov and
                other USDA topics.
              </p>
              <div class="mb-3 text-start">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
                <button type="button" class="btn btn-primary mt-2">Subscribe</button>
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-light" href="/">
            E-Farming
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </>
  );
}
