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
}).then(res => {
            setTimeout(function(){
                console.log(res)
            },5000)
        })
} 
export default ContactProvider;  