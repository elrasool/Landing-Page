/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const sections = document.querySelectorAll('section');
const unOrderedList = document.querySelector('#navbar__list');
let anchor = document.createElement('a');
let listItem = document.createElement('li');
let documentFragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
// The following function is used for creating the links and the list items which will be populated in the unordered list
function buildTheNavigation() {
    for (const section of sections) {
        // sellecting the anchor links 
        anchor = document.createElement('a');
        // adding the text which will be represented in the browser based on the data attribute in each section
        anchor.innerText = section.dataset.nav
        // creating the list items 
        listItem = document.createElement('li');
        anchor.setAttribute('href', `#${section.id}`);
        // populating the list items with the mentioned links above 
        listItem.appendChild(anchor);
        documentFragment.appendChild(listItem);
        anchor.style.cssText = "margin-right:20px;text-decoration:none;color:white;";

    }
    // Appending the unordered list with the Document Fragment object which in its role has been appended with the list items 
    unOrderedList.appendChild(documentFragment);
}

unOrderedList.style.cssText = "background-color:black;padding:20px;overflow:hidden"
listItem.style.cssText = "margin-right:30px;float:left";
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
buildTheNavigation(sections);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const scrollToSection = function (event) {
    const selectedSection = anchor.href.cssText;
    selectedSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    console.log(event);
    event.preventDefault();
}
anchor.addEventListener('click', scrollToSection, false);
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 


// Scroll to section on link click
window.addEventListener('scroll', toggleActiveState);


function toggleActiveState() {

    let options = {
        root: document,
        rootMargin: '0px',
        threshold: [1.0]
    };
// Set sections as active
    let handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('your-active-class');
            } else {
                entry.target.classList.remove('your-active-class');
            }

        });
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    Array.prototype.forEach.call(sections, (el) => {
        observer.observe(el);
    });
}

