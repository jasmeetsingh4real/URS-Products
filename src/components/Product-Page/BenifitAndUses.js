import React from "react";
import "../../Styles/btgStyle.css";
import BenifitCard from "../../UI/BenifitCard";
export default function BenifitAndUses() {
  return (
    <div>
      <div className="bhead">BENEFITS OF TRIPLE GB</div>

      <div className="all">
        <div className="btgLeft">
          <BenifitCard
            className="rect one"
            title="testing"
            description="demo descsdfsefrd dcvbds9 cvs s9cs08 cs0dvjcws nedc0 wmwe 0fwejfd0we d0wqj "
          />

          <div className="rect two">Easy to Carry</div>

          <div className="rect three">Easy to Clean</div>
        </div>
        <div className="btgRight">
          <div className="rect four">Easy to Compost</div>

          <div className="rect five">No Smell</div>

          <div className="rect six">Organic</div>
        </div>
      </div>

      <hr />
      <h1 className="bhead">USES OF OUR PRODUCT</h1>

      <div
        className="bUse"
        onMouseEnter={() => {
          const pic = document.querySelector(".usepic");
          pic.classList.toggle("zoom");
        }}
        onMouseLeave={() => {
          const pic = document.querySelector(".usepic");
          pic.classList.toggle("zoom");
        }}
      >
        <div className="col1">
          <div className="urect">
            1. Wet waste, we can produce compost soil and TEA from Dry waste, we
            can reuse and recycle the product
          </div>
          <br />
          <br />
          <div className="urect">
            2. The Garbage Cafe solution is a big solution for Dry waste
          </div>
          <br />
          <br />
          <div className="urect">
            3. This will be a common market for all the Private companies to
            collect their by-products from this program
          </div>
        </div>
        <br />
        <br />
        <div className="col2">
          <div className="usepic"> </div>
        </div>
      </div>
    </div>
  );
}
