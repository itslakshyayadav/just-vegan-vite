import { useEffect, useState } from "react";
import Dishes from "./dishes/dishes";

export default function Home() {
  const carouselImages = [
    "https://img.freepik.com/free-photo/fresh-vegetarian-salad-healthy-gourmet-meal-generated-by-ai_188544-18507.jpg?t=st=1692968421~exp=1692972021~hmac=b0c745a2cac9e575afc15fcd54525636b9e4a4c6fd6f12a404eb226909889c4e&w=1380",
    "https://img.freepik.com/free-photo/cutting-board-with-vegetables-it-including-broccoli-carrots-peppers-other-vegetables_188544-18539.jpg?t=st=1692968541~exp=1692972141~hmac=3a76a738eb729e5ff58bc64df5177108900f8c9b1643ff4f4d84f1cc5bba1520&w=1380",
    "https://img.freepik.com/free-photo/vegan-buddha-bowl-sweet-potatoes-blueberries-avocados-cabbage-orange-dietary-food-top-view-free_1258-166453.jpg?t=st=1692968726~exp=1692972326~hmac=d01ca7b7009354b4d4174d8f46334c9a550e536252cfa289801562c5bb776503&w=1380",
    "https://img.freepik.com/free-photo/healthy-vegetarian-salad-bowl-with-fresh-organic-ingients-generated-by-ai_24640-81757.jpg?t=st=1692969328~exp=1692972928~hmac=cecf4fa634789366dc5bfd81686b303918c8fdda511832fdf2d44c606978808e&w=1380",
  ];

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
      <div className="max-h-[512px] overflow-hidden">
        <img
          key={carouselImages[currentImgIndex]}
          className="w-full object-cover slide-left"
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
