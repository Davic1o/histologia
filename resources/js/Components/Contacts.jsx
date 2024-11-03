
import React from 'react';
import '../../css/Contacts.css';
const Contacts = () => {
    return (
        <div>
            {/* RD Google Map*/}
            <section className="section section-fluid">
                <div className="google-map-container">
                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9784.79169817868!2d-78.48704720003892!3d-0.21036157102928357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a1194846a7d%3A0xdf81062111f6f31d!2sUNIVERSIDAD%20POLIT%C3%89CNICA%20SALESIANA!5e0!3m2!1ses-419!2sec!4v1714597157404!5m2!1ses-419!2sec" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>
            {/* Contact information*/}
            <section className="section section-sm section-first bg-default">
                <div className="container">
                    <div className="row row-30 justify-content-center">
                        <div className="col-sm-8 col-md-6 col-lg-4">
                            <article className="box-contacts">
                                <div className="box-contacts-body">
                                    <div className="box-contacts-icon fl-bigmug-line-cellphone55" />
                                    <div className="box-contacts-decor" />
                                    <p className="box-contacts-link"><a href="tel:#">+593 09999999</a></p>
                                    <p className="box-contacts-link"><a href="tel:#">+593 09999999</a></p>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-8 col-md-6 col-lg-4">
                            <article className="box-contacts">
                                <div className="box-contacts-body">
                                    <div className="box-contacts-icon fl-bigmug-line-up104" />
                                    <div className="box-contacts-decor" />
                                    <p className="box-contacts-link"><a href="https://maps.app.goo.gl/br4PBXmnEFu6NszU9">Quito - Ecuador</a></p>
                                    <p className="box-contacts-link"><a href="https://maps.app.goo.gl/br4PBXmnEFu6NszU9">Girón - Isabela Católica y Madrid</a></p>
                                </div>
                            </article>
                        </div>
                        <div className="col-sm-8 col-md-6 col-lg-4">
                            <article className="box-contacts">
                                <div className="box-contacts-body">
                                    <div className="box-contacts-icon fl-bigmug-line-chat55" />
                                    <div className="box-contacts-decor" />
                                    <p className="box-contacts-link"><a href="mailto:#">GIByB-UPS@gmail.com</a></p>
                                    <p className="box-contacts-link"><a href="mailto:#">GIByB-UPS@gmail.com</a></p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Form*/}
            <section className="section section-sm section-last bg-default text-left">
                <div className="container">
                    <article className="title-classic">
                        <div className="title-classic-title">
                            <h3>Contáctanos</h3>
                        </div>
                        <div className="title-classic-text">
                            <p>Si tienes alguna pregunta, puedes llenar el siguiente formulario y nosotros te ayudamos.</p>
                        </div>
                    </article>
                    <form className="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                        <div className="row row-14 gutters-14">
                            <div className="col-md-4">
                                <div className="form-wrap">
                                    <input className="form-input" id="contact-your-name-2" type="text" name="name" data-constraints="@Required" />
                                    <label className="form-label" htmlFor="contact-your-name-2">Nombre</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-wrap">
                                    <input className="form-input" id="contact-email-2" type="email" name="email" data-constraints="@Email @Required" />
                                    <label className="form-label" htmlFor="contact-email-2">E-mail</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-wrap">
                                    <input className="form-input" id="contact-phone-2" type="text" name="phone" data-constraints="@Numeric" />
                                    <label className="form-label" htmlFor="contact-phone-2">Teléfono</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-wrap">
                                    <label className="form-label" htmlFor="contact-message-2">Mensaje</label>
                                    <textarea className="form-input textarea-lg" id="contact-message-2" name="message" data-constraints="@Required" defaultValue={""} />
                                </div>
                            </div>
                        </div>
                        <button className="button button-primary button-pipaluk" type="submit">Enviar mensaje</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
export default Contacts;
