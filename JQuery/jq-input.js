function validation(){
    let isValid = true;
    if($('#name').val()==''){
        $('#er1').show();
        isValid=false;
    }else{
       $('#er1').hide();
    }
    if($('#email').val()==''){
        $('#er2').show();
        isValid=false;
    }else{
       $('#er2').hide();
    }
    if($('#password').val()==''){
        $('#er3').show();
        isValid=false;
    }else{
        $('#er3').hide();
    }
    if($('#address').val()==''){
        $('#er4').show();
        isValid=false;
    }else{
        $('#er4').hide();
    }
    if(!$('input[name="gender"]:checked').length){
        $('#er5').show();
        isValid=false;
    }else{
        $('#er5').hide();
    }
    if(!$('input[name="check"]:checked').length){
        $('#er6').show();
        isValid=false;
    }else{
        $('#er6').hide();
    }
    if(isValid){
         alert("Form Submitted Successfully!!");
        return true;
    }else{
        return false;
    }
}