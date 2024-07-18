
// select the element where the data will be rendered
const selectEl = document.getElementById("rate-El")
// console.log(selectEl.textContent)
// fetch the data from the localstorage 
const  rates = localStorage.getItem('selectedRates')
// render the data 
selectEl.textContent = `You selected ${rates} out of 5`