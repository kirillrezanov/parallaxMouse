class ParallaxMouse {
	constructor(elems, elem) {
		this.elems = elems;
		this.elem = elem;
		this.parallax(this.elems, this.elem);
	}

	parallax(elems, elem) {
		if(elem.toString() != "[object NodeList]") {
			elem.onmousemove = function(e) {
				let w = document.documentElement.clientWidth,
				h = document.documentElement.clientHeight, 
				offsetX = 0.5 - e.pageX / w,
				offsetY = 0.5 - e.pageY / h;

				if(elems.toString() === "[object NodeList]") {
					for(let i = 0; i < elems.length; i++) {
						let data = elems[i].getAttribute("data-offset");
						data = parseInt(data);
						let trans = "translate3d("+Math.round(offsetX*data)+"px,"+Math.round(offsetY*data)+"px, 0)";
						elems[i].style.transform = trans;
					}
				} else {
					let data = elems.getAttribute("data-offset");
					data = parseInt(data);
					let trans = "translate3d("+Math.round(offsetX*data)+"px,"+Math.round(offsetY*data)+"px, 0)";
					elems.style.transform = trans;
				}
			};
		} else {
			for(let i = 0; i < elem.length; i++) {
				elem[i].addEventListener("mousemove", function(e) {
					let w = document.documentElement.clientWidth,
					h = document.documentElement.clientHeight, 
					offsetX = 0.5 - e.pageX / w,
					offsetY = 0.5 - e.pageY / h;

					if(elems.toString() === "[object NodeList]") {
						for(let i = 0; i < elems.length; i++) {
							let data = elems[i].getAttribute("data-offset");
							data = parseInt(data);
							let trans = "translate3d("+Math.round(offsetX*data)+"px,"+Math.round(offsetY*data)+"px, 0)";
							elems[i].style.transform = trans;
						}
					} else {
						let data = elems.getAttribute("data-offset");
						data = parseInt(data);
						let trans = "translate3d("+Math.round(offsetX*data)+"px,"+Math.round(offsetY*data)+"px, 0)";
						elems.style.transform = trans;
					}
				});
			}	
		}
	}
}
