import React from 'react';

function AboutPage() {
  const articles = [
    { id: 1, title: 'Article 1', category: 'Category', description: 'Lorem ipsum dolor sit amet.', img: 'article1.jpg' },
    { id: 2, title: 'Article 2', category: 'Category', description: 'Consectetur adipiscing elit.', img: 'article2.jpg' },
  ];

  const reviews = [
    { id: 1, customer: 'Customer 1', review: 'Outstanding! Highly recommended.', rating: 5 },
    { id: 2, customer: 'Customer 2', review: 'Excellent service and fast delivery.', rating: 5 },
  ];

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-6">Discover Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map(article => (
          <div key={article.id} className="border rounded-lg shadow-md p-4">
            <img src={article.img} alt={article.title} className="rounded mb-4" />
            <h3 className="font-semibold text-lg">{article.title}</h3>
            <p className="text-gray-600">{article.category}</p>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-10">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        {reviews.map(review => (
          <div key={review.id} className="border rounded-lg shadow-md p-4">
            <h4 className="font-bold text-lg">{review.customer}</h4>
            <p className="text-gray-600">{review.review}</p>
            <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;