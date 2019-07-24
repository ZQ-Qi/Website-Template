//Source: https://github.com/Uben/jQuery-ToDo

(function() {
    "use strict";

    // Check off specific todos on clicked   			//.click() only works with existing items in the code not newly added items so we use .on(action, element, function(){what we want to do goes here})
    $(".todo-widget ul").on("click", "li", function(){ //adds a listner to the ul that says when any LI element, existing or old, is clicked inside of the UL do this code
        $(this).toggleClass("done");
    });

    //click on Trash to delete the todo 		//.click() only works with existing items in the code not newly added items so we use .on(action, element, function(){what we want to do goes here})
    $(".todo-widget ul").on("click", "span", function(event){ //adds a listner to the ul that says when any span, new or old, is clicked inside of the UL do this code
        $(this).parent().fadeOut(250,function(){ //"this" selects the parent item of the clicked item, which is span --> li. it fades it out in 500 milliseconds
            $(this).remove();					 //then when the fadeOut() is done, and then finally removes the "this" item, li in this case which was hidden after it faded out
        });
        event.stopPropagation(); //stopPropagation() is jQuery that stops the bubbling of all the higher elements like the body, ul, li from di=oing thier own thing when only the span is clicked
    });

    
    $(".todo-widget input[type='text']").keypress(function(event){ //Any key that was pressed in input is registered
        if(event.which === 13){ //every key has thier own id, enter key is number 13
            var todoText = $(this).val(); //takes new todo text into input
            $(this).val(""); //sets the input field to emtpy when enter button is typed
            $(".todo-widget ul").append("<li class='list-group-item list-group-item-action'><span class='float-right'><i class='icon-close2 text-danger'></i></span>  " + todoText + "</li>"); //create a new LI and adds the text in the todoText variable into the UL
        }
    });
}());
