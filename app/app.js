
var homeContent = `<div class="home"></div><div class="banner">
<div class="hero-text">
  <h1>travel-fly</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />Fugiat
    aliquid minus nemo sed est.
  </p>
  <button>READ MORE</button>
</div>
</div>
<br />

<!-- offers begin -->
<section class="offers">
<div class="offer">
  <div class="hero-image">
    <img src="images/israel.jpg" alt="one" />
    <div class="hero-text">
      <h1>ISRAEL</h1>
      <h2>from $1000</h2>
      <button>LEARN MORE</button>
    </div>
  </div>
</div>

<div class="offer">
  <div class="hero-image">
    <img src="images/usa.jpg" alt="one" />
    <div class="hero-text">
      <h1>U.S.A.</h1>
      <h2>from $1500</h2>
      <button>LEARN MORE</button>
    </div>
  </div>
</div>

<div class="offer">
  <div class="hero-image">
    <img src="images/australia.jpg" alt="one" />
    <div class="hero-text">
      <h1>AUSTRALIA</h1>
      <h2>from $1800</h2>
      <button>LEARN MORE</button>
    </div>
  </div>
</div>
</section>
<!-- offers end -->

<!-- form content beginning -->
<div class="form-content">
<h1 class="title">Booking form</h1>

<div class="top-boxes">
  <input type="text" id="fName" placeholder="name..." />

  <input
    type="email"
    id="email"
    class="long-box"
    placeholder="email..."
  />
</div>

<div class="top-boxes">
  <input type="text" id="country" placeholder="country..." />

  <input type="text" id="hotel" class="long-box" placeholder="hotel..." />
</div>

<div class="middle-boxes">
  <p>Check-in</p>
  <div class="holder">
    <input
      type="text"
      id="check-in"
      class="longer-box"
      placeholder="05/10/2020"
    />
    <i class="far fa-calendar-alt"></i>
  </div>
</div>

<div class="middle-boxes">
  <p>Check-out</p>
  <div class="holder">
    <input
      type="text"
      id="check-in"
      class="longer-box"
      placeholder="05/20/2020"
    />
    <i class="far fa-calendar-alt"></i>
  </div>
</div>

<div class="lower-boxes">
  <p>Adult</p>
  <div class="holder">
    <input type="text" id="box-one" class="smaller-box" placeholder="2" />
    <i class="fas fa-caret-down"></i>
  </div>

  <p>Children</p>
  <div class="holder">
    <input type="text" id="box-two" class="smaller-box" placeholder="0" />
    <i class="fas fa-caret-down"></i>
  </div>

  <p>Rooms</p>
  <div class="holder">
    <input
      type="text"
      id="box-three"
      class="smaller-box"
      placeholder="1"
    />
    <i class="fas fa-caret-down"></i>
  </div>
</div>

<div class="lower-boxes">
  <textarea class="big-box" placeholder="message..."></textarea>
</div>

<div class="submit-button">
  <button class="btn">SUBMIT</button>
</div>
</div>`;
var aboutContent = `<div class="about">
<div class="about-header">
  <h1 class="about-header-title">ABOUT:</h1>
  <div class="border-bottom"></div>

  <!-- change above to p instead of h1-->
  <p>
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    quae ab illo inventore veritatis et quasi architecto beatae vitae
    dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
    aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
    eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
    sed quia non numquam eius modi tempora incidunt ut labore et dolore
    magnam aliquam quaerat voluptatem.
  </p>
</div>
<div class="about-client-quotes">
  <p class="client-quote-title">CLIENT QUOTES:</p>
  <div class="border-bottom-two"></div>
  <div class="client-box">
    <div class="client-image">
      <img src="images/about-client-01.jpg" alt="client" />
    </div>
    <div class="client-quote">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo.
      </p>
    </div>
    <div class="client-name">- Miranda Brown</div>
  </div>

  <div class="client-box">
    <div class="client-image">
      <img src="images/about-client-02.jpg" alt="client" />
    </div>
    <div class="client-quote">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo.
      </p>
    </div>
    <div class="client-name">- Johnathan wes</div>
  </div>
</div>
</div>`;
var toursContent = `<div class="tours">
<div class="tour-hero">
  <p class="about-hero-text">TOURS:</p>
  <!-- <p class="about-price-text">STARTING FROM $1000</p> -->
</div>
<div class="tour-home">
  <div class="tour" id="tour1">
    <div class="promo-text">
      <h1>Israel</h1>
      <h2>from $1000</h2>
    </div>
    
    <div id="israel" class="read-btn" src="israelContent">LEARN MORE</div>
    
  </div>

  <div class="tour" id="tour2">
    <div class="promo-text">
      <h1>U.S.A</h1>
      <h2>from $1500</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='usa.html';"
        >LEARN MORE</span
      >
    </p>
  </div>

  <div class="tour" id="tour3">
    <div class="promo-text">
      <h1>Australia</h1>
      <h2>from $1800</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='australia.html';"
        >LEARN MORE</span
      >
    </p>
  </div>
</div>

<div class="tour-home">
  <div class="tour" id="tour4">
    <div class="promo-text">
      <h1>New Zealand</h1>
      <h2>from $1200</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='new-zealand.html';"
        >LEARN MORE</span
      >
    </p>
  </div>

  <div class="tour" id="tour5">
    <div class="promo-text">
      <h1>France</h1>
      <h2>from $2500</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='france.html';"
        >LEARN MORE</span
      >
    </p>
  </div>

  <div class="tour" id="tour6">
    <div class="promo-text">
      <h1>Egypt</h1>
      <h2>from $900</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='egypt.html';"
        >LEARN MORE</span
      >
    </p>
  </div>
</div>

<div class="tour-home">
  <div class="tour" id="tour7">
    <div class="promo-text">
      <h1>Japan</h1>
      <h2>from $1300</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='japan.html';"
        >LEARN MORE</span
      >
    </p>
  </div>

  <div class="tour" id="tour8">
    <div class="promo-text">
      <h1>Canada</h1>
      <h2>from $2000</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='canada.html';"
        >LEARN MORE</span
      >
    </p>
  </div>

  <div class="tour" id="tour9">
    <div class="promo-text">
      <h1>U.A.E</h1>
      <h2>from $3000</h2>
    </div>
    <p>
      <span class="read-btn" onclick="location.href='uae.html';"
        >LEARN MORE</span
      >
    </p>
  </div>
</div>
</div>`;
var specialsContent = `<div class="specials">
<div class="about-header">
  <div class="about-special-offers">
    <p class="offers-title">SPECIAL OFFER(S):</p>
    <div class="border-bottom-two"></div>
    <div class="specials-box">
      <div class="offer-image">
        <img src="images/special-offer-01.jpg" alt="offer" />
      </div>
      <div class="offer-info">
        <p class="special-offer-title">BARCELONA, SPAIN:</p>
        <p class="discount">(20% off!)</p>
        <div class="border-bottom-two"></div>
        <p class="discount-info">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
        <p>
          <span class="read-btn">LEARN MORE</span>
        </p>
      </div>
    </div>

    <div class="specials-box">
      <div class="offer-image">
        <img src="images/special-offer-02.jpg" alt="offer" />
      </div>
      <div class="offer-info">
        <p class="special-offer-title">BANGKOK, THAILAND:</p>
        <p class="discount">(10% off!)</p>
        <div class="border-bottom-two"></div>
        <p class="discount-info">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto
          beatae vitae dicta sunt explicabo.
        </p>
        <p>
          <span class="read-btn">LEARN MORE</span>
        </p>
      </div>
    </div>
  </div>
</div>
</div>`;
var blogContent = `<div class="blog">
<div class="about-header">
  <div class="about-blog-posts">
    <p class="blog-title">BLOG:</p>
    <div class="border-bottom-two"></div>
    <div class="blog-box">
      <div class="post-date">
        <p class="post-day">06</p>
        <p class="post-month">JUN</p>
      </div>
      <div class="post-content">
        <div class="blog-image">
          <img src="images/blog.jpg" alt="offer" />
        </div>
        <div class="post-info">
          <p class="blog-black-text">
            Sed et persipiatis unde omnis iste
          </p>
          <p class="blog-blue-text">
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae
          </p>
        </div>
      </div>
    </div>

    <div class="blog-box">
      <div class="post-date">
        <p class="post-day">23</p>
        <p class="post-month">JUL</p>
      </div>
      <div class="post-content">
        <div class="blog-image">
          <img src="images/blog.jpg" alt="offer" />
        </div>
        <div class="post-info">
          <p class="blog-black-text">
            Sed et persipiatis unde omnis iste
          </p>
          <p class="blog-blue-text">
            Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et
            quasi architecto beatae
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;
var contactContent = `<div class="contact">
<div class="about-contact">
  <p class="contact-title">CONTACT US:</p>
  <div class="border-bottom-two"></div>
  <div class="contact-box">
    <div class="contact-image-address">
      <div class="contact-image">
        <img src="images/contact-image.svg" alt="map" />
      </div>
      <p class="contact-address">
        travel-fly Inc. <br />8901 Marmora Road, <br />Glasgow, D04
        89GR.<br />
        Freephone:+1 800 559 6580 <br />Telephone:+1 800 603 6035
        <br />FAX:+1 800 889 9898
      </p>
    </div>

    <div class="contact-form">
      <input
        type="text"
        id="name"
        class="contact-box"
        placeholder="Your name..."
      />
      <input
        type="text"
        id="email"
        class="contact-box"
        placeholder="Email Address..."
      />
      <input
        type="text"
        id="company"
        class="contact-box"
        placeholder="Company..."
      />
      <textarea class="message-box" placeholder="Message..."></textarea>

      <p>
        <span class="read-btn">SEND MESSAGE</span>
      </p>
    </div>
  </div>
</div>
</div>`;

var israelContent = `<div class="tours">
<div id="tours1">
  <div class="about-hero">
    <p class="about-hero-text">Israel tour package:</p>
    <p class="about-price-text">STARTING FROM $1000</p>
  </div>
  <div class="about-promo">
    <div class="promo">
      
      <!-- <p class="promo-text">First Promo</p>
  <p>
    <span class="read-btn">Read More</span>
  </p> -->
    </div>

    <div class="promo" id="promo2">
      <!-- <p class="promo-text">Second Promo</p>
  <p>
    <span class="read-btn">Read More</span>
  </p> -->
    </div>

    <div class="promo" id="promo3">
      <!-- <p class="promo-text">Third Promo</p>
  <p>
    <span class="read-btn">Read More</span>
  </p> -->
    </div>
  </div>
  <div class="days">
    <div class="day-header">
      <h1 class="day-header-title">Day #1:</h1>
      <div class="title-bottom"></div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
    <div class="day-header">
      <h1 class="day-header-title">Day #2:</h1>
      <div class="title-bottom"></div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>
    <div class="day-header">
      <h1 class="day-header-title">Day #3:</h1>
      <div class="title-bottom"></div>

      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
        quae ab illo inventore veritatis et quasi architecto beatae
        vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
        voluptas sit aspernatur aut odit aut fugit, sed quia
        consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit, sed quia non numquam eius
        modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
    </div>

    <p><span class="book-btn">BOOK NOW</span></p>
  </div>
</div>
</div>`;

function addButtonListeners() {
    $("nav a").click(function(e) {
        // the most common for the above event are "e", "evt", and "event"
        let btnId = e.currentTarget.id;
        let contentName = btnId + "Content";
        console.log(contentName);
        $("#app").html(eval(contentName));
    });
    
}

function init() {
    $("#app").html(homeContent);
    addButtonListeners();

}

$(document).ready(function () {
    // let firstName = "Pimentel";
    init();
});

// console.log(firstName);