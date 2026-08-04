import { Menu, Search, Heart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

// Export Master Header ({ Frontend: Site })
export default function MasterHeader() {
    return (
        /* --- Header: Begin --- */
        <header id="__header">
            <div className="_inner">
                <div className="lsb">
                    <div className="hamburger"> <Menu/> </div>
                    <Link href={"/"} className="site-logo">
                        <Image src="/site-logo.svg" alt="KissKH" width={120} height={32} loading="eager" />
                    </Link>
                    <div className="main-menu">
                        <Link className="elm active" href={"/"} >Home</Link>
                        <Link className="elm" href={"/movies"} >Movies</Link>
                        <Link className="elm" href={"/tv-shows"} >TV Shows</Link>
                        <Link className="elm" href={"/anime"} >Anime</Link>
                        <Link className="elm" href={"/explore"} >Explore</Link>
                    </div>
                </div>
                <div className="rsb">
                    <Link href={"/search"} className="toggle-search"> <Search/> Search </Link>
                    <Link href={"/my-list"} className="my-list"> <Heart/> My List </Link>
                </div>
            </div>
        </header>
        /* --- Header: End --- */
    );
}