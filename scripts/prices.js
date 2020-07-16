let price = 0;
let bodyprice = 0;
let body = 0;
let style = 0;

function youwant_body(pBody) {
	body = pBody;
	
	if (body > 0) {
		if (body == 1) {
			document.getElementById('example').src="images/prices/amber_full.png";
			document.getElementById('want_body').innerHTML="Full Body";
			bodyprice = 15;
		}
		
		if (body == 2) {
			document.getElementById('example').src="images/prices/amber_half.png";
			document.getElementById('want_body').innerHTML="Half Body";
			bodyprice = 10;
		}
		
		if (body == 3) {
			document.getElementById('example').src="images/prices/amber_head.png";
			document.getElementById('want_body').innerHTML="Headshot";
			bodyprice = 5;
		}
	}
	document.getElementById("fullprice").innerHTML = "~"+ bodyprice + " €";
}

function youwant_style(pStyle) {
	style = pStyle;
	
	if (style > 0) {
		if (body == 1) {
			if (style == 1) {
				document.getElementById('example').src="images/prices/amber_full.png";
				document.getElementById('want_style').innerHTML="Painted";
				price = bodyprice + 10;
			}
		
			if (style == 2) {
				document.getElementById('example').src="images/prices/amber_full_flat.png";
				document.getElementById('want_style').innerHTML="Cell Shaded";
				price = bodyprice + 5;
			}
		
			if (style == 3) {
				document.getElementById('example').src="images/prices/amber_full_colr.png";
				document.getElementById('want_style').innerHTML="Colored";
				price = bodyprice + 0;
			}
		}
		
		if (body == 2) {
			if (style == 1) {
				document.getElementById('example').src="images/prices/amber_half.png";
				document.getElementById('want_style').innerHTML="Painted";
				price = bodyprice + 10;
			}
		
			if (style == 2) {
				document.getElementById('example').src="images/prices/amber_half.png";
				document.getElementById('want_style').innerHTML="Cell Shaded";
				price = bodyprice + 5;
			}
		
			if (style == 3) {
				document.getElementById('example').src="images/prices/amber_half.png";
				document.getElementById('want_style').innerHTML="Colored";
				price = bodyprice + 0;
			}
		}
		
		if (body == 3) {
			if (style == 1) {
				document.getElementById('example').src="images/prices/amber_head.png";
				document.getElementById('want_style').innerHTML="Painted";
				price = bodyprice + 10;
			}
		
			if (style == 2) {
				document.getElementById('example').src="images/prices/amber_head.png";
				document.getElementById('want_style').innerHTML="Cell Shaded";
				price = bodyprice + 5;
			}
		
			if (style == 3) {
				document.getElementById('example').src="images/prices/amber_head.png";
				document.getElementById('want_style').innerHTML="Colored";
				price = bodyprice + 0;
			}
		}
	}
	
	document.getElementById("fullprice").innerHTML = "~"+ price + " €";
}

function confirmBody() {
	document.getElementById('style').style.visibility="visible";
	document.getElementById('body').style.visibility="hidden";
	document.getElementById('confirm_body').style.visibility="hidden";
}