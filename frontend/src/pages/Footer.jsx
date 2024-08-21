import { Link } from "react-router-dom";
import "../style/footer.css";
const Footer = () => {
  return (
    <div>
      <div class="container my-5">
        <footer class="text-center text-lg-start text-white">
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-3">FITNESS SPACE</h5>

                  <p>
                    Being a 24/7 gym is one of our best amenities because we can
                    offer our members unrestricted freedom of access from sun up
                    to sun down and everywhere in between. You no longer have to
                    worry about cramming in gym time before we close!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">About us</h5>

                  <ul class="list-unstyled mb-0">
                    <li>  
                      <a
                        href="https://www.instagram.com/sachindalvi949/"
                        class="text-white"
                      >
                        <i class="fab fa-instagram"></i> Follow us on Instagram
                      </a>
                    </li>

                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Contact us</h5>

                  <ul class="list-unstyled mb-0">
                  <li>
                      <a href="#!" class="text-white">
                        9087659088
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">
                        
                      </a>
                    </li>
                      
                    
                  </ul>
                </div>


                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Links</h5>

                  <ul class="list-unstyled mb-0">
                
                    <li>
                      <a href="https://www.linkedin.com/in/prasad-patil-1756b0230/" class="text-white">
                        Linkdin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <Link to="/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>

          <div class="text-center">
            © 2024 Copyright:
            <a class="text-color-3" href="https://SDFitness.com/">
              SDfiness.com
            </a>
          </div>
          <div class="address col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-3">Address</h5>

                  <p>
                   A/P Shrigonda,Dist- Ahemadnagar,Tal-Shrigonda Shani Chowk             
                       </p>
                </div>  

          
        </footer>
      </div>
    </div>
  );
};

export default Footer;
