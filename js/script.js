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





