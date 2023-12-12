import Swal from "sweetalert2";

const ContactProvider = (name,email,subject,message) =>{
    // eslint-disable-next-line no-undef
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "naimur2935@gmail.com",
    Password : "14C24B23E51E08EA8D20D0340CEEE00A6DFD",
    To : 'naimur2935@gmail.com',
    From : "naimur2935@gmail.com",
    Subject : "This is the subject",
    Body : `Name: ${name} <br/>Email: ${email} <br/>Subject: ${subject} <br/>Message: ${message}` 
}).then(() => {
            setTimeout(function(){
                Swal.fire({
                    title: 'Success!',
                    text: 'Message send Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            },1000)
        })
} 
export default ContactProvider;  