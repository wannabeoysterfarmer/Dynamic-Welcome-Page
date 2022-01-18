// DOM Elements:
const time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus'),
image = document.getElementById('background-image');

// Show AM or PM:
const amPmShow = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    hour = hour % 12 || 12

    // Output Time:
    // Use .innerHTML to add HTML inside the div with id="time"
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPmShow ? amPm : ''}`;
    setTimeout(showTime, 1000);
}

// Add Zeros:
function addZero(n) {
    return(parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set background and greeting:
function setBackgroundGreet() {
    let today = new Date(),
    hour = today.getHours();
    if(hour < 12) {
        // Morning
        // document.body.style.backgroundImage = "url('https://stevenchenphotographyportfolio.s3.us-east-2.amazonaws.com/Website+Photos/Monona+Lake.jpg')";
        image.innerHTML = `<img src="https://stevenchenphotographyportfolio.s3.us-east-2.amazonaws.com/Website+Photos/Monona+Lake.jpg"/>`;
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        // document.body.style.backgroundImage = "url('https://stevenchenphotographyportfolio.s3.us-east-2.amazonaws.com/Website+Photos/WAMX4178_Spring2021_Madison.jpg')";
        image.innerHTML = `<img src="https://stevenchenphotographyportfolio.s3.us-east-2.amazonaws.com/Website+Photos/WAMX4178_Spring2021_Madison.jpg"/>`;
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        // document.body.style.backgroundImage = "url('https://stevenchenphotographyportfolio.s3.us-east-2.amazonaws.com/Website+Photos/LaLaLand_Vibes_2019.jpg')";
        image.innerHTML = `<img src="https://stevenchenphotographyportfolio.s3.us-east-2.amazonaws.com/Website+Photos/Aurora.jpg"/>`;
        greeting.textContent = 'Good Evening';
        document.body.style.color="white";
    }
}

// Get Name
// Check local storage
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed:
        // Each key has a code:
        // .blur is leave.
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if(e.type === 'keypress') {
        // Make sure enter is pressed:
        // Each key has a code:
        // .blur is leave.
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}


// Update info - Need Event Listener:
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBackgroundGreet();
getName();
getFocus();