function registerUser(){
   var name= document.getElementById('name');
   var email= document.getElementById('email');
   var password= document.getElementById('password');
   var dob= document.getElementById('dob');
   var gender= document.getElementById('gender');
   var address=document.getElementById('address');
   var phoneNo= document.getElementById('phoneNo');
   var country= document.getElementById('country');

var isFormValid=validateName(name) &&  validateEmail(email) && validatePassword(password) && validateDob(dob) && validateGender(gender) && validateAddress(address) && validatePhoneNo(phoneNo) && validateCountry(country);

   function validateName(name){
    if(name.value.length===0){
        document.getElementById('nameError').style.display='block';
        document.getElementById('nameError').innerHTML="Name is Requied";
        return false;
    }
    else{
        document.getElementById('nameError').style.display='none';

        return true;
    }
   }

   function validateEmail(email){
    var emailRegEx=/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    if(email.value.length===0){
        document.getElementById('emailError').style.display='block';
        document.getElementById('emailError').innerHTML="email  is mandatory";
        return false;
    }
    else if(!emailRegEx.test(email.value)){
        document.getElementById('emailError').style.display='block';
        document.getElementById('emailError').innerHTML=" incorrect email format ";
        return false;
    }
    else{
        document.getElementById('emailError').style.display='none';

        return true;
    }
   }
   function validatePassword(password){
    var passwordRegEx=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
                      
    if(password.value.length===0){
        document.getElementById('passwordError').style.display='block';
        document.getElementById('passwordError').innerHTML="password required";
        return false;
    }
    else if(!passwordRegEx.test(password.value)){
        document.getElementById('passwordError').style.display='block';
        document.getElementById('passwordError').innerHTML=" incorrect password format ";
        return false;
    }

    else{
        document.getElementById('passwordError').style.display='none';

        return true;
    }
   }
   function validateDob(dob){
    if(dob.value.length===0){
        document.getElementById('dobError').style.display='block';
        document.getElementById('dobError').innerHTML="dateError";
    }
    else{
        document.getElementById('dobError').style.display='none';

        return true;
    }
   }
   function validateGender(gender){
    if(gender.value.length===0){
        document.getElementById('genderError').style.display='block';
        document.getElementById('genderError').innerHTML="genderError";
    }
    else{
        document.getElementById('genderError').style.display='none';

        return true;
    }
   }
   function validateAddress(address){
    if(address.value.length===0){
        document.getElementById('addressError').style.display='block';
        document.getElementById('addressError').innerHTML="addressError";
        return false;
    }
    else{
        document.getElementById('addressError').style.display='none';

        return true;
    }
   }
   function validatePhoneNo(phoneNo){
    if(phoneNo.value.length===0){
        document.getElementById('phoneNoError').style.display='block';
        document.getElementById('phoneNoError').innerHTML="phoneNoError";
        return false;
    }
    else{
        document.getElementById('phoneNoError').style.display='none';

        return true;
    }
   }
   function validateCountry(country){
    if(country.value.length===0){
        document.getElementById('countryError').style.display='block';
        document.getElementById('countryError').innerHTML="countryError";
    }
    else{
        document.getElementById('countryError').style.display='none';

        return true;
    }
   }

}