require('dotenv').config();
const nodemailer = require('nodemailer')

const postCotizacion = async (req,res) => {
    
    const {nombre,empresa, email, carro} = req.body;
    //console.log(carro);
    const htmlGasoterapia = document.createElement('p');

    const htmlUnidSum = document.createElement('article');

    /*
    const bajaTension = document.createElement('ul');
    const mediaTension = document.createElement('ul');
    const conexiones = document.createElement('ul');
    const iluminacion = document.createElement('ul');
    const longitud = document.createElement('p')
    */

    if(carro){
        for(carr in carro){
            //console.log(carro[carr]);
            const item = carro[carr]
            if(item.codigo){
                // es gasoterapia
                console.log(item);                
                htmlGasoterapia.innerText = ` ${item.nombre} - ${item.codigo} / Cantidad: ${item.cantidad}`                
            }
            else{
                // es unid sum

                if(item.bajaTension.length > 0){
                    const lista = document.createElement('ul')
                    item.bajaTension.forEach(element => {
                        const item = document.createElement('li');
                        item.innerHTML = `${element.nombre} / Cantidad: ${element.cantidad}`
                        lista.appendChild(item)
                    });
                    htmlUnidSum.appendChild(lista)

                }

                if(item.mediaTension.length > 0){
                    const lista = document.createElement('ul')
                    item.mediaTension.forEach(element => {
                        const item = document.createElement('li');
                        item.innerHTML = `${element.nombre} / Cantidad: ${element.cantidad}`
                        lista.appendChild(item)
                    });
                    htmlUnidSum.appendChild(lista)
                }

                if(item.conexiones.length > 0){
                    const lista = document.createElement('ul')
                    item.conexiones.forEach(element => {
                        const item = document.createElement('li');
                        item.innerHTML = `${element.nombre} / Cantidad: ${element.cantidad}`
                        lista.appendChild(item)
                    });
                    htmlUnidSum.appendChild(lista)
                }

                if(item.iluminacion.length > 0){
                    const lista = document.createElement('ul')
                    item.iluminacion.forEach(element => {
                        const item = document.createElement('li');
                        item.innerHTML = `${element.nombre} / Cantidad: ${element.cantidad}`
                        lista.appendChild(item)
                    });
                    htmlUnidSum.appendChild(lista)
                }

                if(item.longitud !== ''){
                    const longitud = document.createElement('p').innerText(longitud)
                    htmlUnidSum.appendChild(longitud)
                }
            }
        }
    }
    

    //////// Mail para ventas famox ///////////////////
    contenidoMail = `
    <h1>Pedido ${empresa}</h1>
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Empresa: ${empresa}</li>
        <li>Email: ${email}</li>
    </ul>
    ${htmlGasoterapia && htmlGasoterapia}
    ${htmlUnidSum && htmlUnidSum}
`;


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