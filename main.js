var victims = prompt("How many victims have you found?","# of victims")
var victims = parseInt(victims);
while (isNaN(victims) === true || victims === 0) {
   alert("The input cannot be parsed to a number");
   var victims = prompt("How many victims have you found?","# of victims")
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

var victimstoask= victims;
	victimsname=[];
	victimsphone=[];
	victimsaddress=[];
while (victimstoask-- ) {
		victimsname.push( name=prompt("Please enter their name",""));
		victimsphone.push( phone=prompt("Please enter their phone number"));
		victimsaddress.push( address=prompt("Please enter their street address'"));
}
alert(victimsname.length+" are in need of help")

// victimsinfo.sort( byName );
// document.getElementById( 'msg' ).textContent = victimsinfo.join(',');

// function byName( a, b ) {
// 	return a.localeCompare (b);
// }
// var name=prompt("Please enter their name","") 
// var phone=prompt("Please enter their phone number","")
// var address=prompt("Please enter their street address","")
// alert(name+phone+address);

