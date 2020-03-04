let list = document.getElementsByClassName('nav__container')[0];
let indicator = document.getElementsByClassName('nav__indicator')[0];

list.addEventListener('mouseover', e => {
    indicator.style.opacity = 1;
    if (e.target.tagName === "A") {
        let props = e.target.getBoundingClientRect()
        indicator.style.width = props.width + "px";
        indicator.style.left = props.left + "px";
    }
})

list.addEventListener('mouseout', e => {
    indicator.style.opacity = 0;
})