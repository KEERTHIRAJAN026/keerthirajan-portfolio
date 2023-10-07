function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },800);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
        $("#about_container").css("display","none");
    },800);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInRight");
    },800);
}
function closework(){
    $("#work_container").addClass("animated slideOutRight");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutRight");
        $("#work_container").css("display","none");
    },800);
}
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInUp");
    },700);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutDown");
        $("#contact_container").css("display","none");
    },800);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#contact").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
function validateform() 
{
    var pass1=document.getElementById('pass1').value;
    var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
    if (rel.test(pass1))
    {
        alert("Sent Successfully");
        return true;

    } 
    else
    {
        alert("Fill out the fields");
        return false;
    }

}

function sendMail(event) {
    event.preventDefault();
  
    const message = encodeURIComponent(document.getElementById('message').value);
    const email = 'rajankeerthi0261@gmail.com'; 
    const email1 = encodeURIComponent(document.getElementById('email1').value);
  
    // Send the email using a third-party email service, such as Mailtrap or SendGrid.
    // Here is an example of using Mailtrap:
  
    const mailtrapClient = new MailtrapClient({ token: 'YOUR_MAILTRAP_TOKEN' });
  
    mailtrapClient.send({
      from: email1,
      to: email,
      subject: 'Message from your personal portfolio',
      text: message,
    }).then(() => {
      // Email sent successfully!
    }).catch((error) => {
      // Something went wrong while sending the email.
    });
  }
