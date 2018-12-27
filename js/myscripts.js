var display_field_clear='Y';

function displayInScreen(data_from_button) {
    if (display_field_clear=='Y'){
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
    result_value=eval(document.getElementById('cal_display_values').value);
    document.getElementById('cal_display_result').value=result_value;
    display_field_clear='Y';
}

function calculatrClr(){
    document.getElementById('cal_display_values').value="";
    document.getElementById('cal_display_result').value="";
    display_field_clear='N';
}

/* TODO:
1. Allow user input to text field
2. Dont allow anything other than numeric and expected symbols
3. Validate the expression, if invalid then throw correct error in output window
4. Accept enter as = from the textbox field
*/