/*
Template Name: Material Pro admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";
      $(".tst1").on("click", function(){
           $.toast({
            heading: 'Welcome to Admin wrap',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-left',
            loaderBg:'#ff6849',
            icon: 'info',
            hideAfter: 3000, 
            stack: 6
          });

     });

      $(".tst2").on("click", function(){
           $.toast({
            heading: 'Welcome to Admin wrap',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-left',
            loaderBg:'#ff6849',
            icon: 'warning',
            hideAfter: 3500, 
            stack: 6
          });

     });
      $(".tst3").on("click", function(){
           $.toast({
            heading: 'Welcome to Admin wrap',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-left',
            loaderBg:'#ff6849',
            icon: 'success',
            hideAfter: 3500, 
            stack: 6
          });

     });

      $(".tst4").on("click", function(){
           $.toast({
            heading: 'Welcome to Admin wrap',
            text: 'Use the predefined ones, or specify a custom position object.',
            position: 'top-left',
            loaderBg:'#ff6849',
            icon: 'error',
            hideAfter: 3500
            
          });

     });
});
          
