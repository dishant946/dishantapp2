import React from 'react';
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <>
    <div><footer className="d-flex flex-wrap justify-content-center w-100% align-items-center py-3 my-4 border-top text-center">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </Link>
      <span className="text-muted  d-block">© 2023 Hunger Adda, Inc </span>
    </div>
  </footer></div>
    </>
  );
}

export default Footer;
