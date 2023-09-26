import { useEffect, useState } from "react";
import Dishes from "./dishes/dishes";
import img1 from "@/assets/dashboard-images/img-1.jpg";
import img2 from "@/assets/dashboard-images/img-2.jpg";
import img3 from "@/assets/dashboard-images/img-3.jpg";
import img4 from "@/assets/dashboard-images/img-4.jpg";

export default function Home() {
  const carouselImages = [img1, img2, img3, img4];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const requestId = setInterval(() => {
      if (currentImgIndex === 3) {
        setCurrentImgIndex(0);
      } else {
        setCurrentImgIndex((currentImgIndex) => currentImgIndex + 1);
      }
    }, 4000);
    return () => {
      clearInterval(requestId);
    };
  }, [currentImgIndex]);

  return (
    <div className="flex flex-col">
      <div className="h-[512px] overflow-hidden">
        <img
          key={carouselImages[currentImgIndex]}
          className="w-full object-cover "
          src={carouselImages[currentImgIndex]}
          alt=""
        />
      </div>
      <div>
        <div className="container mx-auto max-w-4xl lg:max-w-6xl my-8 px-4 md:px-6">
          <h2 className="text-3xl font-semibold text-gray-700">Best Seller</h2>
          <p className="text-gray-400">
            Just vegan's best sold dishes are here
          </p>
        </div>
        <Dishes></Dishes>
      </div>
    </div>
  );
}
