// creating the date of birth lists
var months = 12
var days = 31
var today = new Date()
var year = today.getFullYear() +1 
maxYears = 70

	//Creating the month list
	for (var i = 1; i <= months; i++) {
		var monthList = document.getElementById('month')
		// creating the option element
		var option = document.createElement('option')
		// adding the value attributr
		option.setAttribute('value', i)

		// appending the month
		option.innerHTML = i
		//appending the options to thee list
		monthList.appendChild(option)

	} 


	//Creating the dayes list
	for (var i = 1; i <= days; i++) {

		// getting the id of the drop-list
		var dayList = document.getElementById('day')
		// creating the option element
		var option = document.createElement('option') 

		// adding the value attributr
		option.setAttribute('value', i)
		// appending the day
		option.innerHTML = i
		//appending the options to thee list
		dayList.appendChild(option)
	}


	//Creating the Years list
	for (var i = 0; i < maxYears; i++) {
		year--
		

		var yearList = document.getElementById('year')
		// creating the option element
		var option = document.createElement('option') 

		// adding the value attributr
		option.setAttribute('value', year)
		// appending the year
		option.innerHTML = year
		//appending the options to thee list
		yearList.appendChild(option)
		
	}


 

function rigisterProfile() {


	//Error output 
	var errorOutput = document.getElementById('error')
	//Error messages and RegEx
	var errorMesGlobal = 'Please, fill out all the filds.'
	var errorMail = 'Make sure your email address is correct.'
	var errorPhone = 'Please enter vaild phone number of 10 digits.'
	var regExMail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	var regExPhone = /^[0-9]{10}/


	// an if statment to insure all the filds are entered
	if (!form.firstName.value || !form.lastName.value || !form.gender.value || !form.email.value || !form.phone.value || !form.bio.value ) {
		
		errorOutput.innerHTML = errorMesGlobal
		return
	}
	//check if the email is vaild 
	if(!regExMail.test(form.email.value)) {
		errorOutput.innerHTML = errorMail
		return
	}
	//check if the email is vaild
	if (!regExPhone.test(form.phone.value)) {
		errorOutput.innerHTML = errorPhone
		return
	} 
	//set the src attribute according to the gender
	if (form.gender.value == 'male') {
		imageSrc = 'img/avatar.png'
	} else {
		imageSrc = 'img/avatar-f.png'
	}
	//___________________________________________________________

// creating an object 
 var userprofile = {
 	firstName: form.firstName.value + ' ' + form.lastName.value,
 	lastName: form.lastName.value,
 	gender: form.gender.value,
 	dob: form.month.value + '/' + form.day.value + '/' + form.year.value,
 	email: form.email.value,
 	phone: form.phone.value,
 	bio: form.bio.value
 }



 	var output = document.getElementById('output')

 	//creating elements
 	var image = document.createElement('img')
 	var rigisteredName = document.createElement('h3')
 	var rigisteredGender = document.createElement('h3')
 	var rigisteredDob = document.createElement('h3')
 	var rigisteredEmail = document.createElement('h3')
 	var rigisteredPhone = document.createElement('h3')
 	var rigisteredBio = document.createElement('p')

 	//adding source for the image
 	image.setAttribute('src', imageSrc)
 	// creating spans
 	var nameSpan = '<span>Username: </span>'
 	var genderSpan = '<span>Gender: </span>'
 	var dobSpan = '<span>Date of Birth: </span>'
 	var emailSpan = '<span>E-mail: </span>'
 	var phoneSpan = '<span>Phone: </span>'
 	var bioSpan = '<span>Bio: </span>'

 	//inner.html
 	rigisteredName.innerHTML = nameSpan + userprofile.firstName
 	rigisteredGender.innerHTML = genderSpan + userprofile.gender
 	rigisteredDob.innerHTML = dobSpan + userprofile.dob
 	rigisteredEmail.innerHTML = emailSpan + userprofile.email
 	rigisteredPhone.innerHTML = phoneSpan + userprofile.phone.replace(/[^\d]+/g, '')
     .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

 	rigisteredBio.innerHTML = bioSpan +userprofile.bio

 	//appending the childs
 	output.appendChild(image)
 	output.appendChild(rigisteredName)
 	output.appendChild(rigisteredGender)
 	output.appendChild(rigisteredDob)
 	output.appendChild(rigisteredEmail)
 	output.appendChild(rigisteredPhone)
 	output.appendChild(rigisteredBio)

 	//hidding the form
 	document.getElementById("form").style.display = "none";


}

document.getElementById('rigister').addEventListener('click', rigisterProfile, false)

