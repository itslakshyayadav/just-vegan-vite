import { useEffect, useState } from "react";
import Dishes from "./dishes/dishes";

export default function Home() {
  const carouselImages = [
    "https://wallpapers.com/images/hd/food-4k-1pf6px6ryqfjtnyr.jpg",
    "https://wallpapersmug.com/download/1920x1080/ddcbbf/food-pizza-baking.jpg",
    "https://c4.wallpaperflare.com/wallpaper/869/719/717/cuisine-food-india-indian-wallpaper-preview.jpg",
    "https://arcoguesthouse.com/wp-content/uploads/2021/02/Why-food-is-for-the-mind-and-soul-in-restaurants.jpg",
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const requestId = setInterval(() => {
      if (currentImgIndex === 3) {
        setCurrentImgIndex(0);
      } else {
        setCurrentImgIndex((currentImgIndex) => currentImgIndex + 1);
      }
    }, 3000);

    return () => {
      clearInterval(requestId);
    };
  }, [currentImgIndex]);

  return (
    <div className="flex flex-col">
      <div className="max-h-[512px] overflow-hidden">
        <img
          key={carouselImages[currentImgIndex]}
          className="w-full object-cover slide-left"
          src={carouselImages[currentImgIndex]}
          alt=""
        />
      </div>
      <Dishes></Dishes>
    </div>
  );
}
