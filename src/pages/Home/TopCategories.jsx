// import React from "react";
// import SectionHeading from "../../components/ui/SectionHeading";

// const TopCategories = () => {
//   return (
//     <div>
//       <SectionHeading
//         title="Top Categories"
//         subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam."
//         align="center"
//       />
//     </div>
//   );
// };

// export default TopCategories;

 

import image from '../../assets/mouse.png'
import image2 from '../../assets/blutooth.png'
import image3 from '../../assets/mobile.png'
import image4 from '../../assets/headphones.png'
import CategoryCard from '../../components/ui/CategoryCard';
import SectionHeading from '../../components/ui/SectionHeading';

const categories = [
  {
    id: 1,
    title: "Electronics",
    image:image,
    height: "h-[420px]",
  },
  {
    id: 2,
    title: "Fashion",
    image: image2,
    height: "h-[200px]",
  },
  {
    id: 3,
    title: "Accessories",
    image: image3,
    height: "h-[200px]",
  },
  {
    id: 4,
    title: "Home & Kitchen",
    image: image4,
    height: "h-[420px]",
  },
];

const TopCategories = () => {
  return (
    <section className="py-14 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <SectionHeading
          title="Top Categories"
          subtitle="Browse products by categories and discover what suits your lifestyle best"
          align="center"
        />

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Left Column */}
          <CategoryCard item={categories[0]} />

          {/* Center Column (2 images) */}
          <div className="flex flex-col gap-6">
            <CategoryCard item={categories[1]} />
            <CategoryCard item={categories[2]} />
          </div>

          {/* Right Column */}
          <CategoryCard item={categories[3]} />

        </div>
      </div>
    </section>
  );
};

export default TopCategories;
