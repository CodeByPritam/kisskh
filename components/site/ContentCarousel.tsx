"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import 'swiper/css/navigation';

// @interface:: Props
interface Props {
  section: string;
  viewMoreLink: string;
  response: object;
}

// Export ContentCarousel ({ Frontend: Site })
export default function ContentCarousel({ section, viewMoreLink, response }: Props) {
    return (
        <section className="embla-carousel rail-section">
            <div className="top-row">
                <div className="section-name">{section}</div>
                <Link href={viewMoreLink} className="view-more">View More <ChevronRight size={18} strokeWidth={4}/> </Link>
            </div>
            <div className="rail-grid">
                <Swiper
                    centeredSlides={false}
                    modules={[Virtual, Navigation]}
                    virtual
                    navigation={{
                        prevEl: ".embla-prev",
                        nextEl: ".embla-next",
                    }}
                    spaceBetween={0}
                    slidesPerView={8}
                    slidesPerGroup={4}
                    className="embla-grid"
                >

                    {Array.from({ length: 100 }, (_, index) => {
                        return (
                            <SwiperSlide className="embla-slide" key={index} virtualIndex={index}>
                                <Link href={"/tv-shows/dream-to-you"}>
                                    <div className="poster">
                                        <div className="isComplete">Complete</div>
                                        <Image src={"https://image.tmdb.org/t/p/w1000_and_h563_face/feISh3qoREwIPWbSaLqqumbmh7m.jpg"} width={1280} height={720} alt="Dream"/>
                                        <div className="type">Drama</div>
                                        <div className="episode">Ep: 12</div>
                                        <div className="uploadAt">2h ago</div>
                                    </div>
                                    <div className="title">Spiderman: Brand New Day</div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
                <button className="embla-prev"> <ChevronLeft size={22} strokeWidth={4}/> </button>
                <button className="embla-next"> <ChevronRight size={22} strokeWidth={4}/> </button>
            </div>
        </section>
    );
}