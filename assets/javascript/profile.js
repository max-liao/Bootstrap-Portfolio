//Profile javascript objects
var contactme = {
    name: "sendemail",
    sendMail: function() {
        var link = "mailto:max.liao@gmail.com"
                 + "?cc=" + escape(document.getElementById('ccemail').value)
                 + "&bcc=" + escape(document.getElementById('bccemail').value)
                 + "&subject=" + escape("email from: " + document.getElementById('usr').value)
                 + "&body=" + escape(document.getElementById('comment').value)
        ;
        window.location.href = link;
    }
}