import {pageRoutes} from './routes.js';

const navbarElement = document.querySelector(".navbar");

function navButtonOnclick() {
    let icon = document.querySelector(".nav-button").children[0];
    if (icon.className == "fa-solid fa-bars") {
        icon.classList.replace("fa-bars", "fa-xmark");
        //show the elements with some animation         
            if(document.getElementById("vertical-list") == null){
                let uList = document.body.appendChild(document.createElement("ul"))
                uList.id = "vertical-list";
                uList.innerHTML = 
                `<li><a href="${pageRoutes[window.location.pathname].service}" style="--i:1;">Services</a></li>
                <li><a href="${pageRoutes[window.location.pathname].about}" style="--i:2;">About</a></li>
                <li><a href="${pageRoutes[window.location.pathname].contact}" style="--i:3;">Contact</a></li>
                <li><a href="#" style="--i:4;">Sign Up</a></li>`;
            }
            else{
                document.getElementById("vertical-list").innerHTML = 
                `<li><a href="${pageRoutes[window.location.pathname].service}" style="--i:1;">Services</a></li>
                <li><a href="${pageRoutes[window.location.pathname].about}" style="--i:2;">About</a></li>
                <li><a href="${pageRoutes[window.location.pathname].contact}" style="--i:3;">Contact</a></li>
                <li><a href="#" style="--i:4;">Sign Up</a></li>`;
                }
            }
    else {
        icon.classList.replace("fa-xmark", "fa-bars");
        //if element exists delete or hide
        
        if(document.getElementById("vertical-list") != null){
            document.getElementById("vertical-list").remove();
        }
    }
}

function changeNavbar() {
    if (navbarElement.clientWidth < 725) {
        navbarElement.children[1].remove();
        let navButton = navbarElement.appendChild(document.createElement("div"));
        navButton.classList.add("nav-button");
        let icon = navButton.appendChild(document.createElement("i"));
        icon.classList.add("fa-solid", "fa-bars");
        icon.onclick = navButtonOnclick;
    }
    else {
        navbarElement.children[1].remove();
        navbarElement.appendChild(document.createElement("ul")).innerHTML = 
        `<li><a href="${pageRoutes[window.location.pathname].service}" style="--i:1;">Services</a></li>
        <li><a href="${pageRoutes[window.location.pathname].about}" style="--i:2;">About</a></li>
        <li><a href="${pageRoutes[window.location.pathname].contact}" style="--i:3;">Contact</a></li>
        <li><a href="#" style="--i:4;">Sign Up</a></li>`;
        
        if(document.getElementById("vertical-list") != null && navbarElement.clientWidth > 725){
            document.getElementById("vertical-list").remove();
        }
    }
}


changeNavbar();
window.addEventListener("resize", changeNavbar);
