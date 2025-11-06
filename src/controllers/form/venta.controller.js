/*require('dotenv').config();
const nodemailer = require('nodemailer')

const postCotizacion = async (req,res) => {
    
    const {nombre,empresa, email, carro} = req.body;
    //console.log(carro);
       
    

    //////// Mail para ventas famox ///////////////////
    const gasoterapiaItem =(item)=> {
        return `
            <h5>${item.nombre.toUpperCase()}</h5>
            <ul>
                <li>Código: <b>${item.codigo}</b></li>
                <li>Cantidad: ${item.cantidad}</li>
            </ul>
        `
    }
    const unidSumItem = (item)=> {

        const bajaTension = item.bajaTension.length > 0 ? `Baja Tensión: 
        <ul>
            ${item.bajaTension.map(
                baja => `<li>${baja.nombre} Cantidad: ${baja.cantidad}</li>`
            )}
        </ul>
        ` : ''
        const mediaTension = item.mediaTension.length > 0 ? `Media Tensión: 
        <ul>
            ${item.mediaTension.map(
                media => `<li>${media.nombre} Cantidad: ${media.cantidad}</li>`
            )}
        </ul>
        ` : ''
        const iluminacion = item.iluminacion.length > 0 ? `Iluminación: 
        <ul>
            ${item.iluminacion.map(
                ilu => `<li>${ilu.nombre} Cantidad: ${ilu.cantidad}</li>`
            )}
        </ul>
        ` : ''
        const conexiones = item.conexiones.length > 0 ?  `Conexiones: 
        <ul>
            ${item.conexiones.map(
                conex => `<li>${conex.conector} + ${conex.gas} / Cantidad: ${conex.cantidad}</li>`
            )}
        </ul>
        ` : ''
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
            <br>   
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
        from: `Pedido proveniente desde ${empresa} <info@famox.com.ar>`, //Nuestro correo y servidor q nos avisa
        to: 'ventas@famox.com.ar, tomas.capizzi@famox.com.ar',
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
*/
require('dotenv').config();
const nodemailer = require('nodemailer');

const postCotizacion = async (req, res) => {
  try {
    const { nombre, empresa, email, carro } = req.body;

    // --- Helpers ---
    const gasoterapiaItem = (item) => `
      <h5>${item.nombre.es.toUpperCase()}</h5>
      <ul>
        <li>Código: <b>${item.codigo}</b></li>
        <li>Cantidad: ${item.cantidad}</li>
      </ul>
    `;

    const unidSumItem = (item) => {
      const list = (title, arr, mapFn) =>
        arr.length > 0
          ? `<b>${title}:</b><ul>${arr.map(mapFn).join('')}</ul>`
          : '';
      return `
        <h5>${item.nombre.toUpperCase()}</h5>
        ${list('Baja Tensión', item.bajaTension, (b) => `<li>${b.nombre} - Cant: ${b.cantidad}</li>`)}
        ${list('Media Tensión', item.mediaTension, (m) => `<li>${m.nombre} - Cant: ${m.cantidad}</li>`)}
        ${list('Iluminación', item.iluminacion, (i) => `<li>${i.nombre} - Cant: ${i.cantidad}</li>`)}
        ${list('Conexiones', item.conexiones, (c) => `<li>${c.conector} + ${c.gas} / Cant: ${c.cantidad}</li>`)}
        ${item.longitud ? `<p>Longitud: ${item.longitud}</p>` : ''}
        <br>
      `;
    };

    const contenidoMail = `
      <h1>Pedido ${empresa}</h1>
      <ul>
        <li>Nombre: ${nombre}</li>
        <li>Empresa: ${empresa}</li>
        <li>Email: ${email}</li>
      </ul>
      <h5>Pedido</h5>
      ${carro
        .map((item) =>
          item.codigo
            ? `GASOTERAPIA:<br>${gasoterapiaItem(item)}`
            : `UNIDAD SUMINISTRO:<br>${unidSumItem(item)}`
        )
        .join('')}
    `;

    // --- Transporter común ---
    const transporter = nodemailer.createTransport({
      host: 'smtp.famox.com.ar',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER2,
        pass: process.env.SMTP_KEY2,
      },
      tls: { rejectUnauthorized: false },
    });

    // --- Enviar a ventas ---
    await transporter.sendMail({
      from: `Pedido desde ${empresa} <info@famox.com.ar>`,
      to: 'ventas@famox.com.ar, tomas.capizzi@famox.com.ar',
      subject: 'Pedido de Cotización',
      html: contenidoMail,
    });

    // --- Enviar al usuario ---
    const contenidoMailUsuario = `
      <h3>Famox SA</h3>
      <p>En breve le enviaremos la cotización de su pedido.</p>
    `;

    await transporter.sendMail({
      from: 'Famox <ventas@famox.com.ar>',
      to: email,
      subject: 'Contacto desde Famox SA',
      html: contenidoMailUsuario,
    });

    // ✅ Solo una respuesta final
    return res.status(200).json({ ok: true, message: 'Mails enviados correctamente' });

  } catch (error) {
    console.error('Error enviando mail:', error);
    return res.status(500).json({ ok: false, error: error.message });
  }
};

const mostrarCotizacion = (req, res) => res.send('Pedido Confirmado');

module.exports = { postCotizacion, mostrarCotizacion };
