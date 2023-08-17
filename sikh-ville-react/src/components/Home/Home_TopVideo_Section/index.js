import React from 'react'

const TopVideo = () => {
  return (

    <main className="lahori-zeera-sec">
    {/* <!-- top videos section starts --> */}
    <div className="section top-videos">
        <div className="content-container">
            <div className="container">
                <div className="section-heading"><span>top videos</span></div>
                {/* <!-- info section starts --> */}
                <div className="content">
                    <div className="row justify-content-between">
                        <div className="col-md-5">
                            <div className="w-100 float-left mt-5" data-aos="zoom-out-down" data-aos-duration="500">
                                <a href=""><img src="images/million-viwes.png" alt="" srcset=""/></a>
                            </div>
                            <div className="w-100 float-left mt-4" data-aos="zoom-out-down" data-aos-duration="500">
                                <a href=""><img src="images/jot-singh.png" alt="" srcset=""/></a>
                            </div>
                        </div>
                        {/* <!-- <div className="col-md-2"></div> --> */}
                        <div className="col-md-5">
                            <div className="w-100 float-left mt-5" data-aos="zoom-out-down" data-aos-duration="500">
                                <a href=""><img src="images/dadi-maa.png" alt="" srcset=""/></a>
                            </div>
                            <div className="w-100 float-left mt-4" data-aos="zoom-out-down" data-aos-duration="500">
                                <a href=""><img src="images/simran-kaur.png" alt="" srcset=""/></a>
                            </div>
                        </div>
                    </div>

                    <div className="view-all"><a href="#">View All</a></div>
                </div>
                {/* <!-- info section finish --> */}
            </div>
        </div>
    </div>
    {/* <!-- top videos section finish --> */}
    </main>

  )
}

export default TopVideo