import React from 'react';
import { Sliders, Globe2, Star, Headphones, Flame, Wallet } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-default">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="text-teal-500">
          <Icon size={28} strokeWidth={1.5} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group">
          <span className="cursor-pointer hover:text-teal-500 transition-colors duration-300">
            {title}
          </span>
        </h3>
        <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: Sliders,
      title: "Personalized Matching",
      description: "Our unique matching system lets you find just the tour you want for your next holiday."
    },
    {
      icon: Globe2,
      title: "Wide Variety of Tours",
      description: "We offer a wide variety of personally picked tours with destinations all over the globe."
    },
    {
      icon: Star,
      title: "Highly Qualified Service",
      description: "Our tour managers are qualified, skilled, and friendly to bring you the best service."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "You can always get professional support from our staff 24/7 and ask any question you have."
    },
    {
      icon: Flame,
      title: "Handpicked Hotels",
      description: "Our team offers only the best selection of affordable and luxury hotels to our clients."
    },
    {
      icon: Wallet,
      title: "Best Price Guarantee",
      description: "If you find tours that are cheaper than ours, we will compensate the difference."
    }
  ];

  return (
    <>
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 mt-12">
          Our Services
        </h2>
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8" 
          style={{
            gridTemplateRows: 'auto auto',
            gridAutoFlow: 'row'
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
    
{/* Section Subscribe */}
<section
  className="section bg-default text-center offset-top-50"
  style={{
    backgroundColor: '#CECFD0', // color de fondo
    padding: '50px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh'
  }}
>
  <div
    className="parallax-container"
    data-parallax-img="images/parallax-1-1920x850.jpg"
    style={{
      textAlign: 'center',
      maxWidth: '800px',
      padding: '10px',
    }}
  >
    <div
      className="parallax-content section-xl section-inset-custom-1 context-dark bg-overlay-2-21"
      style={{
        backgroundColor: '#CECFD0', // color de fondo
        padding: '10px',
        borderRadius: '8px',
      }}
    >
      <div className="container">
        <h2
          className="heading-2 oh font-weight-normal wow slideInDown"
          style={{
            fontSize: '3em',// tamaño de la fuente
            lineHeight: '1.1em', // tamaño de la línea
            color: '#ffffff',
            marginBottom: '10px',
          }}
        >
          <span className="d-block font-weight-semi-bold">First-class Impressions</span>
          <div></div>
          <span className="d-block font-weight-light">are Waiting for You!</span>
        </h2>
        <p
          className="text-width-medium text-spacing-75 wow fadeInLeft"
          data-wow-delay=".1s"
          style={{
            color: '#ffffff',
            fontSize: '1.0em',
            lineHeight: '1.5em',
            marginBottom: '30px',
          }}
        >
          Our agency offers travelers various tours and excursions with destinations all over the world. Browse our website to find your dream tour!
        </p>
        <a
          className="button button-secondary button-pipaluk"
          href="#"
          style={{
            backgroundColor: '#00bfa5',
            color: '#ffffff',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.1em',
            borderRadius: '0px',
            cursor: 'pointer',
            transition: '0.3s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e0e0e0';
            e.target.style.color = '#01B3A7';
            e.target.style.border = '2px solid #00bfa5';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#01B3A7';
            e.target.style.color = '#ffffff';
            e.target.style.border = 'none';
          }}
        >
          Book a Tour Now
        </a>
      </div>
    </div>
  </div>
</section>


</>

  );
};

export default ServicesSection;