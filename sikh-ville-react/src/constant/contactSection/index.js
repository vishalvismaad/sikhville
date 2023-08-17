import React from 'react'

const Contact = () => {
  return (
    <div class="section getintouch">
            <div class="content-container" style={{background: "#1bbfec"}}>
                <div class="row" style={{margin: 0}}>
                    <div class="col-lg-6" style={{padding: 0}}>
                        <div class="cd-h-timeline js-cd-h-timeline margin-bottom-md slider-conta">
                            <div class="cd-h-timeline__events">
                                <ol>
                                    <li class="cd-h-timeline__event cd-h-timeline__event--selected text-component">
                                        <h5>punjab - india</h5>
                                        <p>Vismaad Mediatech Pvt. Ltd.</p>
                                        <p>unit 210, ST Square, C-167 Sector 74</p>
                                        <p>Ajitgarh (Mohali), Punjab 140308</p>
                                        <p><a href="#">View Location</a></p>
                                        <img src="images/caloifornoia.png" alt="" srcset=""/>
                                    </li>

                                    <li class="cd-h-timeline__event text-component">
                                        <h5>PUNJAB - INDIA</h5>
                                        <p>Vismaad Mediatech Pvt. Ltd.</p>
                                        <p>unit 210, ST Square, C-167 Sector 74</p>
                                        <p>Ajitgarh (Mohali), Punjab 140308</p>
                                        <p><a href="#">View Location</a></p>
                                        <img src="images/punjab.png" alt="" srcset=""/>
                                    </li>

                                    <li class="cd-h-timeline__event text-component">
                                        <h5>PUNJAB - INDIA</h5>
                                        <p>Vismaad Mediatech Pvt. Ltd.</p>
                                        <p>unit 210, ST Square, C-167 Sector 74</p>
                                        <p>Ajitgarh (Mohali), Punjab 140308</p>
                                        <p><a href="#">View Location</a></p>
                                        <img src="images/singapore.png" alt="" srcset=""/>
                                    </li>
                                </ol>
                            </div>
                            <div class="cd-h-timeline__container container">
                                <div class="cd-h-timeline__dates">
                                    <div class="cd-h-timeline__line">
                                        <ol>
                                            <li><a href="#0" data-date="16/01/2014"
                                                    class="cd-h-timeline__date cd-h-timeline__date--selected">California</a>
                                            </li>
                                            <li><a href="#0" data-date="28/02/2014"
                                                    class="cd-h-timeline__date">Punjab</a></li>
                                            <li><a href="#0" data-date="20/04/2014"
                                                    class="cd-h-timeline__date">Singapore</a></li>

                                        </ol>
                                        <span class="cd-h-timeline__filling-line" aria-hidden="true"></span>
                                    </div>
                                </div>

                                <ul class="d-none">
                                    <li><a href="#0"
                                            class="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--prev cd-h-timeline__navigation--inactive">Prev</a>
                                    </li>
                                    <li><a href="#0"
                                            class="text-replace cd-h-timeline__navigation cd-h-timeline__navigation--next">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 m-0 p-0">
                        <div class="get-contact">
                            <h5>get in touch</h5>
                            <p>We are here to answer any questions you may have about your Sikhville experiences.
                                Reach out to us and we'll respond as soon as we can.</p>
                            <p>
                                <a href="#">mail@vismaad.com</a>
                                <a href="#">+91 (172) 462 8174</a>
                                <a href="#">+91 981 418 0354</a>
                            </p>

                            <div class="w-100 float-left mt-4">
                                <form class="needs-validation" novalidate>
                                    <div class="form-row">
                                        <div class="col-md-12">
                                            <div class="box-container">
                                                <input type="text" class="form-control" onclick="this.value=''"
                                                    value="Your Name" required/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="box-container">
                                                <input type="text" class="form-control" onclick="this.value=''"
                                                    value="Your Email" required/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="box-container">
                                                <input type="text" class="form-control" onclick="this.value=''"
                                                    value="Your Mobile Number" required/>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="box-container textarea">
                                                <textarea class="form-control is-invalid" value="Type your message"
                                                    onclick="this.value=''" required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="button" type="submit">Submit</button>
                                        </div>

                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Contact