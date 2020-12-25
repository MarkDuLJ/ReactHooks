import React from "react";
import Star from "./Star";
const createArray = (len) => [...Array(len)];

export default function StarRating({
  selectedStars = 0,
  totalStars = 10,
  onRate,
}) {
  //   const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
