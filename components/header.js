class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      #logo-img{
        width: 100%;
        height: 130px;
    }
    
    .header{
        display: flex;
        align-items: center;
        justify-content:space-evenly;
        z-index: 999;
    }
    
    .sticky{
        position:sticky;
        top: 0;
    }
    
    .active{
        background-color: #1a3a28;
        transition: 1.0s ease-in;
        transition: 1.0s ease-out;
    }
    
    nav ul li{
        display: inline-block;
    }
    
    nav ul li a{
        text-decoration: none;
        list-style: none;
        padding: 9px;
        color: white;
        font-weight: 600;
        font-size: 16px;
        font-family:sans-serif;
        letter-spacing: -0.8px;
    }
    
    nav ul li a:hover{
        border-bottom: 3px solid black;
        color: black;
        transition: 0.5s ease-in-out;
    }
    
    .btn-header{
        height: 60px;
        width: 80px;
        background-color: rgba(240, 248, 255, 0);
        border: 1px solid rgba(255, 255, 255, 0.007);
    }
    
    .btn-header:hover{
        border: 1px solid white;
    }
    
    .btn-logo{
       height:20px;
       width: 20px;
    }
    
    .num-hours{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
    }
    
    .num{
        text-align: center;
        font-weight: 600;
        font-size: 16px;
        font-family:sans-serif;
    }
    
    .hours{
        font-weight: 600;
        font-size: 16px;
        font-family:sans-serif;
    }

    .dropdown-content a{
      float: left;
      font-size: 16px;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    .dropdown{
      display:inline;
      overflow: hidden;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1; 
    }

    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropdown-content a:hover {
      background-color: brown;
      color:#9EC012;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

      </style>

      <header class=header id="myHeader">
    <div class="logo-img">        
    <img id="logo-img" src="https://surpriseazlandscaping.net/wp-content/uploads/2022/04/Dark-Green-Circle-Landscaping-Logo-768x768.png.webp"></div>
    <nav>
        <ul>
                <li><a href="index.html">Home</a></li>
                <li class="dropdown"><a href="#">Services <i class="fa fa-caret-down"></i></a>
                <div class="dropdown-content">
                <a href="Artificial-Turf-Installation.html">Artificial Turf Installation</a>
                <a href="BackyardLandscaping.html">Backyard Landscaping</a>
                <a href="Hardscaping.html">Hardscaping</a>
                <a href="Irrigation-System-Installation.html">Irrigation System Installation</a>
                <a href="LandscapeDesign.html">Landscape Design</a>
                <a href="Outdoor.html">Outdoor Step Construction</a>
                <a href="RetainingWalls.html">Retaining Walls</a>
                <a href="RockLandscaping.html">Rock Landscaping</a>
                <a href="WalkwayLandscaping.html">Walkway Landscaping</a>
                </div>
                </li>
                <li><a href="#">Blog</a></li>
                <li><a href="aboutus.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="#">Location</a></li>
        </ul>
    </nav>
    <div class="num-hours">
            <button class="btn-header"><i class="fa-solid fa-phone" style="font-size:25px;color:#ffff"></i></button>
            <div class="num-hours-align">
            <div class="num">
                <h2><b>(623) 288-4340</b><h2>
            </div>
            <div class="hours">
               <h2><b>Mon-Fri: 8:00 am – 5:00 pm</b></h2>
            </div>
        </div>
        </div>
    </header>
    `;
  }
}

customElements.define('header-component', Header);



window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");


var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header.classList.add("active")
  } else {
    header.classList.remove("sticky");
    header.classList.remove("active")
  }
}