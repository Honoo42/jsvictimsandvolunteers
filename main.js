var victims = prompt("How many victims have you found?","# of victims")
var victims = parseInt(victims);
while (isNaN(victims) === true || victims === 0) {
   alert("The input cannot be parsed to a number");
   var victims = prompt("How many victims have you found?","# of victims")
   }
function victim (victimsname, victimsphone, victimsaddress) {
	this.victimsname= victimsname;
	this.victimsphone= victimsphone;
	this.victimsaddress= victimsaddress;
}
var victimstoask= victims;
while (victimstoask-- ){
	this.victimsname= victimsname=prompt("Please enter their name","");
	this.victimsphone= victimsphone=prompt("Please enter their phone number");
	this.victimsaddress=victimsaddress=prompt("Please enter their street address");
	var random = new victim (victimsname,victimsphone,victimsaddress);
}
   // if (victims === 0)
   //    {
   //    alert("The number is zero. Please re-enter the number you victims you wish to help today");
   //    var victims = prompt("How many victims have you found?","# of victims")
   //    }
// var retVal = confirm("Is this number accurate?");
//    if( retVal == true ){
//       alert("Great! Now we need some basic information.");
// 	  return true;
//    }
//    else{
//       alert("Oh, thats too bad.");
// 	  return false;
//    }

// var victimstoask= victims;
// 	victimsname=[];
// 	victimsphone=[];
// 	victimsaddress=[];
// while (victimstoask-- ) {
// 		victimsname.push( name=prompt("Please enter their name",""));
// 		victimsphone.push( phone=prompt("Please enter their phone number"));
// 		victimsaddress.push( address=prompt("Please enter their street address"));
// }
// var volunteers = prompt("How many volunteers are available?","# of volunteers")
// var volunteers = parseInt(volunteers);
// while (isNaN(volunteers) === true || volunteers === 0) {
//    alert("The input cannot be parsed to a number");
//    var volunteers = prompt("How many volunteers are available?","# of volunteers")
//    }
//  var volunteerstoask= volunteers;
// 	volunteersname=[];
// 	volunteersphone=[];
// 	volunteersaddress=[];
// while (volunteerstoask-- ) {
// 		volunteersname.push( name=prompt("Please enter their name",""));
// 		volunteersphone.push( phone=prompt("Please enter their phone number"));
// 		volunteersaddress.push( address=prompt("Please enter their street address"));
// }  
// var displayvictims= victimsname.join(", ")
// var displayvolunteers= volunteersname.join(", ")
// alert(victims+" people are in need of help. We have "+volunteers+" volunteers that can help out. The victims that need help are "+displayvictims+". The volunteers that can help out are "+displayvolunteers)

// victimsinfo.sort( byName );
// document.getElementById( 'msg' ).textContent = victimsinfo.join(',');

// function byName( a, b ) {
// 	return a.localeCompare (b);
// }
// var name=prompt("Please enter their name","") 
// var phone=prompt("Please enter their phone number","")
// var address=prompt("Please enter their street address","")
// alert(name+phone+address);

