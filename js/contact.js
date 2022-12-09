const elEmail = document.getElementById('cta-email');

// DATA
function getEmail() {
  const prefix = 'hello';
  const domain = 'ryanconnaughton';
  const suffix = '.com';

  return prefix + '@' + domain + suffix;
}

// CTRLERS
function revealEmail() {
  const emailStr = getEmail();

  const elNew = document.createElement('h4');
  elNew.className = '--primary';
  elNew.innerHTML = emailStr;

  // TODO: add copy/mailto buttons
  // const elCopyBtn = document.createElement('button');
  // const elMailToBtn = document.createElement('button');

  // TODO: register GA listener for each CTA click

  elEmail.replaceChild(elNew, elEmail.childNodes[1]);
}

// DOM
function init() {
  elEmail.addEventListener('click', revealEmail);
}

export default init;