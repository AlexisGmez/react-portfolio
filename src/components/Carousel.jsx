import React from 'react'

const Carousel = ({ img1,img2,img3,title,title2,title3}) => {
  return (
    <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h3>{ title }</h3>
                    <a href="https://e-commerce-vanilla.netlify.app" target='_blank'><img src={img1} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                    <h3>{ title2 }</h3>
                    <a href="https://weatherapp-alexis-academlo.netlify.app/" target='_blank'><img src={img2} className="d-block w-100" alt="..." /></a>
                </div>
                <div className="carousel-item">
                    <h3>{ title3 }</h3>
                    <a href="https://rickandmorty-alexis.netlify.app/" target='_blank'><img src={img3} className="d-block w-100" alt="..." /></a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </>
  )
}

export default Carousel
