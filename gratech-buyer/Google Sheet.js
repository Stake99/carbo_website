const scriptURL = 'https://script.google.com/macros/s/AKfycbxlziFi_z9un5mw8vFjUWt9fXABCcvRcoGwEb4fwE2mPD0OEtnLZznEJVr9T0Gi_eko2w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})