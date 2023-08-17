import React from 'react'

const Testimonial = () => {
  return (

    <div className="section companyInfo">
        <div className="row">
            <div className="card-group">
                <div className="card aboutUs">
                    <div className="card-body">
                        <h5 className="card-title">about</h5>
                        <p className="card-text">SikhVille.org is an online virtual village that will enable Sikh
                            parents to provide an
                            interactive way for their children to be connected with Sikh culture, values,
                            gurmukhi and
                            Punjabi Culture. SikhVille.org is the result of ongoing creative efforts of Vismaad
                            which
                            pioneered Sikh Animations. Since 2004 Vismaad has worked relentlessly to create
                            modern age
                            learning resources for Sikh children. </p>
                    </div>
                    <div className="card-footer">
                        <a href="#">read more</a>
                    </div>
                </div>
                {/* <!-- tAbout us section finish -->

                <!-- team section starts --> */}
                <div className="card ourTeam">
                    <div className="card-body">
                        <h5 className="card-title">the team</h5>
                        <p className="card-text">The creative team behind SikhVille.org is the same which enthralled
                            Sikh world by first
                            adapting animation as a medium of parchar (ਪਰਚਾਰ). Vismaad movies Sahibzadey, Banda
                            Singh
                            Bahadur, Sundri, Bhai Taru Singh & Bhai Subeg Singh Shahbaz Singh today are
                            household names
                            in Sikh families. Vismaad is a not-for-profit venture which runs with the support of
                            worldwide sikh sangat. All revenues earned from movies are reinvested to create more
                            projects.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#">read more</a>
                    </div>
                </div>
                {/* <!-- team section finish -->

                <!-- mission section starts --> */}
                <div className="ourMission card">
                    <div className="card-body">
                        <h5 className="card-title">mission</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural
                            lead-in to additional content. This card has even longer content than the first to
                            show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <a href="#">read more</a>
                    </div>
                </div>

            </div>

            {/* <!-- mission section finish --> */}
        </div>
    </div>
  
   
  )
}

export default Testimonial