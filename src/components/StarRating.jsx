import { useState, useEffect } from "react";
import "./StarRating.css";

export default function StarRating({ gameId, gameName }) {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (gameId) {
            // Load existing rating from localStorage
            const savedRatings = localStorage.getItem("gameRatings");
            if (savedRatings) {
                try {
                    const ratingsData = JSON.parse(savedRatings);
                    const existingRating = ratingsData[gameId];
                    if (existingRating) {
                        setRating(existingRating);
                    }
                } catch (error) {
                    console.error("Error loading ratings:", error);
                }
            }
        }
    }, [gameId]);

    const handleStarClick = (starIndex) => {
        setRating(starIndex + 1);
        setSubmitted(false);
    };

    const handleSubmit = () => {
        if (rating > 0 && gameId) {
            // Save rating to localStorage
            const savedRatings = localStorage.getItem("gameRatings");
            const ratingsData = savedRatings ? JSON.parse(savedRatings) : {};
            ratingsData[gameId] = rating;
            ratingsData[`${gameId}_name`] = gameName;
            localStorage.setItem("gameRatings", JSON.stringify(ratingsData));

            setSubmitted(true);
            // Reset after 2 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 2000);
        }
    };

    return (
        <div className='star-rating-container'>
            <h3>Rate this game</h3>
            <div className='stars'>
                {[...Array(5)].map((_, index) => (
                    <button
                        key={index}
                        className={`star ${index < rating ? "filled" : ""}`}
                        onClick={() => handleStarClick(index)}
                        aria-label={`Rate ${index + 1} stars`}>
                        ★
                    </button>
                ))}
            </div>
            {rating > 0 && (
                <div className='rating-display'>
                    <p>{rating} / 5 stars</p>
                    <button
                        className='submit-rating'
                        onClick={handleSubmit}>
                        Submit Rating
                    </button>
                </div>
            )}
            {submitted && (
                <p className='rating-submitted'>Thanks for rating!</p>
            )}
        </div>
    );
}
