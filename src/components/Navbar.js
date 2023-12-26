import React from 'react'

// import { Link } from 'react-router-dom';
 
export default function Navbar(props) {
  return (
    <>
    <div>
    
      <nav className={`navbar  navbar-expand-lg main_header navbar-${props.mode}  bg-${props.mode} ` }>
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><strong>{props.title}</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">About</a>
                </li> */}
               
            </ul>
            
            <form className="d-flex " role="search">
              <div className="container-fluid dark_mode">
                <p className={`mode text-${props.mode === 'light'? 'dark':'light'}`}>Enable Dark mode</p>
              </div> 
            </form>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
             
            </div>
            </div>
         </div>
        </nav>
    </div>
    <hr/>
    </>
  )
}



