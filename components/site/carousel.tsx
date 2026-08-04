"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

import Image from 'next/image';
import Link from 'next/link';

import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Export Master Carousel
export default function Carousel() {
    return (
        <>
            <button className="swiper-prev">
                <ChevronLeft size={28} strokeWidth={4}/>
            </button>

            <button className="swiper-next">
                <ChevronRight size={28} strokeWidth={4}/>
            </button>

            <Swiper
                spaceBetween={0}
                centeredSlides={false}
                autoplay={{ 
                    delay: 3000, 
                    disableOnInteraction: false, 
                    pauseOnMouseEnter: true 
                }}
                pagination={{ clickable: false, }}
                navigation={{
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next",
                }}
                speed={800}
                parallax={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation, Parallax]}
                className="CarouselSwiper"
            >

                <SwiperSlide>
                    <Link className="single-caro" href={"/tv-shows/when-life-gives-you-tangerines"}>
                        <div className="poster-wrapper">
                            <Image src={"https://image.tmdb.org/t/p/original/flxau5Iu7bChQHsESqvGZ3FQRaI.jpg"} alt="Spiderman: Brand New day" width={1920} height={1080} />
                            <div className="gradient-horizontal"></div>
                            <div className="gradient-bottom"></div>
                        </div>
                        <div className="meta-caro">
                            <Image src={'https://image.tmdb.org/t/p/w500/2y6qVk9YIPxTzO43anxUQ9iTuh4.png'} alt="Spiderman: BND" width={960} height={378} data-swiper-parallax="-400"/>
                            <div className="quick-display" data-swiper-parallax="-370">
                                <div className="rating">
                                    <Sparkles className="star-icon" size={20} />
                                    <span>4.7</span>
                                </div>
                                <div className="release-year">
                                    <span className="dot">•</span>
                                    2026
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Horror
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Sci-Fi
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Action
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Comedy
                                </div>
                            </div>
                            <p className="short-desc" data-swiper-parallax="-340">
                                A cybersecurity expert becomes a whistleblower after uncovering secrets about
                                aliens, putting him on the run from a corporation. Meanwhile, a meteorologist
                                experiencing strange phenomena joins forces with him to prove theres life
                                beyond our understanding.
                            </p>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link className="single-caro" href={"/tv-shows/when-life-gives-you-tangerines"}>
                        <div className="poster-wrapper">
                            <Image src={"https://image.tmdb.org/t/p/original/flxau5Iu7bChQHsESqvGZ3FQRaI.jpg"} alt="Spiderman: Brand New day" width={1920} height={1080} />
                            <div className="gradient-horizontal"></div>
                            <div className="gradient-bottom"></div>
                        </div>
                        <div className="meta-caro">
                            <Image src={'https://image.tmdb.org/t/p/w500/2y6qVk9YIPxTzO43anxUQ9iTuh4.png'} alt="Spiderman: BND" width={960} height={378} data-swiper-parallax="-400"/>
                            <div className="quick-display" data-swiper-parallax="-370">
                                <div className="rating">
                                    <Sparkles className="star-icon" size={20} />
                                    <span>4.7</span>
                                </div>
                                <div className="release-year">
                                    <span className="dot">•</span>
                                    2026
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Horror
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Sci-Fi
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Action
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Comedy
                                </div>
                            </div>
                            <p className="short-desc" data-swiper-parallax="-340">
                                A cybersecurity expert becomes a whistleblower after uncovering secrets about
                                aliens, putting him on the run from a corporation. Meanwhile, a meteorologist
                                experiencing strange phenomena joins forces with him to prove theres life
                                beyond our understanding.
                            </p>
                        </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link className="single-caro" href={"/tv-shows/when-life-gives-you-tangerines"}>
                        <div className="poster-wrapper">
                            <Image src={"https://image.tmdb.org/t/p/original/flxau5Iu7bChQHsESqvGZ3FQRaI.jpg"} alt="Spiderman: Brand New day" width={1920} height={1080} />
                            <div className="gradient-horizontal"></div>
                            <div className="gradient-bottom"></div>
                        </div>
                        <div className="meta-caro">
                            <Image src={'https://image.tmdb.org/t/p/w500/2y6qVk9YIPxTzO43anxUQ9iTuh4.png'} alt="Spiderman: BND" width={960} height={378} data-swiper-parallax="-400"/>
                            <div className="quick-display" data-swiper-parallax="-370">
                                <div className="rating">
                                    <Sparkles className="star-icon" size={20} />
                                    <span>4.7</span>
                                </div>
                                <div className="release-year">
                                    <span className="dot">•</span>
                                    2026
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Horror
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Sci-Fi
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Action
                                </div>
                                <div className="genre">
                                    <span className="dot">•</span>
                                    Comedy
                                </div>
                            </div>
                            <p className="short-desc" data-swiper-parallax="-340">
                                A cybersecurity expert becomes a whistleblower after uncovering secrets about
                                aliens, putting him on the run from a corporation. Meanwhile, a meteorologist
                                experiencing strange phenomena joins forces with him to prove theres life
                                beyond our understanding.
                            </p>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </>
    );
}