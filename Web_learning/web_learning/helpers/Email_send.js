import emailjs from '@emailjs/browser';

const SendEmail = (text) => {
    emailjs
        .sendForm('PVH_service', 'template_8pxdnpi', { message: text }, {
            publicKey: '9LNCTNuHXhVXRDE40',
        })
        .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
}

export {
    SendEmail,
}