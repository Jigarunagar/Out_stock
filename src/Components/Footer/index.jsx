import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer__area footer-bg">
        <div className="footer__top pt-100 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <div className="footer__widget mb-30">
                  <div className="footer__widget-title mb-25">
                    <a
                      aria-current="page"
                      href="/"
                      className="router-link-active router-link-exact-active"
                    >
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAAXCAYAAADZYae+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5NUM2M0FDMDkyMTVFNTExQTUzM0FGRkVCN0ZCQjNFRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQjQxQzdCQzE3NkIxMUVCQkI4OUM5M0ExNkJCNTAyRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQjQxQzdCQjE3NkIxMUVCQkI4OUM5M0ExNkJCNTAyRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzRBNDYxQzEyM0U4MTFBOTEyOUM3QzREMDZBNzRFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1QzYzQUMwOTIxNUU1MTFBNTMzQUZGRUI3RkJCM0VEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jUWb5AAABIlJREFUeNrsW+1t2zAQlY0uoIygjCBPUFBAO4AygjJCAvRvC8gjSCNYA/SH1U5gjhCNUI2QUsVdcbkcxQ8JdZyawMGORZ2O5OPdu6Oy+fH1UzLTSiM5iCK/a5DeSJf8+/bM/t5ciO43OScfv3z/8/nz2+dpvVOyxoO5NsI1Zb73W4uOysiTkYORBwaWBABUwfUn+H5tl98yIw2AZlrbGsAyre9x+s4Bgx0buDnkIQeCzmu7wGY8yJ5+EkfQYJ8tA8sRwlBMK+H+K2jeT9PGuxyBerwCTAOhhrfWSAExEWVnZC/0zSkar+3i2x3QkUcOmErwLBPpuTVyTxFGrj3CdS14miunudx2A587E5qG6W/zqfH3DWRJT4yzaPAqo8cDMJRR7zQAmGKZvK3fs8OWR+b5MkLacXw9yN7xTJdumiAoGH9Gxo9ZZBuwWBXJTFOWkbbC5gyZ2xTWmVKGyb4CsySftgUDM8EVjZ46RujPiXB55p1SkQyOjk8B+z8t5Fs56G+EOcTxN9An9+B/qEsxuzAjPS1MLBp2r7RuXoBRAmcZAvUMwk7KzwgW5cGlcliAWDCePDPJDPpWM7oOnrrKSKCXwga+D3AKLwDDDe0jJ7H/B4DpLfbh7yNLB+lu6gWXrsiG8dVtI/aD0JfvcCUspKRLz+jKsCbi2VLhGVNojSq4ThxmzcqmS9dSDhN7fUfAcmC7jXMTl27O90bQ0Qqeo2begHK7VPBSmEz0bMFrYRP42s3Hq2E+aP3Fe4E//CfMf2T8bAkv4mApLGQUSSqtTWWgoxV0DZZEYyThIw/04DwUoa7otn2nAOkEr3CEjGlJqFSCa5/LXLSQWakZXaMjSyuIuIBvC0V6KWB6AZVrTGZ/RsDsLfZhdhR7/iUlCKHgVRYPsfYhLs+KOsu8BANmcExK7GQOZwSMZrxFylyaiIwjnQl1cxmkpCNGV2hmtDogJQ9TJf4Hj3QSqjfkYSho7sATjJbUuo7kQklAWi3pGB1gXDssNxHrKgKmE3ZBaIHoKGQDXcRkJmsMSpi4iejdAHiWhOCYe6UjlySRj1TWbLzOkiYrvFGwJYSK77yjB0HE1DD34BDShCuP0BYTGh+IKAaeYsHO5va7SHQOfaSdzzdU7bClhjVBcRUdpUpuqEe1AqYTBpADGBoB/fhgqew9d36ihfCXrjkg8FA1EU7+lnAtXgXHc7TKkoJLnred0XUS7MNsB8GPoj0Bvhfseoid3A15RTP19Cou3jB3aKmS11XKgUyczbuEFO6mcfwSdpu2PCO0cCeNgY8js4TWgnkpH1254HleFd8cdktR4K8toYePvAjVRoKlT9wn3FL5PUteluiXtlEIsanlGWPEeHtL8YuOI7Nwij5CV+oRakL5DPLUYL64FYy5B4OGwAXyfR3izqPYpReCZu8BhCHAZik07TznCL1BO6Or8NQ1Aew2omQhFRCjSPBm4X8NaOA+oZOOaXhJXKUmxSXObVzvrmxm7C/ZTu0Jz5LsDj1bm3sfpgusf1SCZ8FDzc5RqvCx+yDw0daEJO/jgt8CDABFOHJoju1FFQAAAABJRU5ErkJggg=="
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer__widget-content">
                    <p>
                      Outstock is a premium Templates theme with advanced admin
                      module. It’s extremely customizable, easy to use and fully
                      responsive and retina ready.
                    </p>
                    <div className="footer__contact">
                      <ul>
                        <li>
                          <div className="icon">
                            <i className="fal fa-map-marker-alt" />
                          </div>
                          <div className="text">
                            <span>
                              Add: 1234 Heaven Stress, Beverly Hill, Melbourne,
                              USA.
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-envelope-open-text" />
                          </div>
                          <div className="text">
                            <span>Email: Contact@basictheme.com</span>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="fal fa-phone-alt" />
                          </div>
                          <div className="text">
                            <span>Phone Number: (800) 123 456 789</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                <div className="footer__widget mb-30">
                  <div className="footer__widget-title">
                    <h5>information</h5>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <a href="#">About Us</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                        <li>
                          <a href="#">Delivery Inforamtion</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Condition</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                <div className="footer__widget mb-30">
                  <div className="footer__widget-title mb-25">
                    <h5>Customer Service</h5>
                  </div>
                  <div className="footer__widget-content">
                    <div className="footer__links">
                      <ul>
                        <li>
                          <a href="#">Shipping Policy</a>
                        </li>
                        <li>
                          <a href="#">Help &amp; Contact Us</a>
                        </li>
                        <li>
                          <a href="#">Returns &amp; Refunds</a>
                        </li>
                        <li>
                          <a href="#">Online Stores</a>
                        </li>
                        <li>
                          <a href="#">Terms &amp; Conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="footer__copyright">
                  <p>
                    Copyright 2025 ©{" "}
                    <a
                      aria-current="page"
                      href="/"
                      className="router-link-active router-link-exact-active"
                    >
                      Outstock
                    </a>{" "}
                    all rights reserved. Powered by{" "}
                    <a
                      aria-current="page"
                      href="/"
                      className="router-link-active router-link-exact-active"
                    >
                      Theme_pure
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="footer__social f-right">
                  <ul>
                    {/*[*/}
                    <li>
                      <a href="http://facebook.com" target="_blank">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com" target="_blank">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/" target="_blank">
                        <FaBehance />
                      </a>
                    </li>
                    <li>
                      <a href="https://dribbble.com/" target="_blank">
                        <FaDribbble />
                      </a>
                    </li>
                    {/*]*/}
                    <li>
                      <a href="#">
                        <FaArrowUp/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="scroll-top" id="scroll" style={{ display: "none" }}>
        <a href="#">
          <i className="fas fa-level-up-alt" />
        </a>
      </div>
    </>
  );
};

export default Footer;
