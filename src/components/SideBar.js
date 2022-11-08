import React from "react";

function SideBar() {
  return (
    <div>
      <div className="bars">
        <button type="button" className="btn transition" id="sidebar-toggle">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="sidebar transition overlay-scrollbars animate__animated  animate__slideInLeft">
        <div className="sidebar-content">
          <div id="sidebar">
            <div className="logo">
              <h2><img src="assets/images/logo.png" alt="This is a logo" /></h2>
            </div>

            <ul className="side-menu">
              <li>
                <a href="#" className="active">
                  <i className="bx bxs-dashboard icon"></i> Dashboard
                </a>
              </li>

              <li className="divider" data-text="STARTER">
                STARTER
              </li>

              <li>
                <a href="#">
                  <i className="bx bx-columns icon"></i>
                  Layout
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">Default Layout</a>
                  </li>
                  <li>
                    <a href="#">Top Navigation</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-meh-blank icon"></i>
                  Blank Page
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fa fa-th icon"></i>
                  Bootstrap
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">Alert</a>
                  </li>
                  <li>
                    <a href="#">Badge</a>
                  </li>
                  <li>
                    <a href="#">Breadcrumb</a>
                  </li>
                  <li>
                    <a href="#">Buttons</a>
                  </li>
                  <li>
                    <a href="#">Card</a>
                  </li>
                  <li>
                    <a href="#">Carousel</a>
                  </li>
                  <li>
                    <a href="#">Dropdown</a>
                  </li>
                  <li>
                    <a href="#">List Group</a>
                  </li>
                  <li>
                    <a href="#">Modal</a>
                  </li>
                  <li>
                    <a href="#">Navs</a>
                  </li>
                  <li>
                    <a href="#">Pagination</a>
                  </li>
                  <li>
                    <a href="#">Progress</a>
                  </li>
                  <li>
                    <a href="#">Spinner</a>
                  </li>
                </ul>
              </li>

              <li className="divider" data-text="Atrana">
                Endless
              </li>

              <li>
                <a href="#">
                  <i className="bx bx-columns icon"></i>
                  Components
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">Avatar</a>
                  </li>
                  <li>
                    <a href="#">Toastify</a>
                  </li>
                  <li>
                    <a href="#">Sweet Alert</a>
                  </li>
                  <li>
                    <a href="#">Hero</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-notepad icon"></i>
                  Forms
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">Editor</a>
                  </li>
                  <li>
                    <a href="#">Validation</a>
                  </li>
                  <li>
                    <a href="#">Checkbox</a>
                  </li>
                  <li>
                    <a href="#">Radio</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-widget icon"></i>
                  Widgets
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">ChatBox</a>
                  </li>
                  <li>
                    <a href="#">Emails</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-bar-chart-alt-2 icon"></i>
                  Charts
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">ChartJS</a>
                  </li>
                  <li>
                    <a href="#">Apexcharts</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-cloud-rain icon"></i>
                  Icons
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">Fontawesome</a>
                  </li>
                  <li>
                    <a href="#">Bootstrap Icons</a>
                  </li>
                </ul>
              </li>

              <li className="divider" data-text="Pages">
                Pages
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-user icon"></i>
                  Auth
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Register</a>
                  </li>
                  <li>
                    <a href="#">Forgot Password</a>
                  </li>
                  <li>
                    <a href="#">Reset Password</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="bx bxs-error icon"></i>
                  Errors
                  <i className="bx bx-chevron-right icon-right"></i>
                </a>
                <ul className="side-dropdown">
                  <li>
                    <a href="#">403</a>
                  </li>
                  <li>
                    <a href="#">404</a>
                  </li>
                  <li>
                    <a href="#">500</a>
                  </li>
                  <li>
                    <a href="#">503</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i className="fa fa-pencil-ruler icon"></i>
                  Credits
                </a>
              </li>
            </ul>

            <div className="ads">
              <div className="wrapper">
                <div className="help-icon">
                  <i className="fa fa-circle-question fa-3x"></i>
                </div>
                <p>
                  Need Help with <strong>Eve Corp</strong>?
                </p>
                <a href="#" className="btn-upgrade">
                  Documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar-overlay"></div>
    </div>
  );
}

export default SideBar;
