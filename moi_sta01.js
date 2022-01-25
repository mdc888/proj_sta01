const inpC = document.querySelector("#c");

const validationSpan = document.querySelector("#validation");

function checkNumber() {

    let num = inpA.value;
    
    // validationSpan.innerText = num;
   validationSpan.innerText =  "parseInt: " + parseInt(num);

   if ( isNaN(Number(num)) ) {

    validationSpan.innerText = num + " is not a number";
    
} else {
    
    validationSpan.innerText = num + " is a number";
    
}


}


inpA.addEventListener("input", checkNumber);











document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
  
    modeSwitch.addEventListener('click', function () {                     document.documentElement.classList.toggle('dark');
      modeSwitch.classList.toggle('active');
    });
    
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    
    listView.addEventListener('click', function () {
      gridView.classList.remove('active');
      listView.classList.add('active');
      projectsList.classList.remove('jsGridView');
      projectsList.classList.add('jsListView');
    });
    
    gridView.addEventListener('click', function () {
      gridView.classList.add('active');
      listView.classList.remove('active');
      projectsList.classList.remove('jsListView');
      projectsList.classList.add('jsGridView');
    });
    
    document.querySelector('.messages-btn').addEventListener('click', function () {
      document.querySelector('.messages-section').classList.add('show');
    });
    
    document.querySelector('.messages-close').addEventListener('click', function() {
      document.querySelector('.messages-section').classList.remove('show');
    });
  });
