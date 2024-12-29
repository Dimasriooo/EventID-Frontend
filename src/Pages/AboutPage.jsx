import React from 'react';
import { Star, StarHalf } from 'lucide-react';


function AboutPage() {
   const reviews = [
    {
      id: 1,
      name: "Jessica Anderson",
      rating: 5,
      comment: "EventID made my dream wedding come true! The attention to detail was incredible. From the venue decoration to the timeline management, everything was perfect.",
      eventType: "Wedding Party",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "The catering service was exceptional! The food presentation was beautiful and guests couldn't stop praising the taste. Perfect for our corporate event.",
      eventType: "Catering Service",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Sarah Wilson",
      rating: 4,
      comment: "My daughter's sweet sixteen was a blast! The themed decorations and entertainment were spot on. The team was very accommodating with last-minute changes.",
      eventType: "Birthday Party",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Robert Martinez",
      rating: 5,
      comment: "The catering team went above and beyond! They handled our dietary restrictions perfectly and the menu variety was impressive. Will definitely use again.",
      eventType: "Catering Service",
      date: "March 2024"
    },
    {
      id: 5,
      name: "Emily Thompson",
      rating: 5,
      comment: "Our intimate wedding was exactly how we imagined it. The team's coordination with vendors was seamless, and they stayed within our budget!",
      eventType: "Wedding Party",
      date: "February 2024"
    },
    {
      id: 6,
      name: "David Kim",
      rating: 5,
      comment: "Amazing birthday party planning! The surprise elements they arranged were perfect, and the kids had so much fun with the activities.",
      eventType: "Birthday Party",
      date: "March 2024"
    }
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="p-10 mt-16 from-blue-500 to-purple-600">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">
          Customer Reviews
        </h2>
        <p className="text-3xl font-bold mb-6">
          See what our customers have to say about their experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-stone-100/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xl text-white">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <p className="text-gray-600 mb-3">{review.comment}</p>
              
              <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
                <span>{review.eventType}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutPage;