const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Image setup
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//nav
const navA = document.querySelectorAll('nav a');
navA[0].textContent = siteContent["nav"]["nav-item-1"]
navA[1].textContent = siteContent["nav"]["nav-item-2"]
navA[2].textContent = siteContent["nav"]["nav-item-3"]
navA[3].textContent = siteContent["nav"]["nav-item-4"]
navA[4].textContent = siteContent["nav"]["nav-item-5"]
navA[5].textContent = siteContent["nav"]["nav-item-6"]

//cta
document.querySelector('.cta-text h1').textContent = siteContent["cta"]["h1"]
document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"]

//h4
const headerFour = document.querySelectorAll('h4')
headerFour[0].textContent = siteContent["main-content"]["features-h4"]
headerFour[1].textContent = siteContent["main-content"]["about-h4"]
headerFour[2].textContent = siteContent["main-content"]["services-h4"]
headerFour[3].textContent = siteContent["main-content"]["product-h4"]
headerFour[4].textContent = siteContent["main-content"]["vision-h4"]
headerFour[5].textContent = siteContent["contact"]["contact-h4"]

//main content p
const text = document.querySelectorAll('.text-content p')
text[0].textContent = siteContent["main-content"]["features-content"]
text[1].textContent = siteContent["main-content"]["about-content"]
text[2].textContent = siteContent["main-content"]["services-content"]
text[3].textContent = siteContent["main-content"]["product-content"]
text[4].textContent = siteContent["main-content"]["vision-content"]

// contact info 
const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent["contact"]["address"]
contactInfo[1].textContent = siteContent["contact"]["phone"]
contactInfo[2].textContent = siteContent["contact"]["email"]

//footer
const footerElement = document.querySelector('footer')
footerElement.append(siteContent["footer"]["copyright"])

//change the navigation text to green

const okIdea = document.createElement('a')
const badIdea = document.createElement('a')

okIdea.textContent = "Okay Idea";
badIdea.textContent = "Bad Idea"

const newNavA = document.querySelector('nav')

newNavA.appendChild(okIdea)
newNavA.prepend(badIdea)

document.querySelectorAll('nav a').forEach( link => {
  link.style.color = "green";
})

//stretch styling fest
