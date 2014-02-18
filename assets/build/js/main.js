function Class() {
	var self = this;

	this.classListSupport = "classList" in document.documentElement;

	console.log(this.classListSupport);

	this.add = function(element, className) {
		if(this.classListSupport === true) {
			element.classList.add(className);
		} else {
			element.className += " " + className;
		}
	};

	var removeClass = function(element, className) {
		var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
		element.className = element.className.replace(reg, " ").replace(/(^\s*)|(\s*$)/g,"");
	};

	this.removeC = function(element, className) {
		console.log(element, className);
		if(this.classListSupport === true) {
			element.classList.remove(className);
		} else {
			removeClass(element, className);
		}
	};

	this.removeC(document.querySelectorAll('.list--basic'), 'list--basic');

	var hasClass = function(element, className) {
		return element.className && new RegExp("(\\s|^)" + className + "(\\s|$)").test(element.className);
	};

	this.has = function(element) {
		if(this.classListSupport === true) {
			element.classList.contains(className);
		} else {
			hasClass(element, className);
		}
	};

	this.toggle = function(element) {
		console.log('sdfgs');
	};
}

function Util() {
	var self = this;
}
var g = g || {};
$(function() {

	/* -----------------------
	-- Section of Code -- */

	// For all event listeners, write them in this format
	// Using jQuery's on() function, it means it will apply to all elements,
	// even ones created dynamically. It's also the jQuery standard now,
	// replacing .click(), .submit(), etc.
	$(document).on('click', '.btn', function(e) {
		// If canFire is set to true.
		if(canFire) {
			// Run the doStuff function
			doStuff();
		}
		// Prevent the default browser event from firing
		e.preventDefault();
	});
	g.c = new Class();
});