import React from 'react'
import '../../Styles/btgStyle.css'
export default function BenifitAndUses() {
    return (
        <div>
            
            <div className="bhead">
BENEFITS OF TRIPLE GB
</div>


<div className="all">

<div className="btgLeft">
    <div className="rect one" >
          Water will flow down to the bin
    </div>

    <div className="rect two">
	        Easy to Carry
    </div>

    <div className="rect three" >
          Easy to Clean
    </div>

</div>
<div className="btgRight">
    <div className="rect four" >
	        Easy to Compost
    </div>


    <div className="rect five" >
	        No Smell
    </div>

    <div className="rect six">
	        Organic
    </div>
</div>

</div>


<hr/>
<h1 className="bhead">
USES OF OUR PRODUCT
</h1>


<div className="bUse"
 onMouseEnter={()=>{
    const pic = document.querySelector('.usepic')
    pic.classList.toggle("zoom")}}
 onMouseLeave={()=>{
    const pic = document.querySelector('.usepic')
    pic.classList.toggle("zoom")
 }}>

  <div className="col1">
        <div className="urect">
       Wet waste, we can produce compost soil and TEA from Dry waste, we can reuse and recycle the product
        </div>
        <br/><br/>
        <div className="urect">
       The Garbage Cafe solution is a big solution for Dry waste
        </div>
        <br/><br/>
        <div className="urect">
       This will be a common market for all the Private companies to collect their by-products from this program
        </div>
  </div>
<br/><br/>
  <div className="col2">
        <div className="usepic" > </div>
  </div>

</div>



        </div>
    )
}
