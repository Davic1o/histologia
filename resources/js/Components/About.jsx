import React, {useEffect} from 'react';
import '../../css/About.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'lightgallery/css/lightgallery.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import LightGallery from 'lightgallery/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AboutUsPage = () => {
    useEffect(() => {
        const handleScroll = () => {
          const parallaxContainer = document.querySelector(".parallax-container");
          const scrollPosition = window.pageYOffset;
          parallaxContainer.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Control de velocidad
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
  return (
    <div className="page">
      {/* Breadcrumbs */}
      <section className="breadcrumbs-custom-inset">
        <div className="breadcrumbs-custom context-dark bg-overlay-60">
          <div className="container">
            <h2 className="breadcrumbs-custom-title">Acerca de nosotros</h2>
            <ul className="breadcrumbs-custom-path">
              <li><a href="index.html">Inicio</a></li>
              <li className="active">Gente</li>
            </ul>
          </div>
          <div className="box-position" style={{ backgroundImage: 'url(images/GYBYB.jpg)' }} />
        </div>
      </section>

<div>
  {/* Different People*/}
  <section className="section section-sm">
    <div className="container">
      <h3 className="title-block find-car oh"><span className="d-inline-block wow slideInUp">Coordinador</span></h3>
      <div className="row row-30 justify-content-center box-ordered">
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="/storage/imagenes/Fabian.png" alt width={200} height={200} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">Fabián Narvaéz E.</a></h6>
              <p className="team-modern-status">Ingeniero electrónico</p>
              <p className="team-modern-status">Msc. en Ing. Biomédica</p>
              <p className="team-modern-status">Ph.D en Ing. Mecatrónica</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  {/* Different People*/}
  <section className="section section-sm">
    <div className="container">
      <h3 className="title-block find-car oh"><span className="d-inline-block wow slideInUp">Investigadores</span></h3>
      <div className="row row-30 justify-content-center box-ordered">
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/Gloria.png" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">Gloria Díaz</a></h6>
              <p className="team-modern-status">Ingeniera en sistemas</p>
              <p className="team-modern-status">Ph.D en Ing Eléctrica</p>
            </div>
          </article>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/user-2-118x118.jpg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">Micaela Villa</a></h6>
              <p className="team-modern-status">Ingeniera Mecánica</p>
              <p className="team-modern-status">Msc. Ciencia de materiales</p>
            </div>
          </article>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/user-3-118x118.jpg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">Norma Torres</a></h6>
              <p className="team-modern-status">Licenciada en medicina general</p>
              <p className="team-modern-status">Msc en </p>
            </div>
          </article>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/jorge.jpeg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">Jorge Inlago</a></h6>
              <p className="team-modern-status">Ingeniero Mecatrónico</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  {/* Different People*/}
  <section className="section section-sm">
    <div className="container">
      <h3 className="title-block find-car oh"><span className="d-inline-block wow slideInUp">Investigadores</span></h3>
      <div className="row row-30 justify-content-center box-ordered">
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="/storage/imagenes/FernandoVelasco.jpg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">Fernando Velasco</a></h6>
              <p className="team-modern-status">Ingeniero Electrónico</p>
            </div>
          </article>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/user-2-118x118.jpg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#" /></h6>
              <p className="team-modern-status" />
            </div>
          </article>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/user-3-118x118.jpg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#"></a></h6>
              <p className="team-modern-status"> </p>
              <p className="team-modern-status"> </p>
            </div>
          </article>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-3">
          {/* Team Modern*/}
          <article className="team-modern">
            <div className="team-modern-header"><a className="team-modern-figure" href="#"><img className="img-circles" src="images/user-4-118x118.jpg" alt width={118} height={118} /></a>
              <svg x="0px" y="0px" width="270px" height="70px" viewBox="0 0 270 70" enableBackground="new 0 0 270 70" xmlSpace="preserve">
                <g>
                  <path fill="#161616" d="M202.085,0C193.477,28.912,166.708,50,135,50S76.523,28.912,67.915,0H0v70h270V0H202.085z" />
                </g>
              </svg>
            </div>
            <div className="team-modern-caption">
              <h6 className="team-modern-name"><a href="#">  </a></h6>
              <p className="team-modern-status">    </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</div>
<section className="section section-sm section-fluid bg-default">
      <div className="container">
        <h3>Destinos</h3>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        pagination={{ clickable: true }}
        className="swiper-container"
      >
        {destinos.map((destino, index) => (
          <SwiperSlide key={index}>
            <LightGallery
              plugins={[lgThumbnail, lgZoom]}
              mode="lg-fade"
              elementClassNames="thumbnail-mary-figure"
            >
              <a href={destino.imgLarge} className="thumbnail-link">
                <div className="thumbnail-overlay">
                  <img src={destino.img} alt={destino.nombre} className="thumbnail-image" />
                  <div className="zoom-icon">
                    <span className="zoom-icon-inner"><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
                  </div>
                </div>
              </a>
            </LightGallery>
            <div className="thumbnail-mary-description">
              <h5 className="thumbnail-mary-project">{destino.nombre}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <section className="section section-fluid bg-default">
      <div className="parallax-container" style={{ backgroundImage: 'url(/storage/imagenes/5.jpg)' }}>
        <div className="parallax-content section-xl context-dark bg-overlay-26">
          <div className="container">
            <div className="row row-50 justify-content-center border-classic">
            <div className="col-sm-6 col-md-5 col-lg-3">
            <div className="counter-classic">
              <div className="counter-classic-number"><span className="counter">10</span>
              </div>
              <h5 className="counter-classic-title">Miembros</h5>
             
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-3">
            <div className="counter-classic">
              <div className="counter-classic-number"><span className="counter">20</span>
              </div>
              <h5 className="counter-classic-title">Conferencias</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-3">
            <div className="counter-classic">
              <div className="counter-classic-number"><span className="counter">100</span>
              </div>
              <h5 className="counter-classic-title">Publicaciones</h5>
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-3">
            <div className="counter-classic">
              <div className="counter-classic-number"><span className="counter">25</span>
              </div>
              <h5 className="counter-classic-title">Proyectos</h5>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>


  );
};


const researchers = [
  {
    name: "Gloria Díaz",
    role: "Ingeniera en sistemas",
    extraRole: "Ph.D en Ing Eléctrica",
    image: "images/Gloria.png"
  },
  {
    name: "Micaela Villa",
    role: "Ingeniera Mecánica",
    extraRole: "Msc. Ciencia de materiales",
    image: "images/user-2-118x118.jpg"
  },
  {
    name: "Norma Torres",
    role: "Licenciada en medicina general",
    image: "images/user-3-118x118.jpg"
  },
  {
    name: "Jorge Inlago",
    role: "Ingeniero Mecatrónico",
    image: "images/jorge.jpeg"
  }
];

const destinos = [
    { nombre: "Quito", img: "/storage/imagenes/gallery-image-11-420x308.jpg", imgLarge: "images/gallery-image-11-1200x800-original.jpg" },
    { nombre: "Cuenca", img: "/storage/imagenes/gallery-image-11-420x308.jpg", imgLarge: "images/gallery-image-12-1200x800-original.jpg" },
    { nombre: "Guayaquil", img: "/storage/imagenes/gallery-image-11-420x308.jpg", imgLarge: "images/gallery-image-13-1200x800-original.jpg" },
    { nombre: "Bogotá", img: "/storage/imagenes/gallery-image-11-420x308.jpg", imgLarge: "images/gallery-image-14-1200x800-original.jpg" },
    { nombre: "Medellín", img: "/storage/imagenes/gallery-image-11-420x308.jpg", imgLarge: "images/gallery-image-15-1200x800-original.jpg" },
    { nombre: "Lima", img: "/storage/imagenes/gallery-image-11-420x308.jpg", imgLarge: "images/gallery-image-16-1200x800-original.jpg" },
];

export default AboutUsPage;
