console.log('Hello! I\'m Mailbox 😊.');

function getScreenName() {
    return window.getComputedStyle(document.getElementsByClassName('page')[0], ':after').content.replace(/"/g,'');
}

svg4everybody(); // Run it now or whenever you are ready
