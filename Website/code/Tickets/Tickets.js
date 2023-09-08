var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
	

    const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
   navbar.classList.add("show");
   menuBtn.classList.add("hide");
   body.classList.add("disabled");
}
cancelBtn.onclick = () => {
   body.classList.remove("disabled");
   navbar.classList.remove("show");
   menuBtn.classList.remove("hide");
}
navbar.classList.remove("sticky");
navbar.classList.add("sticky");

window.onscroll = function () {
   myFunction()
};

var sticky = navbar.offsetTop;

function myFunction() {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
   } else {
      navbar.classList.remove("sticky");
   }
}