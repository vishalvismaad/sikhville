import React from 'react'

const Support = () => {
  return (

    <div className="section support">
        <div className="content-container">

            <div className="container">
                <div className="section-heading"><span>support</span></div>
                {/* <!-- info section starts --> */}
                <div className="content">
                    <div className="row justify-content-md-center justify-content-xl-between">
                        <div className="col-lg-5 text-center">
                            <h5 className="mb-4">dashvandh WEEK</h5>
                            <img src="images/daswandh.png" className="float-md-none float-left float-xl-left" alt=""
                                srcset=""/>
                        </div>



                        <div className="col-lg-5 text-center">
                            <h5 className="mb-4">what people say?</h5>

                            <div id="testimonialBanner" className="carousel slide testimonialSlider"
                                data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <p>What an excellent job done by you for the young generation.</p>
                                        <em>Devinder Kaur USA</em>
                                    </div>
                                    {/* <!-- <div className="carousel-item">
                                        <p>What an excellent job done by you for the young generation.</p>
                                        <em>Devinder Kaur USA</em>
                                    </div>
                                    <div className="carousel-item">
                                        <p>What an excellent job done by you for the young generation.</p>
                                        <em>Devinder Kaur USA</em>
                                    </div> --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- shopping section finish --> */}
            </div>
        </div>
    </div>
 

  )
}

export default Support