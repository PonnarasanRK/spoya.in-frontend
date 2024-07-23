$(document).ready(function() {
    // Initially hide all tab contents except the active one
    $('.tab-content').not('.active').hide();

    // Tab switching
    $('.signup-tab').click(function() {
        $('.signup-tab a').addClass('active');
        $('.login-tab a').removeClass('active');
        $('#login-tab-content').removeClass('active').hide();
        $('#signup-tab-content').addClass('active').show();
    });

    $('.login-tab').click(function() {
        $('.login-tab a').addClass('active');
        $('.signup-tab a').removeClass('active');
        $('#signup-tab-content').removeClass('active').hide();
        $('#login-tab-content').addClass('active').show();
    });

    // Form submission (you can add your form submission logic here)
    $('.signup-form').submit(function(e) {
        e.preventDefault();
        alert('Signup form submitted!');
        // Add your form submission code here
    });

    $('.login-form').submit(function(e) {
        e.preventDefault();
        alert('Login form submitted!');
        // Add your form submission code here
    });
});
