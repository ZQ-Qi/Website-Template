$(document).ready(function() {
    "use strict";
    //CheckBox List
    $("#checkedAll").change(function(){
        if(this.checked){
            $(".checkSingle").each(function(){
                this.checked=true;
            })
        }else{
            $(".checkSingle").each(function(){
                this.checked=false;
            })
        }
    });

    $(".checkSingle").on('click',function () {
        if ($(this).is(":checked")){
            var isAllChecked = 0;
            $(".checkSingle").each(function(){
                if(!this.checked)
                    isAllChecked = 1;
            })
            if(isAllChecked == 0){ $("#checkedAll").prop("checked", true); }
        }else {
            $("#checkedAll").prop("checked", false);
        }
    });

    // switch toggle
    $("input[type=checkbox]").on('click',function(event) {
        var checkBox = $(this);
        $('someSwitchOptionDefault').prop( "checked", true );
    });
});