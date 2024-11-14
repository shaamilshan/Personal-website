function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        // consol.log("Hi vro")
    }
    emailjs.send("service_9et8mev","template_sm81liq",parms).then(alert("Email Sent"))
}
