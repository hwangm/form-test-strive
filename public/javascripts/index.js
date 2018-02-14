$(document).ready(function() {
    // $('#entryForm').on('submit', function(e) {
    //     e.preventDefault();

    //     // if($('checkTermsOfUse').is(':checked') == false){
    //     //     alert('Please check that you have read the Terms and Conditions and Privacy Policy before submitting again.');
    //     // }
    // });

    let url='/test/'+$('#eventID').text()+"/start";
    let features='scrollbars=no,status=no,location=no,toolbar=no,menubar=no'
    window.open(url, "test", features)
});