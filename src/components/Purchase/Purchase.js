import React from 'react'
import { useHistory } from 'react-router'
import '../../Styles/purchaseStyle.css'
import Footer from '../Product-Page/Footer'
export default function Purchase() {
const history = new useHistory()
    return (
        <div>
                <section className="purchase section_padding cover-bg">
	<div className="container">
		<div className="row">
			<div className="section_title text-center">
            <button className="backButtom" onClick={()=>{history.push("/")}}>Go Back</button>
				<p>PURCHASE</p>
			</div>

			
			<div className="col-md-12">
				<div className="contact-form">
					<form>
						<div className="row">


                            <div className="subRow">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" placeholder="Name" required="required"/>
                                    </div>
                            
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Email" required="required"/>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="address" placeholder="Address" required="required"/>
                                    </div>
              
                                    <div className="form-group">
                                        <input type="contact" name="Phone Number" placeholder="Phone Number" required="required"/>
                                    </div>
                                </div>
                            </div>




							<div className="col-md-12">
								<textarea placeholder="Note"></textarea>
							</div>

							<div className="col-md-12">
								<button type="submit" className="btn">Submit</button>
							</div>
						</div>
					</form>
				</div>
			</div>

            <div className="col-md-12">
                <div className="feedback-form">
                    <div>
                        <h3>FeedBack</h3>
                      </div>
                    <form>
                        <div className="row">

                            <div className="col-md-12">
                                <textarea placeholder="FeedBack"></textarea>
                            </div>

                            <div className="col-md-12">
								<button type="submit" className="btn">Submit</button>
							</div>
                        </div>
                    </form>
                </div>
        
		    </div>
        </div>
	</div>
</section>
<Footer/>
        </div>
    )
}
