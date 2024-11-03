
import React from 'react';
import '../../css/Proyectos.css';

const Proyectos = () => {
    return (
        <div>
            {/* Breadcrumbs */}
            <section className="breadcrumbs-custom-inset">
                <div className="breadcrumbs-custom context-dark bg-overlay-60">
                    <div className="container">
                        <h2 className="breadcrumbs-custom-title">Lineas de investigación</h2>
                        <ul className="breadcrumbs-custom-path">
                            <li><a href="index.html">Inicio</a></li>
                            <li className="active">Proyectos I+D</li>
                        </ul>
                    </div>
                    <div className="box-position" style={{backgroundImage: 'url(/storage/imagenes/14.jpg)'}} />
                </div>
            </section>
            <div className="section-separation" />
            <div className="container">
                <div className="row">
                    {/* Primera fila con tres columnas */}
                    <div className="col-md-4">
                        <a href="page1.html"> {/* Enlace al hacer clic */}
                            <div className="image-container">
                                <img src="/storage/imagenes/7.png" alt="Imagen 1" className="image" />
                                <div className="overlay-text">INTRUMENTACIÓN MEDICA</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="page2.html"> {/* Enlace al hacer clic */}
                            <div className="image-container">
                                <img src="/storage/imagenes/8.png" alt="Imagen 2" className="image" />
                                <div className="overlay-text">CLASIFICACIÓN DE IMÁGENES</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a href="page3.html"> {/* Enlace al hacer clic */}
                            <div className="image-container">
                                <img src="/storage/imagenes/9.jpg" alt="Imagen 3" className="image" />
                                <div className=" overlay-text">BIOMECÁNICA</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row">
                    {/* Segunda fila con tres columnas */}
                    <div className="col-md-4">
                        <a href="page4.html"> {/* Enlace al hacer clic */}
                            <div className=" image-container">
                                <img src="/storage/imagenes/10.jpg" alt="Imagen 4" className="image" />
                                <div className=" overlay-text">VISION ARTIFICIAL BIOMÉDICA</div>
                            </div>
                        </a>
                    </div>
                    <div className=" col-md-4">
                        <a href="page5.html"> {/* Enlace al hacer clic */}
                            <div className=" image-container">
                                <img src="/storage/imagenes/11.png" alt="Imagen 5" className="image" />
                                <div className="overlay-text">PROCESAMIENTO DE SEÑALES</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4">
                        <a id="linkToHistologia" href="#"> {/* Enlace controlado por JavaScript */}
                            <div className="image-container">
                                <img src="/storage/imagenes/12.jpg" alt="Imagen 6" className="image" />
                                <div className="overlay-text">HISTOPATOLOGÍA</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Proyectos;