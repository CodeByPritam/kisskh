import Carousel from "@/components/site/carousel";
import ContentCarousel from "@/components/site/ContentCarousel";

// Dummy Response
const lucResonse = {
  id: 634649,
  title: 'Spider-Man: No Way Home',
  description: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero',
}

// Export Master Home
export default function MasterHome() {
  return (
    <div id="__appbody">
      <Carousel/>
      <div className="home-section">
        <ContentCarousel section="Latest Update" viewMoreLink="explore/latest-update" response={lucResonse}/>
      </div>
    </div>
  );
}