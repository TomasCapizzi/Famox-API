const nodemailer = require('nodemailer')

const postContacto = async (req,res) => {
    console.log(req.body);
    const {nombre,empresa, email, asunto, mensaje} = req.body;

    // Se puede mandar uno a famox y otro al usuario indicando que se recibió el correo


    //////// Mail para info famox ///////////////////
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
            user: 'atencion.cliente@famox.com.ar',
            pass: 'Fx-ac-2003*'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const info = await transporter.sendMail({
        from: `Contacto desde ${empresa} <mail@famox.con.ar>`, //Nuestro correo y servidor q nos avisa
        to: 'atencion.cliente@famox.com.ar',
        subject: asunto,
        html: contenidoMail
    })

    console.log('Mensaje enviado', info.messageId);
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////
    ///////////////////////////////////////////

    /////////// Mail para el usuario  ///////////

    contenidoMailUsuario = `
    <h1>Famox Contacto</h1>
    <p>Ya recibimos tu consulta ${nombre}</p>
    `;

    const transporterUser = nodemailer.createTransport({
        host: 'smtp.famox.com.ar',
        port: 587,
        secure: false,
        auth: {
            // user variables de entorno para esto
            user: 'atencion.cliente@famox.com.ar',
            pass: 'Fx-ac-2003*'
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const infoUser = await transporterUser.sendMail({
        from: `Famox <atencion.cliente@famox.com.ar>`, //Nuestro correo y servidor q nos avisa
        to: email, // el email del usuario
        subject: asunto,
        html: contenidoMailUsuario
    })

    console.log('Mail enviado', infoUser.messageId);

}



const mostrarAlgo = (req,res) => {
    res.send('Contacto')
}

module.exports = {postContacto, mostrarAlgo}