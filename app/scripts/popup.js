console.log(``)
document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM fully loaded and parsed");

   	var frame = document.createElement('iframe');

   	frame.setAttribute('width', '100%');
   	frame.setAttribute('height', '100%');
   	frame.setAttribute('frameborder', '0');
   	frame.setAttribute('id', 'rtmframe');

   	const container = document.getElementById('mortgageCalculator')
   	frame.setAttribute('src', 'https://www.guaranteedrate.com/iframe-demo');

   	container.appendChild(frame);
 });
