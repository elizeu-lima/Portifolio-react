import './Portifolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicaApp from '../../img/musicapp.png';
import 'swiper/css'

const Portifolio = () =>{
    return(
        <div className="portifolio">
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portifolio</span>

            {/* slider */}

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portifolio-slider'>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={MusicaApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portifolio