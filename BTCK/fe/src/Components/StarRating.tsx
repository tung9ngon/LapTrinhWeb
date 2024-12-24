import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number | null;
  onRatingChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const [averageRating, setAverageRating] = useState<number | null>(null);

  const fetchAverageRating = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/ratings");
      const data = await response.json();
      const avg = data.reduce((acc: number, curr: { rating: number }) => acc + curr.rating, 0) / data.length;
      setAverageRating(avg);
    } catch (error) {
      console.error("Lỗi khi lấy đánh giá:", error);
    }
  };

  useEffect(() => {
    fetchAverageRating();
  }, []);

  const handleStarClick = async (selectedRating: number) => {
    onRatingChange(selectedRating);
    try {
      await fetch("http://localhost:5000/api/ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: selectedRating }),
      });
      fetchAverageRating(); // Lấy lại các đánh giá sau khi gửi
    } catch (error) {
      console.error("Lỗi khi gửi đánh giá:", error);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starValue = i;
      const isFilled = rating !== null && starValue <= rating;

      stars.push(
        <FaStar
          key={starValue}
          className={`cursor-pointer w-12 h-12 mr-2 ${isFilled ? "text-yellow-500" : "text-gray-300"}`}
          onClick={() => handleStarClick(starValue)}
        />
      );
    }
    return stars;
  };

  return (
    <div className="flex flex-row">
      {renderStars()}
      <div className="ml-4">{averageRating && `Đánh giá trung bình: ${averageRating.toFixed(1)}`}</div>
    </div>
  );
};

export default StarRating;
