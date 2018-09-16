import './index.css';
// import numeral from 'numeral';
// import {getUsers, deleteUser} from './api/userApi';

// window.$ = $;
// window.jQuery = jQuery;
//import $ from 'jquery';

// $( document ).ready(function() {
 
//   //  $( "a" ).click(function( event ) {
 
//         alert( "Thanks for visiting!" );
 
//   //  });
 
// });

$(document).ready(function() {
    $('#btnChange').click(function() {
        $('#dvDemo').attr('id', 'dvDemoNew');
        $('#dvDemoNew').html('My New ID is <b>dvDemoNew</b>.')
    });

    $('#btnReset').click(function() {
        $('#dvDemoNew').attr('id', 'dvDemo');
        $('#dvDemo').html('My ID is dvDemo.')
    });
});