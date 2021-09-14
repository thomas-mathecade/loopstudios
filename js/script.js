// Initialization function
function ini() {
    if ($(window).width() < 768) {
        document.getElementById('navigationBar').style.right = "-100%";
        document.getElementById('openMenu').addEventListener('click', openMenu);
        document.getElementById('closeMenu').addEventListener('click', openMenu);
    }
}

// Add links in Navabar (same une header and footer)"
function navbarContant() {
    const navbarArray = ['about', 'careers', 'events', 'products', 'support']

    for (i=0 ; i<navbarArray.length ; i++) {
        var link = `<a class="navbarLink" href="${navbarArray[i]}">${navbarArray[i]} <div class="linkLine"></div></a>`;

        var navbarLinkHeader = document.createElement("LI");
        navbarLinkHeader.innerHTML = link;
        document.getElementById("navbarListHeader").appendChild(navbarLinkHeader);

        var navbarLinkFooter = document.createElement("LI");
        navbarLinkFooter.classList.add(`footerLink-${i}`);
        navbarLinkFooter.innerHTML = link;
        document.getElementById("navbarListFooter").appendChild(navbarLinkFooter);
    }
}

// Add image and is title in div "ourCreation"
function creationContant() {
    const creationArray = [
        ['image-deep-earth', 'Deep<br>earth'],
        ['image-night-arcade', 'Night<br>arcade'],
        ['image-soccer-team', 'Soccer<br>team VR'],
        ['image-grid', 'The<br>grid'],
        ['image-from-above', 'From up<br>above VR'],
        ['image-pocket-borealis', 'Pocket<br>borealis'],
        ['image-curiosity', 'The<br>curiosity'],
        ['image-fisheye', 'Make it<br>fisheye']
    ]

    var imagePath;
    if ($(window).width() < 375) {
        imagePath = "images/mobile"
    } else {
        imagePath = "images"
    }

    for (i=0 ; i<creationArray.length ; i++) {
        var creationBox = document.createElement("DIV");
        creationBox.classList.add("creationBox");
        creationBox.innerHTML =         
        `<a class="creationLink creation-${i}" href="#">
            <h3 class="creationSubTitle">${creationArray[i][1]}</h3>
            <div class="creationImg" style="background-image: url('${imagePath}/${creationArray[i][0]}.jpg');"></div>
        </a>`;
        document.getElementById("ourCreation").appendChild(creationBox);
    }
}

// Manages the menu position by pressing the buttons
function openMenu() {
    var menu = document.getElementById('navigationBar');

    if (menu.style.right === "-100%") {
        menu.style.right = "0%";
      } else {
        menu.style.right = "-100%";
      }
}