//----- Slider
(function(){

var IMAGE_FOLDER = 'images/';
var PROJECTS = [
        {
            name:        'Duke Energy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            skills:      'HTML, CSS & Javascript',
            img:         IMAGE_FOLDER + 'left1s.jpg',
            github:      'https://github.com/selvinafernandes/SASS',
            link:        'https://google.com'
        }, {
            name:        'Dupont Chemicals',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            skills:      'HTML, CSS & Javascript',
            img:          IMAGE_FOLDER + 'left2s.jpg'
           
        }, {
            name:        'Scottish Power',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            skills:      'COBOL, JCL & DB2',
            img:          IMAGE_FOLDER + 'left3s.jpg'
           
        }, {
            name:        'IVY - An Intelligent gardening assistant',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            skills:      'COBOL',
            img:          IMAGE_FOLDER + 'left3s.jpg'
        }, {
            name:        'FTSF',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            skills:      'COBOL',
            img:          IMAGE_FOLDER + 'left3s.jpg'
        },{
            name:        'Competa Millman',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, \
                          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            skills:      'COBOL',
            img:          IMAGE_FOLDER + 'left3s.jpg'
        }
]; 
var currentProject = 0;
var getProjects = document.querySelectorAll('.projects__grid__list--item');
var getArrows = document.getElementsByClassName('arrow');
const projectWidth = 280;

document.getElementById('sidebar-left').addEventListener("click", moveLeft);
document.getElementById('sidebar-right').addEventListener("click", moveRight);

window.onload = function(){
    loadProjects();
}

function loadProjects() {  

    var loadProjects = document.querySelectorAll('.projects__grid__list--item');
    
    for (var i=0; i < loadProjects.length;i++){
        (function(index){
            loadProjects[i].addEventListener("click",function(){
            getModal(index);  
            });
        })(i);
    }
    addTitle();
    render(0, 0);
}

function modules(input, operator) {
    var tmp = input % operator;
    if(tmp < 0) {
        tmp += operator;
    }
    return tmp;
}

function moveLeft(){
        var oldCurrentProject = currentProject;
        currentProject = currentProject - projectWidth;
        render(oldCurrentProject, currentProject);
}

function moveRight(){
        var oldCurrentProject = currentProject;
        currentProject = currentProject + projectWidth;
        render(oldCurrentProject, currentProject);
}

function render(oldCurrentProject, currentProject) {

    var projectsWidth = getProjects.length * projectWidth;
    for (var i = 0; i < getProjects.length; i++){
            var projectOffset = i * projectWidth;
            var left = modules(projectOffset + currentProject, projectsWidth);
            var oldLeft = modules(projectOffset + oldCurrentProject, projectsWidth);
            getProjects[i].style.left = left - projectWidth + 'px';
            getProjects[i].style.transition = Math.abs(left - oldLeft) === projectWidth ? '1s' : '0s';
    }
}

// --- Popup logic

function getModal(index){

    var projectName = document.querySelector('.projects__name');
    var projectSkills = document.querySelector('.projects__tech');
    var projectImage = document.querySelector('.projects__image');
    var projectDesc = document.querySelector('.projects__desc--para');

    var toggleModal = document.getElementById('popup');
    toggleModal.classList.remove('hidden');

    projectName.innerHTML = PROJECTS[index].name;
    projectSkills.innerHTML = PROJECTS[index].skills;
    projectDesc.innerHTML = PROJECTS[index].description;
    projectImage.style.background = 'url('+PROJECTS[index].img + ')';

    var close = document.getElementById('close');
    close.addEventListener('click',function(){
    toggleModal.classList.add('hidden');
    })
}


// ----Scroll logic
    
    for (var i = 0; i < getArrows.length; i++){
        getArrows[i].addEventListener("click",function(evt){
            evt.preventDefault();
            scrollToBlock(this);
        });
    }

    function scrollToBlock(x){
        var SCROLL_SPEED = 5;
        var scrollDistance = window.innerHeight;
        var scrollPosition = 0 ;
        var i = window.scrollY ? window.scrollY : document.documentElement.scrollTop;

        var distance = i + scrollDistance;
        if (x.classList.contains('down')){
            var scrollToBottom = window.setInterval(function() {
                i = i + SCROLL_SPEED;
                if(i < distance) {
                    window.scrollTo(0,i);
                }else{
                    window.clearInterval(scrollToBottom);
                }
            },1);
        } else if(x.classList.contains('up')) {
             var scrollToTop = window.setInterval(function() {
                i = i - SCROLL_SPEED;
                if(i > scrollDistance) {
                    window.scrollTo(0,i);
                }else{
                    window.clearInterval(scrollToTop);
                }
        },1);
    }
}

function addTitle(){

    var getProjectTitle = document.querySelectorAll('.item--title');
    for(var i = 0; i < PROJECTS.length; i++){
        getProjectTitle[i].innerHTML = PROJECTS[i].name;
    }
}
})();



