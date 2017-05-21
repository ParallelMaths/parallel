// =============================================================================
// Parallel Lines


// -----------------------------------------------------------------------------
// Helper Functions

const STORAGE_KEY = (window.location.pathname.match(/[\w\-]+/) || [''])[0];

function getStorage(key, path=STORAGE_KEY) {
  let storage = JSON.parse(window.localStorage.getItem(path) || '{}');
  return storage[key] || '';
}

function setStorage(key, value, path=STORAGE_KEY) {
  let storage = JSON.parse(window.localStorage.getItem(path) || '{}');
  storage[key] = value;
  window.localStorage.setItem(path, JSON.stringify(storage));
}

function $(selector) {
  return window.document.querySelector(selector);
}

function $$(selector) {
  return Array.from(window.document.querySelectorAll(selector));
}

function bindEvent(element, events, callback) {
  for (let e of events.split(' ')) element.addEventListener(e, callback);
}

function now() {
  let x = new Date();
  return x.toLocaleDateString() + ' ' + x.toLocaleTimeString();
}


// -----------------------------------------------------------------------------
// Form fields

$$('.problem input[data-id]').forEach(input => {
  let id = input.dataset.id;

  let cachedValue = getStorage(id);
  if (cachedValue) input.value = cachedValue.value;

  bindEvent(input, 'propertychange keyup input paste', function() {
    setStorage(id, {value: input.value, time: now()});
  });
});



// -----------------------------------------------------------------------------
// Hints

$$('.hint').forEach(hint => {
  let id = hint.dataset.id;

  if (getStorage(id)) {
    hint.style.height = 'auto';
  } else {
    hint.addEventListener('click', function() {
      setStorage(id, {time: now()});
      hint.style.height = hint.children[0].offsetHeight + 'px';
    });
  }
});


// -----------------------------------------------------------------------------
// Submit

let URL = 'https://docs.google.com/a/mathigon.org/forms/d/e/1FAIpQLSdqYc7ulmgSofjULkPSx5xtF5fucfqxxCpTEMxbWWyLaLCrRg/formResponse';

let nameInput = $('#submit input');
let submit = $('#submit button');

let name = getStorage('name', 'shared');
if (name) nameInput.value = name || '';
bindEvent(nameInput, 'propertychange keyup input paste', function() {
  setStorage('name', nameInput.value, 'shared');
});

submit.addEventListener('click', function() {
  if (!nameInput.value) {
    alert('Please enter your username before submitting.');
    return;
  }

  submit.textContent = 'Submitting…';
  submit.style.pointerEvents = 'none';

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState <= 3) return;
    let status = xhr.status;
    if ((status >= 200 && status < 300) || status === 304) {
      submit.textContent = 'Done!';
    } else {
      alert('Something went wrong… Please try again!');
      submit.textContent = 'Submit your Answers';
      submit.style.pointerEvents = 'auto';
    }
  };

  xhr.open('POST', URL, true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  let data = encodeURIComponent(window.localStorage.getItem(STORAGE_KEY));
  let name = encodeURIComponent(nameInput.value);
  xhr.send(`entry.1217528920=${name}&entry.1604250288=${data}`);
});
