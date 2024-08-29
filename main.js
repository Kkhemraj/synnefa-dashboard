document.addEventListener('DOMContentLoaded', function() {
    const headerTitle = document.querySelector('.header-title');
function hideAll() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('form').style.display = 'none';
    document.getElementById('widget').style.display = 'none';
}

function showDiv(id) {
    hideAll();
    document.getElementById(id).style.display = 'block';
}

function removeActiveClass() {
    const listItems = document.querySelectorAll('.menu-list li');
    listItems.forEach(function(item) {
        item.classList.remove('active');
    });
}
function updateHeaderTitle(text) {
            headerTitle.textContent = text;
        }
document.getElementById('dashboard-link').addEventListener('click', function() {
    showDiv('dashboard');
    removeActiveClass();
    this.parentElement.classList.add('active');
    updateHeaderTitle('Dashboard');
    sidebar.classList.remove("active");
    body.style.overflow = "auto";
});

document.getElementById('form-link').addEventListener('click', function() {
    showDiv('form');
    removeActiveClass();
    this.parentElement.classList.add('active');
    updateHeaderTitle('Form');
    sidebar.classList.remove("active");
    body.style.overflow = "auto";
});

document.getElementById('widget-link').addEventListener('click', function() {
    showDiv('widget');
    removeActiveClass();
    this.parentElement.classList.add('active');
    updateHeaderTitle('Widgets');
    sidebar.classList.remove("active");
    body.style.overflow = "auto";
});

// Show the dashboard by default and set the active class
showDiv('dashboard');
document.getElementById('dashboard-link').parentElement.classList.add('active');


});




//open navigation js

var sidebar = document.getElementById("sidebar");
var body = document.querySelector("body");
function openMenu() {

  sidebar.classList.add("active");
  body.style.overflow = "hidden";
}
function closeMenu() {

  sidebar.classList.remove("active");
  body.style.overflow = "auto";
}

$('.btn-toggle').click(function(){
$(this).toggleClass('active')
})