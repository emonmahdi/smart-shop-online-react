import img1 from "../../assets/company/Healthline-img 1.png";
import img2 from "../../assets/company/MSN-logo 1.png";
import img3 from "../../assets/company/shefinds-logo 1.png";
import img4 from "../../assets/company/yahoo-img 1.png";
import img5 from "../../assets/company/yahoo-news-img 1.png";
import img6 from "../../assets/company/yahoo-news-img 3.png";
import SectionHeading from "../../components/ui/SectionHeading";

const logos = [img1, img2, img3, img4, img5, img6];

const CompanyLogos = () => {
  return (
    <section className="py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title={"Trusted by Top Brands"} />

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex w-max gap-16 animate-logoSlide items-center">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="min-w-[180px] flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Company Logo"
                  loading="lazy"
                  className="max-h-[56px] w-auto object-contain opacity-90 hover:opacity-100 transition"
                  style={{
                    imageRendering: "auto",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
