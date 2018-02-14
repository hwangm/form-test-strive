$(document).ready(function() {
    // $('#entryForm').on('submit', function(e) {
    //     e.preventDefault();

    //     // if($('checkTermsOfUse').is(':checked') == false){
    //     //     alert('Please check that you have read the Terms and Conditions and Privacy Policy before submitting again.');
    //     // }
    // });

    let url='localhost:3000/test/'+$('#eventID').text()+"/start";
    let features='menubar=no,toolbar=no'
    window.open(url, "test")

});