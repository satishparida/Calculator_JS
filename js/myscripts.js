var display_field_clear='Y';
var user_input_to_text='N';
var ans=0;
var result_value=0;

function displayInScreen(data_from_button) {
    if (display_field_clear=='Y' && user_input_to_text=='N'){
        display_String=data_from_button;
        document.getElementById('cal_display_values').value=display_String;
        display_field_clear='N';
    }
    else{
        current_display_String=document.getElementById('cal_display_values').value;
        display_String=current_display_String+data_from_button;
        document.getElementById('cal_display_values').value=display_String;
    }
}

function calculateResult() {
    try{
        result_value=eval(document.getElementById('cal_display_values').value);
    }
    catch(err){
        document.getElementById('cal_display_result').value="In-Valid Expression";
        return;
    }
    document.getElementById('cal_display_result').value=result_value;
    display_field_clear='Y';
    document.getElementById('cal_button_answer').value=result_value;/*Not Required*/
    ans=result_value;
}

function calculatrClr(){
    document.getElementById('cal_display_values').value="";
    document.getElementById('cal_display_result').value="";
    display_field_clear='N';
    ans=0;
}

function calculatrClr_except_Ans(){
    calculatrClr();
    ans=result_value;
}


function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode==13) calculateResult();
    if (charCode != 46
        && charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    user_input_to_text='Y';
    return true;
}


/* TODO:
2. Dont allow anything other than numeric and expected symbols from user input
3. Validate the expression, if invalid then throw correct error in output window
5. Store Previous Expressions and results
*/