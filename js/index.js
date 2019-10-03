const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav Styles and Headings
const links = ["Features", "About", "Services", "Product", "Vision"];
const navBar = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  navBar[i].textContent = links[i];

  // console.log(navBar[i]);
}

//  CTA Section Styling
const ctaStylz = document.querySelector(".cta-text h1");
const ctaStylzButton = document.querySelector(".cta-text button");
const ctaStylzImg = document.getElementById("cta-img");
ctaStylzImg.setAttribute("src", siteContent["cta"]["img-src"]);
ctaStylz.textContent = siteContent["cta"]["h1"];
ctaStylzButton.textContent = siteContent["cta"]["button"];

//  Top Content
const mainFeaturesH4 = document.querySelector(".top-content .text-content");
mainFeaturesH4.className = "Features";

const navText = document.querySelector(".Features h4");
navText.textContent = siteContent["main-content"]["features-h4"];

const navContent = document.querySelector(".Features p");
navContent.textContent = siteContent["main-content"]["features-content"];

const aboutContent = document.querySelector(".top-content .text-content");
aboutContent.className = "About";
const navText2 = document.querySelector(".About h4");

navText2.textContent = siteContent["main-content"]["about-h4"];
const navContent2 = document.querySelector(".About p");
navContent2.textContent = siteContent["main-content"]["about-content"];

// const topContent = document.querySelector(".top-content");
// ^^^ TEST ^^^

// Middle Image
const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//  Bottom Content
const servicesContent = document.querySelector(".bottom-content .text-content");
servicesContent.className = "Services";

const servicesText = document.querySelector(".Services h4");
servicesText.textContent = siteContent["main-content"]["services-h4"];
const servicesContent2 = document.querySelector(".Services p");
servicesContent2.textContent = siteContent["main-content"]["services-content"];

const productContent = document.querySelector(".bottom-content .text-content");
productContent.className = "Product";

const productText = document.querySelector(".Product h4");
productText.textContent = siteContent["main-content"]["product-h4"];
const productContent2 = document.querySelector(".Product p");
productContent2.textContent = siteContent["main-content"]["product-content"];

const visionContent = document.querySelector(".bottom-content .text-content");
visionContent.className = "Vision";

const visionText = document.querySelector(".Vision h4");
visionText.textContent = siteContent["main-content"]["vision-h4"];
const visionContent2 = document.querySelector(".Vision p");
visionContent2.textContent = siteContent["main-content"]["vision-content"];

// const bottomContent = document.querySelector('.bottom-content');
// ^^^ TEST ^^^

// Contact
const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

const contactPs = document.querySelectorAll('.contact p');

const contactInfo = ["123 Way 456 Street Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"]

for (let i = 0; i < contactInfo.length; i++) {
    contactPs[i].textContent = contactInfo[i]

    // console.log(contactPs[i])
}

//  Footer
const footerSection = document.querySelector("footer p");
