import React from 'react'

const Music = () => {
  return (
    <div className="section music">
    <div className="content-container">
        <div className="container">
            <div className="section-heading"><span>music</span></div>
            {/* <!-- info section starts --> */}
            <div className="content">
                <div className="row justify-content-between justify-content-md-between">
                    <div className="col-md-4 text-center" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="images/Sahibzadey.png" alt="" srcset=""/>
                    </div>



                    <div className="col-md-4 text-center" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img src="images/BSB.png" alt="" srcset=""/>
                    </div>
                </div>

                <div className="view-all"><a href="#">View All</a></div>
            </div>
            {/* <!-- shopping section finish --> */}
        </div>
    </div>
</div>
  )
}

export default Music