function setError(id,msg){
    document.getElementById(id).innerHTML = msg;
}

function validationForm(){

   
    

    var name = document.getElementById('username').value;
    var last_name = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone_no = document.getElementById('phno').value;
    var state = document.getElementById('state').value;
    var city = document.getElementById('citySelect').value;
    var special = document.getElementById('comment').value;
    var chk_date = document.getElementById('selectDate').value;
    var atpos = email.indexOf("@");
    var atdot = email.lastIndexOf(".");
    var currentDate = new Date();
    var valid = true;
    var regex = /^[a-zA-Z\s]+$/;
    if(name == "" || regex.test(name) == false){
        setError("msg_fname","*Please Enter name ");
        document.getElementById('username').focus();
        valid = false;
        
    }else if(last_name == "" || regex.test(last_name) == false){
        setError("msg_lname","*Please Last Name");
        document.getElementById('lname').focus();
        valid = false;
    }else if(email == ""){
        setError("msg_email","*Please Enter email");
        document.getElementById('email').focus();
        valid = false;
    }else if (atpos<1 || atdot<atpos+2 || atdot+2>=email.length){  
        setError("msg_email","*Please Enter email valid");
        document.getElementById('email').focus();
        valid = false;
    }else if(phone_no.length >= 10 || phone_no == ""){
        setError("msg_phoneno","*Please Enter Phone number");
        document.getElementById('phone_no').focus();
        valid = false;
    }else if(state  == "select value"){
        setError("msg_state","*Please select the state");
        document.getElementById('state').focus();
        valid = false;
    }else if(chk_date <= currentDate){
        setError("msg_date","*Please select the valid date");
        document.getElementById('selectDate').focus();
        valid = false;
    }
    else if(special.length >= 10 || special == ""){
        setError("msg_comment","*Please emter any comment");
        document.getElementById('comment').focus();
        valid = false;
    }

    return valid;
    }



    

   


   
   

    var citiesByState = {
        Ontario : ["Toronto", "Windsor", "Ottawa"],
        Alberta: ["Calagery", "RedDeer"],
        Qubec: ["Granby", "Levis", "Alma"],
        British: ["Vancouver", "victoria", "Surrey"]
    }

    function makemenu(value){
        if(value.length==0) {
            document.getElementById("citySelect").innerHTML = "<option></option>";}
        else {
            var citiesoption = "";
            for(cityId in citiesByState[value]){
              citiesoption+="<option>"+citiesByState[value][cityId]+"</option>"  
            }
            document.getElementById("citySelect").innerHTML = citiesoption;
        }
        }






