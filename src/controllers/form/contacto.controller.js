require('dotenv').config();
const nodemailer = require('nodemailer')

const postContacto = async (req,res) => {
    console.log(req.body);
    const {nombre,empresa, email, asunto, mensaje} = req.body;
    //console.log(nombre, email, empresa, asunto, mensaje);

    //////// Mail para atencion al cliente famox ///////////////////
    contenidoMail = `
    <h1>${asunto}</h1>
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Empresa: ${empresa}</li>
        <li>Email: ${email}</li>
    </ul>
    <p>${mensaje}</p>
`;


    // user variables de entorno para esto
    const transporter = nodemailer.createTransport({
        host: 'smtp.famox.com.ar',
        port: 587,
        secure: false,
        auth: {
            // user variables de entorno para esto
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_KEY
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: `Contacto desde ${empresa} <mail@famox.con.ar>`, //Nuestro correo y servidor q nos avisa
        to: 'atencion.cliente@famox.com.ar',
        subject: asunto,
        html: contenidoMail
    }

    await transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message)
        } else {
            console.log('Mail enviado');
            res.status(200).jsonp(req.body)
        }
    })
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////

    /////////// Mail para el usuario  ///////////

    contenidoMailUsuario = `
    <h1>Famox SA</h1>
    <p>Ya recibimos tu consulta ${nombre}, te estaremos respondiendo a la brevedad</p>
    `;

    const transporterUser = nodemailer.createTransport({
        host: 'smtp.famox.com.ar',
        port: 587,
        secure: false,
        auth: {
            // user variables de entorno para esto
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_KEY
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const userMailOptions = {
        from: `Famox <atencion.cliente@famox.com.ar>`, //Nuestro correo y servidor q nos avisa
        to: email, // el email del usuario
        subject: asunto,
        html: contenidoMailUsuario
    }

    await transporterUser.sendMail(userMailOptions, (error, info)=>{
        if(error){
            res.status(500).send(error.message)
        } else {
            console.log('Mail enviado');
            res.status(200).jsonp(req.body)
        }
    })

    

}
const mostrarAlgo = (req,res) => {
    res.send('Contacto')
}

module.exports = {postContacto, mostrarAlgo}