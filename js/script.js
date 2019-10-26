/*Прокрутка изображений в верхней секции страницы (под header'ом)*/ 
var buttonTopPrev = document.querySelector('.slider__arrow--prev');
var buttonTopNext = document.querySelector('.slider__arrow--next');
var topArray = document.querySelectorAll('.slider__element');
var topSlider = document.querySelectorAll('.top__relay');
var a = 0, b;
function topNext() {
	if((topArray.length - a) > 1)
	{	  			
		topArray[a].style.order = a+1;
		topSlider[a].classList.remove('relay--choosen');
		topSlider[a+1].classList.add('relay--choosen');
		a++;
	}
};
function topPrev() {
 	if(a>0)
 	{
 		b = a - 1;
  		topArray[b].style.order = 0;
  		topSlider[a].classList.remove('relay--choosen');
  		topSlider[b].classList.add('relay--choosen');
  		a--;
  	}
 };
buttonTopNext.addEventListener('click', topNext);
buttonTopPrev.addEventListener('click', topPrev);

/*Прокрутка изображений в блоке Ideas*/ 
var buttonIdeasPrev = document.querySelector('.ideas__arrow--prev');
var buttonIdeasNext = document.querySelector('.ideas__arrow--next');
var ideasArray = document.querySelectorAll('.ideas__image');
var ideasSlider = document.querySelectorAll('.ideas__relay');
var c = ideasArray.length - 1;
function ideasNext() {
	if(c===(ideasArray.length - 1)) 
	{
		ideasArray[0].classList.remove('ideas__image--left');
		ideasArray[0].classList.add('ideas__image--right');
		ideasArray[1].classList.remove('ideas__image--right');
		ideasArray[1].classList.add('ideas__image--center');
		ideasArray[c].classList.remove('ideas__image--center');
		ideasArray[c].classList.add('ideas__image--left');
		ideasSlider[c].classList.remove('relay--choosen');
  		ideasSlider[c-1].classList.add('relay--choosen');
		c--;
	} else  if(c===0)
		{
			ideasArray[c+1].classList.remove('ideas__image--left');
			ideasArray[c+1].classList.add('ideas__image--right');
			ideasArray[ideasArray.length - 1].classList.remove('ideas__image--right');
			ideasArray[ideasArray.length - 1].classList.add('ideas__image--center');
			ideasArray[c].classList.remove('ideas__image--center');
			ideasArray[c].classList.add('ideas__image--left');
			ideasSlider[c].classList.remove('relay--choosen');
  			ideasSlider[ideasArray.length - 1].classList.add('relay--choosen');
			c = ideasArray.length - 1;
		}  else 
			{
				ideasArray[c-1].classList.remove('ideas__image--right');
				ideasArray[c-1].classList.add('ideas__image--center');
				ideasArray[c+1].classList.remove('ideas__image--left');
				ideasArray[c+1].classList.add('ideas__image--right');
				ideasArray[c].classList.remove('ideas__image--center');
				ideasArray[c].classList.add('ideas__image--left');
				ideasSlider[c].classList.remove('relay--choosen');
  				ideasSlider[c-1].classList.add('relay--choosen');
				c--;
			}
};
function ideasPrev() {
	if(c===(ideasArray.length - 1)) 
	{
		ideasArray[0].classList.remove('ideas__image--left');
		ideasArray[0].classList.add('ideas__image--center');
		ideasArray[1].classList.remove('ideas__image--right');
		ideasArray[1].classList.add('ideas__image--left');
		ideasArray[c].classList.remove('ideas__image--center');
		ideasArray[c].classList.add('ideas__image--right');
		ideasSlider[c].classList.remove('relay--choosen');
  		ideasSlider[0].classList.add('relay--choosen');
		c = 0;
	} else  if(c===0)
		{
			ideasArray[c+1].classList.remove('ideas__image--left');
			ideasArray[c+1].classList.add('ideas__image--center');
			ideasArray[ideasArray.length - 1].classList.remove('ideas__image--right');
			ideasArray[ideasArray.length - 1].classList.add('ideas__image--left');
			ideasArray[c].classList.remove('ideas__image--center');
			ideasArray[c].classList.add('ideas__image--right');
			ideasSlider[c].classList.remove('relay--choosen');
  			ideasSlider[c+1].classList.add('relay--choosen');
			c++;
		}  else 
			{
				ideasArray[c-1].classList.remove('ideas__image--right');
				ideasArray[c-1].classList.add('ideas__image--left');
				ideasArray[c+1].classList.remove('ideas__image--left');
				ideasArray[c+1].classList.add('ideas__image--center');
				ideasArray[c].classList.remove('ideas__image--center');
				ideasArray[c].classList.add('ideas__image--right');
				ideasSlider[c].classList.remove('relay--choosen');
  				ideasSlider[c+1].classList.add('relay--choosen');
				c++;
			}
};
buttonIdeasNext.addEventListener('click', ideasNext);
buttonIdeasPrev.addEventListener('click', ideasPrev);

/*Выпадающее меню-"гамбургер" в разделе Portfolio*/ 
var menuButton = document.querySelector('.works__burger-menu');
var menuOpenButton = document.querySelector('.burger-menu__burger');
var menu = document.querySelector('.burger-menu__small');
var menuItems = document.querySelectorAll('.burger-menu__item');

function reset(e) {
	e.preventDefault();
	menu.classList.add('hidden');
	menuOpenButton.classList.remove('burger-menu__burger--close');
}

function openMenu() {
	menu.classList.remove('hidden');
	menuOpenButton.classList.add('burger-menu__burger--close');
	for(var i=0; i<menuItems.length; i++) {
		menuItems[i].addEventListener('click', reset);
	}
};

menuButton.addEventListener('click', openMenu);

/*-------------------------------------------------*/

/*Прокрутка изображений в блоке категорий товаров (тип коллекции)*/ 
var buttonBlogPrev = document.querySelector('.blog__arrow--prev');
var buttonBlogNext = document.querySelector('.blog__arrow--next');
var blogArray = document.querySelectorAll('.blog__element');
var d = 0, e;
function blogNext(e) {
	e.preventDefault();
 	var blogOpacity = getComputedStyle(blogArray[d]);
	if(blogOpacity.opacity === '1')
	{ 	
		if((blogArray.length - d) > 3)
	  		{	  			
			  	blogArray[d].style.order = d+1;
	  			d++;
	  		}
	} else if(blogOpacity.opacity === '0.99')
			{ 	
				if((blogArray.length - d) > 2)
			  		{	  			
					  	blogArray[d].style.order = d+1;
			  			d++;
			  		}
			}
		else { 	
				if((blogArray.length - d) > 1)
			  		{	  			
					  	blogArray[d].style.order = d+1;
			  			d++;
			  		}
			}
};
function blogPrev(e) {
	e.preventDefault();
 	if(d>0)
 	{
 		e = d - 1;
  		blogArray[e].style.order = 0;
  		d--;
  	}
 };
buttonBlogNext.addEventListener('click', blogNext);
buttonBlogPrev.addEventListener('click', blogPrev);