"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import 'swiper/css/navigation';

// @interface:: Props
interface Props {
  section: string;
  viewMoreLink: string;
  response: any;
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
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".embla-prev",
                        nextEl: ".embla-next",
                    }}
                    spaceBetween={0}
                    slidesPerView={4}
                    className="embla-grid"
                >

                    {response.map((res: any, index: any) => {
                        return (
                            <SwiperSlide className="embla-slide" key={index}>
                                <Link href={`/${res.type}${res.slug}`}>
                                    <div className="poster">
                                        <div className="is subbed">Sub</div>
                                        <div className="is status complete">Complete</div>
                                        <Image src={res.image} alt={res.title} width={1280} height={720} loading='lazy'/>
                                        <div className="episode">EP {res.episode}</div>
                                    </div>
                                    <div className="title">{res.title}</div>
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