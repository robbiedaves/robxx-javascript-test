import './index.css';


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