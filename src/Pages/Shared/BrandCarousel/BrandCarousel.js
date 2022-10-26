import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarousel = () => {
    return (
        <Carousel fade className='mt-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="Assets\Brand\brand1.jpg"
                    alt="First slide"
                    height={200}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="Assets\Brand\brand2.jpg"
                    alt="Second slide"
                    height={200}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="Assets\Brand\brand3.jpg"
                    alt="Third slide"
                    height={200}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;