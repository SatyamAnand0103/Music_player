import React from "react";

function Footer() {
  return (
    <>
      <div className="Names">Popular Artists </div>
       
      <div className="Artists">
        <a href="https://wynk.in/music/artist/arijit-singh/wa_e7218401?q=arjit">
        <div>
          <img src={require("./images/Arijit.webp")} className="Artist_1"></img>
          <div id="name1"> Arijit Singh</div>
        </div> </a>

<a href="https://wynk.in/music/artist/ankit-tiwari/wa_89926791?q=Ankit+Tiwari">
         <div>
          <img src={require("./images/Ankit.webp")} className="Artist_2"></img>
          <div id="name2"> Ankit Tiwari</div>
        </div>
        </a>
        <a href="https://wynk.in/music/artist/gajendra-verma/wa_41320736?q=gajendra++">
        <div> 
          <img
            src={require("./images/gajendra.webp")}
            className="Artist_3"
          ></img>
          <div id="name3"> Gajendra Verma </div>
        </div>
        </a>
        <a href="https://wynk.in/music/artist/sonu-nigam/wa_96e76144?q=sonu+nigam">
        <div> 
          <img src={require("./images/Sonu.webp")} className="Artist_4"></img>
          <div id="name4"> Sonu Nigam </div>
        </div> 
        </a>
     </div> 
    </>
  );
}
export default Footer;
