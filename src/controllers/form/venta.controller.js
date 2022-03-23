require('dotenv').config();
const nodemailer = require('nodemailer')

const postCotizacion = async (req,res) => {
    
    const {nombre,empresa, email, carro} = req.body;
    //console.log(carro);
       
    

    //////// Mail para ventas famox ///////////////////
    const gasoterapiaItem =(item)=> {
        return `
            ${item.nombre.toUpperCase()}
            Código: ${item.codigo}
            Cantidad: ${item.cantidad}
        `
    }
    const unidSumItem = (item)=> {

        const bajaTension = item.bajaTension.length > 0 ? `Baja Tensión: ${item.bajaTension.map(
            baja => `${baja.nombre} Cantidad: ${baja.cantidad}`
        )}` : ''
        const mediaTension = item.mediaTension.length > 0 ? `Media Tensión: ${item.mediaTension.map(
            media => `${media.nombre} Cantidad: ${media.cantidad}`
        )}` : ''
        const iluminacion = item.iluminacion.length > 0 ? `Iluminación: ${item.iluminacion.map(
            ilu => `${ilu.nombre} Cantidad: ${ilu.cantidad}`
        )}` : ''
        const conexiones = item.conexiones.length > 0 ?  `Conexiones: ${item.conexiones.map(
            conex => `${conex.conector} + ${conex.gas} / Cantidad: ${conex.cantidad} `
        )}` : ''
        const longitud = item.longitud ? `Longitud: ${item.longitud}` : ''

        return `
            <h5>${item.nombre.toUpperCase()}</h5>
            <ul>
                <li>${conexiones}</li>
                <li>${bajaTension}</li>
                <li>${mediaTension}</li>
                <li>${iluminacion}</li>
                <li>${longitud} </li>
            </ul>       
        `
    }

    contenidoMail = `
    <h1>Pedido ${empresa}</h1>
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Empresa: ${empresa}</li>
        <li>Email: ${email}</li>
    </ul>
    <h5>Pedido</h5>
    ${carro.map(
        item => item.codigo? 
        `GASOTERAPIA :
        ${gasoterapiaItem(item)}` 
        : `UNIDAD SUMINISTRO:
            ${unidSumItem(item)}`
    )}`;
//JSON.stringify(item)


    console.log(contenidoMail);

    
    // user variables de entorno para esto
    const transporter = nodemailer.createTransport({
        host: 'smtp.famox.com.ar',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER2,
            pass: process.env.SMTP_KEY2
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailOptions = {
        from: `Pedido proveniente desde ${empresa} <${email}>`, //Nuestro correo y servidor q nos avisa
        to: 'ventas@famox.com.ar',
        subject: 'Pedido de Cotización',
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
    <h3>Famox SA</h3>
    <p>En breve le pasaremos la cotización de su pedido</p>
    `;

    const transporterUser = nodemailer.createTransport({
        host: 'smtp.famox.com.ar',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER2,
            pass: process.env.SMTP_KEY2
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const userMailOptions = {
        from: `Famox <ventas@famox.com.ar>`,
        to: email, // el email del usuario
        subject: 'Contacto desde Famox SA',
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
const mostrarCotizacion = (req,res) => {
    res.send('Pedido Confirmado')
}

module.exports = {postCotizacion, mostrarCotizacion}
