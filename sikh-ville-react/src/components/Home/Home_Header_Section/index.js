import React from 'react'

const Header = () => {
  return (
    <div id="SVBanner" className="carousel slide main-banner" data-ride="carousel">
    {/* <!-- <ol className="carousel-indicators">
        <li data-target="#SVBanner" data-slide-to="0" className="active"></li>
        <li data-target="#SVBanner" data-slide-to="1"></li>
        <li data-target="#SVBanner" data-slide-to="2"></li>
    </ol> --> */}
    <a className="carousel-control-prev" href="#SVBanner" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#SVBanner" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src="images/Banner.png" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
            <img src="images/Banner.png" className="d-block w-100" alt="..."/>
        </div>
        <div className="carousel-item">
            <img src="images/Banner.png" className="d-block w-100" alt="..."/>
        </div>
    </div>
</div>
  )
}

export default Header