import React from 'react';

const Navbar=()=>{
    return(
<div className='Navbar'>
 


<nav classNameName="navbar bg-primary" data-bs-theme="dark">

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a class="navbar-brand front-bold" href="#">
      <img src="https://mir-s3-cdn-cf.behance.net/projects/404/9d9e87179580315.Y3JvcCwxMDgwLDg0NCwwLDExNw.png" alt="Logo" width="80" height="50" class="rounded-pill"/>poorvika
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">phone</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">tabs</a>
        </li> 
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">air bods</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">special offers</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</nav>





</div>
       
    )
}
 
export default Navbar;