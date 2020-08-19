let price = 0;
let bodyprice = 0;
let body = 0;
let style = 0;

function reload() {
	price = 0;
	bodyprice = 0;
	body = 0;
	style = 0;
	document.getElementById('example').src="images/prices/amber_empty.png";
	document.getElementById('want_body').innerHTML="";
	document.getElementById('characterName').innerHTML="";
	document.getElementById('want_style').innerHTML="";
	document.getElementById("fullprice").innerHTML = "~0 €";
	
	document.getElementById('style').style.visibility="hidden";
	document.getElementById('body').style.visibility="visible";
	document.getElementById('confirm_body').style.visibility="visible";
}

function youwant_body(pBody) {
	body = pBody;
	
	if (body > 0) {
		if (body == 1) {
			document.getElementById('example').src="images/prices/amber_full.png";
			document.getElementById('want_body').innerHTML="Full Body";
			document.getElementById('characterName').innerHTML="Pixel Brush";
			bodyprice = 15;
		}
		
		if (body == 2) {
			document.getElementById('example').src="images/prices/amber_half.png";
			document.getElementById('want_body').innerHTML="Half Body";
			document.getElementById('characterName').innerHTML="Pixel Brush";
			bodyprice = 10;
		}
		
		if (body == 3) {
			document.getElementById('example').src="images/prices/amber_head.png";
			document.getElementById('want_body').innerHTML="Headshot";
			document.getElementById('characterName').innerHTML="Pixel Brush";
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
				document.getElementById('example').src="images/prices/temp/braixen_lad_glasses.png";
				document.getElementById('want_style').innerHTML="Painted";
				document.getElementById('characterName').innerHTML="Pixel Brush/Nintendo";
				price = bodyprice + 10;
			}
		
			if (style == 2) {
				document.getElementById('example').src="images/prices/temp/desert boye.png";
				document.getElementById('want_style').innerHTML="Cell Shaded";
				document.getElementById('characterName').innerHTML="Sarcin (@Sarcin1)";
				price = bodyprice + 5;
			}
		
			if (style == 3) {
				document.getElementById('example').src="images/prices/amber_full_colr.png";
				document.getElementById('want_style').innerHTML="Colored";
				document.getElementById('characterName').innerHTML="Pixel Brush";
				price = bodyprice + 0;
			}
		}
		
		if (body == 2) {
			if (style == 1) {
				document.getElementById('example').src="images/prices/temp/quentin.png";
				document.getElementById('want_style').innerHTML="Painted";
				document.getElementById('characterName').innerHTML="Quentin the Mimikyu (@QuentinMimikyu)";
				price = bodyprice + 10;
			}
		
			if (style == 2) {
				document.getElementById('example').src="images/prices/temp/mediex2012_bg.png";
				document.getElementById('want_style').innerHTML="Cell Shaded";
				document.getElementById('characterName').innerHTML="MediExcalibur2012 (@MediEx2012)";
				price = bodyprice + 5;
			}
		
			if (style == 3) {
				document.getElementById('example').src="images/prices/temp/smile_neutral.png";
				document.getElementById('want_style').innerHTML="Colored";
				document.getElementById('characterName').innerHTML="Tyler the Cat/Indeedee (@DatGamerCatto/@DatEmotionBo)";
				price = bodyprice + 0;
			}
		}
		
		if (body == 3) {
			if (style == 1) {
				document.getElementById('example').src="images/prices/temp/pineapple.png";
				document.getElementById('want_style').innerHTML="Painted";
				document.getElementById('characterName').innerHTML="Sleepingisbadatart (~Sleepingisbadatart)";
				price = bodyprice + 10;
			}
		
			if (style == 2) {
				document.getElementById('example').src="images/prices/temp/jasper.png";
				document.getElementById('want_style').innerHTML="Cell Shaded";
				document.getElementById('characterName').innerHTML="Flambè (@Starcario15)";
				price = bodyprice + 5;
			}
		
			if (style == 3) {
				document.getElementById('example').src="images/prices/temp/lexx_headshot_unsigned.png";
				document.getElementById('want_style').innerHTML="Colored";
				document.getElementById('characterName').innerHTML="Lokoman82delta (@lokoman82delta)";
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