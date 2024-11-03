import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import "../../css/Ini.css"; // Ruta al archivo CSS

SwiperCore.use([Autoplay, Pagination]);

const Ini = () => {
    return (
        <>
        <section className="section swiper-container">
            <Swiper
                direction="vertical"
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-custom',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active',
                }}
                className="swiper-wrapper text-left"
            >
                <SwiperSlide className="swiper-slide context-dark" style={{ backgroundImage: 'url(/storage/imagenes/1.png)' }}>
                    <div className="swiper-slide-caption section-md">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <h6 className="text-uppercase" data-caption-animate="fadeInRight" data-caption-delay={0} >Study using EMG + IMU + CAM Technology</h6>
                                    <h2 className="oh font-weight-light" data-caption-animate="slideInUp" data-caption-delay={100}>
                                        <span>Gait</span>
                                        <span className="font-weight-bold"> Analysis</span>
                                    </h2>
                                    <a className="button button-default-outline button-ujarak" href="#" data-caption-animate="fadeInLeft" data-caption-delay={0}>Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide context-dark" style={{ backgroundImage: 'url(/storage/imagenes/2.jpg)' }}>
                    <div className="swiper-slide-caption section-md">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <h6 className="text-uppercase" data-caption-animate="fadeInRight" data-caption-delay={0}>Sample repository and cell recognition with AI</h6>
                                    <h2 className="oh font-weight-light" data-caption-animate="slideInUp" data-caption-delay={10000}>
                                        <span>Virtual</span>
                                        <span className="font-weight-bold"> Histopathology</span>
                                    </h2>
                                    <a className="button button-default-outline button-ujarak" href="#" data-caption-animate="fadeInLeft" data-caption-delay={0}>Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide context-dark" style={{ backgroundImage: 'url(/storage/imagenes/3.jpg)' }}>
                    <div className="swiper-slide-caption section-md">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10">
                                    <h6 className="text-uppercase" data-caption-animate="fadeInRight" data-caption-delay={0}>Diagnosis of situations or states</h6>
                                    <h2 className="oh font-weight-light" data-caption-animate="slideInUp" data-caption-delay={10000}>
                                        <span>Biomedical</span>
                                        <span className="font-weight-bold"> Signals and Images</span>
                                    </h2>
                                    <a className="button button-default-outline button-ujarak" href="#" data-caption-animate="fadeInLeft" data-caption-delay={0}>Get in touch</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper-pagination swiper-pagination-custom"></div> {/* Paginación personalizada */}
        </section>



{/* Nueva sección para el párrafo de introducción */}
<section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-8">
        <p className="text-center text-gray-800 text-xl leading-relaxed">
          Bienvenido a nuestra página dedicada a proyectos de investigación. En esta sección, exploramos las últimas 
          innovaciones en el campo de la ingeniería biomédica, con un enfoque en análisis de marcha, histopatología virtual y 
          procesamiento de señales biomédicas. Conoce más sobre nuestros proyectos y cómo están contribuyendo al avance 
          de la ciencia y la medicina.
        </p>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="max-w-9xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <div className="text-8xl font-light mb-2">10</div>
            <h5 className="text-sm uppercase tracking-wider text-gray-600">Miembros</h5>
          </div>
          
          <div className="h-20 w-px bg-gray-200 hidden md:block"></div>
          
          <div className="text-center">
            <div className="text-8xl font-light mb-2">20</div>
            <h5 className="text-sm uppercase tracking-wider text-gray-600">Conferencias</h5>
          </div>
          
          <div className="h-20 w-px bg-gray-200 hidden md:block"></div>
          
          <div className="text-center">
            <div className="text-8xl font-light mb-2">100</div>
            <h5 className="text-sm uppercase tracking-wider text-gray-600">Publicaciones</h5>
          </div>
        </div>
      </div>
    </section>


      {/* GIByB-UPS GROUP - Imagen a la izquierda */}
      <div className="py-16">
      {/* GIByB-UPS GROUP - Imagen a la izquierda */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex items-center justify-center p-4">
              <div className="w-80 h-64">
                <img 
                  src="/api/placeholder/320/256"
                  alt="GIByB-UPS Group"
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-4">
              <div className="max-w-md">
                <h3 className="text-3xl font-semibold mb-4">GIByB-UPS GROUP</h3>
                <p className="text-gray-600">
                  Más información sobre nuestro grupo dirigido por el Ing. Fabián Narvaéz: 
                  Grupo de Investigación en Bioingeniería y Biomecatrónica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMBS-UPS GROUP - Imagen a la derecha */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center p-4 md:order-1 order-2">
              <div className="max-w-md">
                <h3 className="text-3xl font-semibold mb-4">EMBS-UPS GROUP</h3>
                <p className="text-gray-600">
                  Más información sobre nuestro grupo dirigido por el Ing. Fabián Narvaéz: 
                  Grupo de Investigación en Bioingeniería y Biomecatrónica
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center p-4 md:order-2 order-1">
              <div className="w-80 h-64">
                <img 
                  src="/api/placeholder/320/256"
                  alt="EMBS-UPS Group"
                  className="w-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMARTTECH - Imagen a la izquierda */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex items-center justify-center p-4">
              <div className="w-80 h-64">
                <img 
                  src="../storage/imagenes/4.png"
                  alt="SmartTech"
                  className="w-full object-cover shadow-md" 
                />
              </div>
            </div>
            <div className="flex flex-col justify-center p-4">
              <div className="max-w-md">
                <h3 className="text-3xl font-semibold mb-4">SMARTTECH</h3>
                <p className="text-gray-600">
                  Más información sobre nuestro grupo dirigido por el Ing. Fabián Narvaéz: 
                  Grupo de Investigación en Bioingeniería y Biomecatrónica
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    


</>
    );
};

export default Ini;
