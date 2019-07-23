// Custom Scripts

/* List 
1. Metis Menu
2. Nano Scroller
3. Menu Open/Close Button
4. Mobile Menu Open/Close Button
5. Tooltip
6. Varying Modal
7. Switchery
8. CheckAll
9. Popover
10. Panel Collapse
11. Theme Setting
*/

$(document).ready(function(){

'use strict';

// ------------------- 1. Metis Menu -------------------
$('#side-menu').metisMenu({
  collapsingClass: 'collapsing' 
});

function resize() {
    if($(window).innerWidth() > 992) {
        $("#content-panel").removeClass("resize-mobile");
        $("#navigation-panel").removeClass("navbar-mobile-size");  
    } else {
        $("#navigation-panel").addClass("navbar-mobile-size");
        $("#menu-toggle").toggleClass("shut");
    }
}

// Fire.
resize();

// And recheck if window gets resized.
$(window).bind('resize',function(){
    resize();
});

// ------------------- 2. Nano Scroller -------------------
$(".nano").nanoScroller();

// ------------------- 3. Menu Open/Close Button -------------------

$("#menu-toggle").click(function(e) {
e.preventDefault();
  $("#navigation-panel").toggleClass("shut");
  $("#content-panel").toggleClass("resize");
  $(".navbar-brand").toggleClass("short");
  $("#menu-toggle").toggleClass("shut")
});

// ------------------- 4. Mobile Menu Open/Close Button -------------------
$("#mobile-menu-toggle").click(function(e) {
e.preventDefault();
  $("#navigation-panel").toggleClass("navbar-mobile-size");
  $("#mobile-menu-toggle").toggleClass("shut");
  $("#content-panel").toggleClass("bg-active");
});

// ------------------- 5. Tooltip -------------------
$('[data-toggle="tooltip"]').tooltip({container: 'body'});

// ------------------- 6. Varying Modal -------------------
$('#modal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

// ------------------- 7. Switchery -------------------
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-blue'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#2196F3'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-green'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#4CAF50'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-purple'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#673AB7'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-red'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#FF5252'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-orange'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#FF9800'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-yellow'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#ffd00c'});
});

//small
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-small'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#2196F3' , size: 'small'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-green-small'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#4CAF50', size: 'small'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-purple-small'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#673AB7' , size: 'small'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-red-small'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#FF5252' , size: 'small'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-orange-small'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#FF9800' , size: 'small'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-yellow-small'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#ffd00c' , size: 'small'});
});

//big
var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-blue-large'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#2196F3' , size: 'large'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-green-large'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#4CAF50', size: 'large'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-purple-large'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#673AB7' , size: 'large'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-red-large'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#FF5252' , size: 'large'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-orange-large'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#FF9800' , size: 'large'});
});

var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch-yellow-large'));
elems.forEach(function(html) {
  var init = new Switchery(html, {color: '#ffd00c' , size: 'large'});
});

// ------------------- 8. CheckAll -------------------
$("#checkAll").click(function () {
   $('input:checkbox').not(this).prop('checked', this.checked);
});

// ------------------- 9. Popover -------------------
$(function () {
  $('[data-toggle="popover"]').popover()
})

// ------------------- 10. Panel Collapse -------------------
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});

// ------------------- 11. Theme Setting -------------------
$("#button-settings").click(function(e) {
e.preventDefault();
  $("#button-settings").toggleClass("active");
  $("#theme-settings").toggleClass("active");

});

}); //end document


