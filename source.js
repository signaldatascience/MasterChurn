function showStart() {
	var html = '<h1>Good credit? Affine can help you earn cash or a free vacation.</h1><form><h2>What are you targeting?</h2>';
	var onclick = ['showGo()', 'showGo()', 'hideGo(); showSignup(0)', 'hideGo(); showMore()'];
	var value = ['Points', 'Miles', 'Cash', 'More...'];
	var color = ['darkred', 'mediumvioletred', 'darkgreen', 'gold'];
	for (var i = 0; i < onclick.length; i++) html += '<input type="button" class="button-top" onclick="' + onclick[i] + '" value="' + value[i] + '" style="background-color:' + color[i] + '">';
	document.getElementById('start').innerHTML = html + '<div id="more"></div><div id="go"></div></form>';
}

function showGo() {
	document.getElementById('go').innerHTML = '</div><form><h2>Where would you like to go?</h2><input type="text" class="input-text" style="width:500px"><input type="button" class="input" onclick="showSignup(0)" value="Continue"></form>';
}

function hideGo() {
	document.getElementById('go').innerHTML = '';
}

function showMore() {
	var reward = ['Companion Pass', 'Hotel or Airline Status', 'First Class', 'Business Class', 'Economy Seating'];
	var color = ['midnightblue', 'orangered', 'black', 'maroon', 'indigo'];
	var html = '';
	for (var i = 0; i < reward.length; i++) html += '<input type="button" class="button-bottom" onclick="showGo()" value="' + reward[i] + '" style="background-color:' + color[i] + '">';
	document.getElementById('more').innerHTML = html;
}

function showSignup(page) {
	document.getElementById('start').innerHTML = '';
	var html = '<h3>';
	if (page == 0) html += 'Sign up to start earning money.';
	else html += 'Finish filling out your profile.';
	html += '</h3><form>';
	var type = [['text', 'text', 'text', 'email', 'date'], ['text', 'text', 'text', 'select', 'number', 'password', 'number', 'tel', 'number', 'select', 'number']];
	var name = [['firstname', 'mi', 'lastname', 'email', 'dob'], ['address', 'apt', 'city', 'state', 'zip', 'ssn', 'income', 'phone', 'housing', 'source', 'nontaxable']];
	var width = [[399, 170, 421, 370, 370], [724, 271, 451, 226, 313, 330, 330, 330, 330, 330, 330]];
	var placeholder = [['First Name', 'MI', 'Last Name', 'Email Address', 'Date of Birth'], ['Mailing Address', 'Apt', 'City', 'State', 'ZIP Code', 'Social Security Number', 'Total Gross Annual Income', 'Primary Phone', 'Monthly Housing Payment', 'Income Source', 'Non-Taxable Income']];
	var linebreak = [[false, false, true, false, false, true], [false, true, false, false, true, false, false, true, false, false, true]];
	for (var i = 0; i < type[page].length; i++) {
		html += '<input type="' + type[page][i] + '" name="' + name[page][i] + '" class="input-text" style="width: ' + width[page][i].toString() + 'px" placeholder="' + placeholder[page][i] + '">'
		if (linebreak[page][i] == true) html += '<br>';
	}
	if (page == 0) html += '<input type="button" class="input" value="Continue" onclick="showSignup(1)"></form>';
	else html += '<br><input type="checkbox" name="consent">I give Affine consent to use my information to apply for any credit card on <a href="">this list</a> on my behalf. I understand that I will be signed up for at most one (1) of these credit cards.<br><input type="submit" class="input"></form>';
	document.getElementById('signup').innerHTML = html;
}
