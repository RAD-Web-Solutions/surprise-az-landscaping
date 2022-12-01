class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
        .footer-top{
          width: 100%;
          height: 107.27px;
          background-color: #000000;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }
      
      .footer-top-icon{
          width: 66px;
          height: 66px;
          border-radius: 50px;
          border: 3px solid white;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 20px;
      }
      
      .footer-top-content h3{
          margin-bottom: 4px;
          width: 253.98px;
          height: 33.27;
      }
      
      .footer-top-content h3 a{
          text-decoration: none;
          color: white;
          font-size: 28px;
          font-weight: 700;
      }
      
      .footer-top-content p{
          color: white;
          font-size: 13px;
      }
      
      .footer-column{
          width: 379.98px;
          height: 107.27px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }
      
      
      
      .logo{
          width: 570px;
          height: 125px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 20px;
          cursor: pointer;
      }
      
      .footer-bottom-column-content{
          width: 570px;
          height: 151.94px;
          line-height: 30px;
          font-size: 16px;
          font-weight: 400;
          font-family: Arial, Helvetica, sans-serif;
      }
      
      .footer-bottom{
          width: 100%;
          height: 316.94px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
      }
      
      .footer-bottom-column{
          width: 570px;
          height: 296.94px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }
      
      .footer-bottom-column-2{
          width: 570px;
          height: 296.94px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
      }
      
      .footer-bottom-column-2 ul li{
          text-align: center; 
          padding: 7px;
      }
      
      .footer-bottom-column-2 ul{
          list-style: none;
      }
      
      .footer-bottom-column-2 ul li a{
          text-decoration: none;
          color:#9EC012;
          font-weight: 600;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
      }
      
      #quick{
          padding-bottom: 10px;
          font-size: 22px;
          font-weight: 600;
      }
        </style>
        <footer>
        <div class="footer-top">
        <div class="footer-column">
            <div class="footer-top-icon"><a href="#"><i class="fa-solid fa-phone-flip" style="color:white; font-size: 30px; text-align: center;"></i></a></div>
            <div class="footer-top-content">
                <h3><a href="#">Phone</a></h3>
                <p>(623) 288-4340</p>
            </div>
        </div>
        <div class="footer-column">
            <div class="footer-top-icon"><i class="fa-solid fa-clock" style="color:white; font-size: 30px; text-align: center;"></i></div>
            <div class="footer-top-content">
                <h3><a href="#">Office Hours</a></h3>
                <p>Monday to Friday: 8:00 am - 5:00 pm</p>
            </div>
        </div>
        <div class="footer-column">
            <div class="footer-top-icon"><a href="#"><i class="fa-solid fa-map-location-dot" style="color:white; font-size: 30px; text-align: center;"></i></a></div>
            <div class="footer-top-content">
                <h3><a href="#">Address</a></h3>
                <p>Surprise Arizona ,USA.</p>
            </div>
        </div>
    </div>
  
  
  
    <div class="footer-bottom">
        <div class="footer-bottom-column">
           <div class="logo"><img src="https://surpriseazlandscaping.net/wp-content/uploads/elementor/thumbs/Surprise-Az-Landscaping-Logo-pxs28c93yfm3typp4bho3djtnw17i29wl0aevtdds0.png"></div>
           <div class="footer-bottom-column-content"><p>Let’s make the grass on your side of the fence always greener. We are a Landscaping Company, providing all you need for Landscaping and Landscape Design to build the yard of your dreams. We bring our experience, and our eye for design, to your backyard or commercial property. We can help you keep your yard healthy and looking great.</p></div> 
        </div>
  
        <div class="footer-bottom-column-2">
            <h2 id="quick">Quicklinks</h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    </div>
  
   
  
    <div class="a-r-r-section">
        <div class="a-r-r-column">
            <h2>© ALL RIGHTS RESERVED 2022, SURPRISE AZ LANDSCAPING</h2>
        </div>
    </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);