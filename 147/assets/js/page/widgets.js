"use strict";
$(window).load(function(){

    //todo's
    $('.widget-todo .todo-list li .checkbox').on('change', function() {
        var todo = $(this).parents('li');

        if (todo.hasClass('completed')) {
            todo.removeClass('completed');
        } else {
            todo.addClass('completed');
        }
    });
    //* todo's

    // Initialize owl carousels
    $('#todo-carousel, #feed-carousel, #notes-carousel').owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem : true,
        responsive: true
    });

    $('#appointments-carousel').owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        slideSpeed : 300,
        paginationSpeed : 400,
        navigation: true,
        navigationText : ['<i class=\'fa fa-chevron-left\'></i>','<i class=\'fa fa-chevron-right\'></i>'],
        singleItem : true
    });
    //* Initialize owl carousels

    //Initialize mini calendar datepicker
    $('#mini-calendar').datetimepicker({
        inline: true
    });
    //*Initialize mini calendar datepicker

    //load wysiwyg editor
    $('#summernote').summernote({
        toolbar: [
            //['style', ['style']], // no style button
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            //['insert', ['picture', 'link']], // no insert buttons
            //['table', ['table']], // no table button
            //['help', ['help']] //no help button
        ],
        height: 143   //set editable area's height
    });
    //*load wysiwyg editor

});