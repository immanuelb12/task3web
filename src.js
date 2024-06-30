document.addEventListener('DOMContentLoaded', function() {
    const submenuToggle = document.querySelector('.submenu > a');
    const submenuList = document.querySelector('.submenu > ul');
 
    submenuToggle.addEventListener('click', function(e) {
        e.preventDefault();
        submenuList.classList.toggle('show');
    });
 
    document.addEventListener('click', function(e) {
        if (!submenuToggle.contains(e.target)) {
            submenuList.classList.remove('show');
        }
    });
});
