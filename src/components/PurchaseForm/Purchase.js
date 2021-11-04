import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../Styles/purchaseStyle.css";
import Footer from "../Product-Page/Footer";
export default function Purchase() {
  const Email = "universalrecycle24@gmail.com";

  const history = new useHistory();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
    phoneNo: "",
    note: "",
  });

  const getUserInfo = (val) => {
    const value = val.target.value;
    const key = val.target.name;
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };
  const nextLine = "%0d%0a";
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, address, phoneNo, note } = userInfo;
    if (name !== "" && email !== "" && address !== "" && phoneNo !== "") {
      try {
        window.location.href = `mailto:${Email}?subject=Tripple GB Product Inquiry&body=
      User-Name: ${name}
       ${nextLine}
      User-Address: ${address}
       ${nextLine}
      Contact: ${phoneNo} 
      ${nextLine}
      Email: ${email}
       ${nextLine}  ${nextLine}

      note: ${note}`;

        localStorage.setItem("isSubmitted", true);
        history.push("/");
      } catch (error) {
        alert("An error occured", error);
      }
    } else {
      alert("Fill the required fields");
    }
  };

  return (
    <div>
      <section className="purchase section_padding cover-bg">
        <div className="container">
          <div className="row">
            <div className="section_title text-center">
              <button
                className="backButtom"
                onClick={() => {
                  history.push("/");
                }}
              >
                Go Back
              </button>
              <p>PURCHASE</p>
            </div>

            <div className="col-md-12">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="subRow">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            value={userInfo.name}
                            onChange={getUserInfo}
                            placeholder="Name*"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={getUserInfo}
                            placeholder="Email*"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="address"
                            value={userInfo.address}
                            onChange={getUserInfo}
                            placeholder="Address*"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <input
                            type="number"
                            name="phoneNo"
                            value={userInfo.phoneNo}
                            onChange={getUserInfo}
                            placeholder="Phone Number*"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <textarea
                        placeholder="Note"
                        name="note"
                        value={userInfo.note}
                        onChange={getUserInfo}
                      ></textarea>
                    </div>

                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* <div className="col-md-12">
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
                      <button type="submit" className="btn">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
