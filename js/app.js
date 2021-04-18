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
const unOrderedList = document.getElementById('navbar__list');
const fragment = document.createDocumentFragment();
/**
 * End Global Variables*/

/* Within the following loop we will create the list items and the links dynamically and populate each list item with the corresponding link.
and assigning the list items to the fragment variable which is a healthy way for increasing the performance*/

for (const section of sections) {
    // creating the link
    const link = document.createElement('a');
    // getting each link's name dynamically
    let textContented = section.dataset.nav;

    let textNode = document.createTextNode(textContented);
    // creating the list item
    const listItem = document.createElement('li');
    // setting the link's name with the textNode variable
    link.appendChild(textNode);
    // styling the link 
    link.style.cssText = "margin-right:20px;color:white;text-decoration:none;"
    // styling the unordered list
    unOrderedList.style.cssText = "background-color:black;padding:20px;overflow:hidden";
    // populating 
    listItem.appendChild(link);
    link.addEventListener('click', () => {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
    fragment.appendChild(listItem);
} 
// ---------We can use another way for looping by using forEach method like the below.----------

// sections.forEach((section) => {
//     const link = document.createElement('a');
//     let textContented = section.dataset.nav;
//     let textNode = document.createTextNode(textContented);
//     const listItem = document.createElement('li');
//     link.appendChild(textNode);
//     link.style.cssText = "margin-right:20px;color:white;text-decoration:none;"
//     unOrderedList.style.cssText = "background-color:black;padding:20px;overflow:hidden";
//     listItem.appendChild(link);
//     link.addEventListener('click', () => {
//         section.scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
//     fragment.appendChild(listItem);
// })

unOrderedList.appendChild(fragment);

 /* Start Helper Functions
 * 
 */

window.addEventListener('scroll', toggleActiveState);

// Adding the listener function 
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

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active