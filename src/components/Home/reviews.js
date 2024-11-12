import React, { useState, useEffect } from "react";

function Reviews() {
    const reviews = [
        {
            rating: 5,
            text: "Amazing experience! The instructors were so patient and helped me gain confidence on the road.",
            author: "Alex M.",
        },
        {
            rating: 5,
            text: "I passed my test on the first try thanks to their guidance. Highly recommend this driving school!",
            author: "Lisa R.",
        },
        {
            rating: 4,
            text: "Great instructors and flexible schedule. I felt really prepared for my driving test.",
            author: "Chris L.",
        },
        {
            rating: 5,
            text: "Professional and friendly! They made learning to drive a fun and safe experience.",
            author: "Sarah B.",
        },
        {
            rating: 4,
            text: "Excellent lessons and practical advice. They really focus on safe driving habits.",
            author: "Tom H.",
        },
    ];

    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prevIndex) =>
                prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change review every 5 seconds

        return () => clearInterval(interval); // Clean up on component unmount
    }, [reviews.length]);

    const currentReview = reviews[currentReviewIndex];

    return (
        <div
            className="flex items-center justify-center w-full bg-gray-200"
            style={{
                minHeight: "30vh",
                paddingBottom: "2rem",
            }}
        >
            <div className="flex flex-col items-start justify-start text-center w-full max-w-screen-lg px-5 pt-10">
                <div className="flex w-full flex-col md:w-[100%]">
                    <div className="pt-10">
                        <h2 className="text-4xl md:text-5xl font-semibold text-black pb-4">
                            Customer Reviews
                        </h2>

                        {/* Display only the current review */}
                        <div className="transition-all duration-500 ease-in-out">
                            <p className="font-poppins text-xl md:text-2xl text-black mt-4">
                                "{currentReview.text}"
                            </p>
                            <p className="font-semibold text-gray-600 mt-2 text-lg md:text-xl">
                                — {currentReview.author}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
