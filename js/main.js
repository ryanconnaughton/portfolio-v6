// HELPERS
function bindToNode(node, name, fn) {
  node[name] = fn.bind(node);
}

// DATA
function getEmail() {
  const prefix = 'hello';
  const domain = 'ryanconnaughton';
  const suffix = '.com';

  return prefix + '@' + domain + suffix;
}

// DOM
const elEmail = document.getElementById('cta-email');
elEmail.addEventListener('click', revealEmail);

// CTRLERS
function revealEmail() {
  const emailStr = getEmail();

  const elNew = document.createElement('h4');
  elNew.className = '--primary';
  elNew.innerHTML = emailStr;

  // TODO: add copy/mail to buttons
  // const elCopyBtn = document.createElement('button');
  // const elMailToBtn = document.createElement('button');

  elEmail.replaceChild(elNew, elEmail.childNodes[1]);
}
