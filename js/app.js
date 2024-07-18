


// fetch the class 
// When clicked 
// 1.remove the current class name
// 2.add the active class 
// 3.store its value when submit button 

let rates = []

const rbtab = document.querySelectorAll('.rb-tab');

for(let i=0; i<rbtab.length; i++){
    rbtab[i].addEventListener('click', function(){
    for(let j=0; j<rbtab.length; j++){
        rbtab[j].classList.remove("rb-tab-active");
    }
    this.classList.add("rb-tab-active");
});   
}
document.querySelector(".button.trigger").addEventListener('click', function(){
    // reset the array to null
    rates= [];
    // select the active tab
    let activeTab = document.querySelector('.rb-tab.rb-tab-active');
    // fetch the data value from the active tab and parse it because its a string type
    let rbValue = parseInt(activeTab.getAttribute('data-value'));
    // push it to the array
    rates.push(rbValue);

    // console.log (`You selected ${rates} out of 5`);
    // store the data in the localStorage
    localStorage.setItem('selectedRates', rates);
    // navigate to the selected rate display screen
    window.location.href ='thanks.html' ;
})



