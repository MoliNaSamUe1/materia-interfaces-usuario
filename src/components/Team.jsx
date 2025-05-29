import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Team = (props) => {
  console.log("Team Data:", props.data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        {/* Título y descripción */}
        <div className="section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
  
        {/* Carrusel */}
        <div className="team-carousel-wrapper">
          <Slider {...settings}>
            {Array.isArray(props.data) && props.data.length > 0
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="team">
                    <div className="thumbnail">
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : <p>No team data available</p>}
          </Slider>
        </div>
      </div>
    </div>
  );
};