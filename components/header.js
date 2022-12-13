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
      </style>
      <header class=header id="myHeader">
    <div class="logo-img">        
    <img id="logo-img" src="https://surpriseazlandscaping.net/wp-content/uploads/2022/04/Dark-Green-Circle-Landscaping-Logo-768x768.png.webp"></div>
    <nav>
        <ul>
                <li><a href="http://127.0.0.1:3002/surprise-az-landscaping/index.html">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="http://127.0.0.1:3002/surprise-az-landscaping/aboutus.html">About</a></li>
                <li><a href="http://127.0.0.1:3002/surprise-az-landscaping/contact.html">Contact</a></li>
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