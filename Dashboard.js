const menuIconEl = $('.menu-icon')
const sideNavEl = $('.sidenav')
const sidenavCloseEl = $('.sidenav_close-icon')

function toggleClassName(el, className){
    
    if(el.hasClass(className)){
        el.removeClass(className);
    } else{
        el.addClass(className)
    }
    
}

menuIconEl.on('click', function(){
    toggleClassName(sideNavEl, 'active');
    
});

sidenavCloseEl.on('click', function(){
    toggleClassName(sideNavEl, 'active');
    
});