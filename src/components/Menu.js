import React from 'react'

function Menu() {
  return (
    <div className="menu">
    <ul>
      <li className="nav-item dropdown dropdown-list-toggle">
        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i className="fa fa-bell size-icon-1"></i><span className="badge bg-danger notif">4</span>
        </a> 				 
        <div className="dropdown-menu dropdown-list">
          <div className="dropdown-header">Notifications</div>
          <div className="dropdown-list-content dropdown-list-icons">
            <div className="custome-list-notif"> 
            <a href="#" className="dropdown-item dropdown-item-unread">
              <div className="dropdown-item-icon bg-primary text-white">
                <i className="fas fa-code"></i>
              </div>
              <div className="dropdown-item-desc">
                The Atrana template has the latest update!
                <div className="time text-primary">3 Min Ago</div>
              </div>
              </a>

              <a href="#" className="dropdown-item">
              <div className="dropdown-item-icon bg-info text-white">
                <i className="far fa-user"></i>
              </div>
              <div className="dropdown-item-desc">
                 Sri asks you for friendship!
                <div className="time">12 Hours Ago</div>
              </div>
              </a>

              <a href="#" className="dropdown-item">
              <div className="dropdown-item-icon bg-danger text-white">
                <i className="fas fa-check"></i>
              </div>
              <div className="dropdown-item-desc">
                Storage has been cleared, now you can get back to work!
                <div className="time">20 Hours Ago</div>
              </div>
              </a>

            
              <a href="#" className="dropdown-item">
              <div className="dropdown-item-icon bg-info text-white">
                <i className="fas fa-bell"></i>
              </div>
              <div className="dropdown-item-desc">
                  Welcome to Atrana Template, I hope you enjoy using this template!
                <div className="time">Yesterday</div>
              </div>
              </a>

            </div>
          </div>

          <div className="dropdown-footer text-center">
            <a href="#">View All</a>
          </div>

          </div>
        </li>
     
        <li className="nav-item dropdown">
        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="assets/images/avatar/avatar-1.png" alt="" />
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="my-profile.html"><i className="fa fa-user size-icon-1"></i> <span>My Profile</span></a>
          <a className="dropdown-item" href="settings.html"><i className="fa fa-cog size-icon-1"></i> <span>Settings</span></a>
          <hr className="dropdown-divider" />
          <a className="dropdown-item" href="#"><i className="fa fa-sign-out-alt  size-icon-1"></i> <span>My Profile</span></a>
        </ul>
        </li>
    </ul>
  </div>
  )
}

export default Menu
