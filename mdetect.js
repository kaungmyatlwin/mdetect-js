function isUnicode() {
	var ka = document.createElement("div");
	ka.setAttribute("style", "float:left;");
	ka.innerHTML = "က";
	var patsint = document.createElement("div");
	patsint.setAttribute("style", "float:left;");
	patsint.innerHTML = "က္က";

	document.body.appendChild(ka);
	document.body.appendChild(patsint);
	kaWidth = ka.offsetWidth;
	patsintWidth = patsint.offsetWidth;
	document.body.removeChild(ka);
	document.body.removeChild(patsint);

	return (kaWidth == patsintWidth);
}

function loadFont(fontType) {
	// TODO: detect unicode or zawgyi and load fonts respectively
	var mmFonts = {
		zawgyi: {
			fontFamily: "Zawgyi-One",
			fontSource: "local('Zawgyi-One'), url('fonts/zawgyi.woff') format('woff'), url('fonts/zawgyi.ttf') format('ttf')"
		},
		unicode: {
			fontFamily: "Myanmar3",
			fontSource: "local('Myanmar3'), url('fonts/myanmar3.woff') format('woff'), url('fonts/myanmar3.ttf') format('ttf')"
		}
	};

	var head = document.getElementsByTagName("head")[0];
	var css = document.createElement("style");

	if (fontType == 'unicode') {
		css.appendChild(document.createTextNode('@font-face { font-family: ' + mmFonts.zawgyi.fontFamily + '; src: ' + mmFonts.zawgyi.fontSource + '; }'));
		css.appendChild(document.createTextNode('* { font-family: Myanmar3 }'));
		head.appendChild(css);
	} else if(fontType == 'zawgyi') {
		css.appendChild(document.createTextNode('@font-face { font-family: ' + mmFonts.unicode.fontFamily + '; src: ' + mmFonts.unicode.fontSource + '; }'));
		css.appendChild(document.createTextNode('* { font-family: Zawgyi-One }'));
		head.appendChild(css);
	}

}