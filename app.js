$('#login').click(function() {
    var language = $('#lang').val();
    var g = G$('Martin', 'Ashcroft');
    $('#logindiv').hide();
    g.setLang(language).htmlGreeting('#greeting', true).log();
});