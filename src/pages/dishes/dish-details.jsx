import { useLocation, useParams } from "react-router-dom";
import { API_BASE_PATH } from "@/helpers/constants";
import { useState, useEffect } from "react";

export default function DishDetails() {
  let params = useParams();
  console.log(`params dish details`);
  console.log(params);

  const [dishDetails, setDisheDetails] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(`${API_BASE_PATH}/dishes/${params.dishId}`);
      const data = await response.json();
      console.log(data);
      setDisheDetails(data.payload);
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Dish detail page.</h1>

      {dishDetails.dishName}
      {dishDetails.price}
    </div>
  );
}
