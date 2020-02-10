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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Nav
document.querySelectorAll('a').forEach((link, i) => link.textContent = siteContent['nav'][`nav-item-${i + 1}`]);

// CTA
// H1
document.querySelector('.cta-text h1').innerHTML = siteContent.cta.h1.split(' ').join('<br>');

// Button
document.querySelector('.cta-text button').textContent = siteContent.cta.button;

// img
document.getElementById('cta-img').src = siteContent.cta['img-src'];

// Main content
// text content
const textContent = document.getElementsByClassName('text-content');
// Slow but elegant way
const mainContentFields = ['features', 'about', 'services', 'product', 'vision'];
for (let i = 0; i < textContent.length; i++) {
  textContent[i].querySelector('h4').textContent = siteContent['main-content'][`${mainContentFields[i]}-h4`];
  textContent[i].querySelector('p').textContent = siteContent['main-content'][`${mainContentFields[i]}-content`];
}

// Much faster hard coded method
// textContent[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
// textContent[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
// textContent[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
// textContent[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
// textContent[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
// textContent[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
// textContent[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
// textContent[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
// textContent[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
// textContent[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];

// Middle img
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src'];

// Contact
const contact = document.getElementsByClassName('contact')[0];
contact.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];

const contactPs = contact.getElementsByTagName('p');
contactPs[0].innerHTML = siteContent['contact']['address'].split(' So').join('<br>So');
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

// Footer
document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// New Content
// Nav color
const linkElements = document.getElementsByTagName('a');
for (let i = 0; i < linkElements.length; i++) linkElements[i].style.color = 'green';

// New nav links
const nav = document.getElementsByTagName('nav')[0];

const newEndA = document.createElement('a');
newEndA.textContent = 'Sign Up';
nav.appendChild(newEndA);

const newBeginningA = document.createElement('a');
newBeginningA.textContent = 'Awards';
nav.prepend(newBeginningA);

// Stretch style update
document.querySelector('.cta').style.justifyContent = 'space-evenly';