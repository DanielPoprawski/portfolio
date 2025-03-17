// ReviewSection.jsx
import React, { useState, useEffect } from "react";
import { Star, ThumbsUp, MessageSquare, Flag, ChevronLeft, ChevronRight } from "lucide-react";

export default function ReviewSection() {
      const [newReview, setNewReview] = useState({
            rating: 0,
            comment: "",
      });

      // Sample reviews
      const [allReviews, setAllReviews] = useState([
            {
                  id: 1,
                  author: "Emily Johnson",
                  avatar: `https://placehold.co/64?text=Emily+Johnson`,
                  date: "March 10, 2025",
                  rating: 5,
                  comment: "Absolutely love the design of this website! The responsive layout works perfectly on all my devices and the color scheme is beautiful.",
                  helpful: 12,
                  replies: 2,
                  liked: false,
            },
            {
                  id: 2,
                  author: "Michael Smith",
                  avatar: "https://placehold.co/64?text=Michael+Smith",
                  date: "March 8, 2025",
                  rating: 4,
                  comment: "Great job on the user interface, very intuitive. Only suggestion would be to improve the loading speed slightly for the image gallery.",
                  helpful: 8,
                  replies: 0,
                  liked: false,
            },
            {
                  id: 3,
                  author: "Sarah Williams",
                  avatar: "https://placehold.co/64?text=Sarah+William",
                  date: "March 5, 2025",
                  rating: 5,
                  comment: "The contact form worked flawlessly and I received a prompt response. Very professional service!",
                  helpful: 15,
                  replies: 3,
                  liked: false,
            },
      ]);

      // Pagination state
      const [currentPage, setCurrentPage] = useState(1);
      const reviewsPerPage = 2;
      const [paginatedReviews, setPaginatedReviews] = useState([]);
      const [totalPages, setTotalPages] = useState(0);

      // Update pagination when allReviews changes
      useEffect(() => {
            setTotalPages(Math.ceil(allReviews.length / reviewsPerPage));
            updatePaginatedReviews();
      }, [allReviews, currentPage]);

      // Update the paginated reviews based on current page
      const updatePaginatedReviews = () => {
            const startIndex = (currentPage - 1) * reviewsPerPage;
            const endIndex = startIndex + reviewsPerPage;
            setPaginatedReviews(allReviews.slice(startIndex, endIndex));
      };

      const handleRatingChange = (rating) => {
            setNewReview((prev) => ({ ...prev, rating }));
      };

      const handleCommentChange = (e) => {
            setNewReview((prev) => ({ ...prev, comment: e.target.value }));
      };

      const handleSubmitReview = (e) => {
            e.preventDefault();
            if (newReview.rating === 0 || newReview.comment.trim() === "") {
                  alert("Please provide both a rating and a comment");
                  return;
            }

            const newReviewObj = {
                  id: allReviews.length > 0 ? Math.max(...allReviews.map((r) => r.id)) + 1 : 1,
                  author: "You",
                  avatar: "https://placehold.co/64",
                  date: new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                  }),
                  rating: newReview.rating,
                  comment: newReview.comment,
                  helpful: 0,
                  replies: 0,
                  liked: false,
            };

            // Add new review to the beginning and reset to first page to see it
            setAllReviews([newReviewObj, ...allReviews]);
            setCurrentPage(1);
            setNewReview({ rating: 0, comment: "" });
      };

      const handleHelpfulClick = (reviewId) => {
            setAllReviews(
                  allReviews.map((review) => (review.id === reviewId ? { ...review, liked: !review.liked } : review))
            );
      };

      // Calculate average rating
      const averageRating =
            allReviews.length > 0
                  ? (allReviews.reduce((sum, review) => sum + review.rating, 0) / allReviews.length).toFixed(1)
                  : 0;

      // Pagination handlers
      const goToPage = (page) => {
            if (page >= 1 && page <= totalPages) {
                  setCurrentPage(page);
            }
      };

      const goToPrevPage = () => {
            if (currentPage > 1) {
                  setCurrentPage(currentPage - 1);
            }
      };

      const goToNextPage = () => {
            if (currentPage < totalPages) {
                  setCurrentPage(currentPage + 1);
            }
      };

      // Render page numbers
      const renderPageNumbers = () => {
            const pages = [];
            const maxVisiblePages = 5;

            let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

            if (endPage - startPage + 1 < maxVisiblePages) {
                  startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                  pages.push(
                        <button
                              key={i}
                              onClick={() => goToPage(i)}
                              className={`px-3 py-1 rounded-md mx-1 ${
                                    i === currentPage ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"
                              }`}
                        >
                              {i}
                        </button>
                  );
            }
            return pages;
      };

      // Render stars for ratings
      const renderStars = (rating, interactive = false) => {
            return Array(5)
                  .fill(0)
                  .map((_, index) => (
                        <Star
                              key={index}
                              size={interactive ? 24 : 16}
                              className={`${index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} ${
                                    interactive ? "cursor-pointer" : ""
                              }`}
                              onClick={interactive ? () => handleRatingChange(index + 1) : undefined}
                        />
                  ));
      };

      return (
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-black min-w-full">
                  <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

                  {/* Review summary */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                        <div className="flex items-center">
                              <div className="text-4xl font-bold mr-2">{averageRating}</div>
                              <div>
                                    <div className="flex text-yellow-500">{renderStars(Math.round(averageRating))}</div>
                                    <div className="text-sm text-gray-500">{allReviews.length} reviews</div>
                              </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                              <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Web Design</div>
                              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                    User Experience
                              </div>
                              <div className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs">Performance</div>
                        </div>
                  </div>

                  {/* Write a review */}
                  <div className="mb-4 p-4 bg-white rounded-lg">
                        <h3 className="font-bold text-lg mb-1 ml-1">Write a Review</h3>
                        <form onSubmit={handleSubmitReview}>
                              <div className="flex space-x-4 mb-3 ml-1">
                                    <div className="flex align-middle">{renderStars(newReview.rating, true)}</div>
                              </div>
                              <textarea
                                    id="review"
                                    rows="3"
                                    value={newReview.comment}
                                    onChange={handleCommentChange}
                                    className="w-full px-3 mb-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Share your experience..."
                              />
                              <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
                              >
                                    Submit Review
                              </button>
                        </form>
                  </div>

                  {/* Review list */}
                  <div className="space-y-6">
                        {paginatedReviews.length > 0 ? (
                              paginatedReviews.map((review) => (
                                    <div key={review.id} className="bg-white p-4 rounded-lg">
                                          <div className="flex justify-between">
                                                <div className="flex">
                                                      <img
                                                            src={review.avatar}
                                                            alt={review.author}
                                                            className="w-10 h-10 rounded-full mr-3"
                                                      />
                                                      <div>
                                                            <div className="font-medium">{review.author}</div>
                                                            <div className="text-sm text-gray-500">{review.date}</div>
                                                      </div>
                                                </div>
                                                <div className="flex">{renderStars(review.rating)}</div>
                                          </div>

                                          <div className="mt-3">
                                                <p className="text-gray-700">{review.comment}</p>
                                          </div>

                                          <div className="mt-4 flex text-sm text-gray-500">
                                                <button
                                                      className={`flex items-center mr-4 hover:text-blue-500 ${
                                                            review.liked && `text-blue-700`
                                                      }`}
                                                      onClick={() => handleHelpfulClick(review.id)}
                                                >
                                                      <ThumbsUp size={14} className="mr-1" />
                                                      Helpful ({review.liked ? review.helpful + 1 : review.helpful})
                                                </button>
                                                <button className="flex items-center mr-4 hover:text-blue-500">
                                                      <MessageSquare size={14} className="mr-1" />
                                                      Reply ({review.replies})
                                                </button>
                                                <button className="flex items-center hover:text-red-500">
                                                      <Flag size={14} className="mr-1" />
                                                      Report
                                                </button>
                                          </div>
                                    </div>
                              ))
                        ) : (
                              <div className="text-center py-8 text-gray-500">No reviews to display</div>
                        )}
                  </div>

                  {/* Pagination controls */}
                  {totalPages > 1 && (
                        <div className="mt-6 flex justify-center">
                              <nav className="flex items-center">
                                    <button
                                          onClick={goToPrevPage}
                                          disabled={currentPage === 1}
                                          className={`flex items-center px-3 py-1 rounded-md mr-1 ${
                                                currentPage === 1
                                                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                      : "bg-gray-200 hover:bg-gray-300"
                                          }`}
                                    >
                                          <ChevronLeft size={16} className="mr-1" />
                                          Previous
                                    </button>

                                    {renderPageNumbers()}

                                    <button
                                          onClick={goToNextPage}
                                          disabled={currentPage === totalPages}
                                          className={`flex items-center px-3 py-1 rounded-md ml-1 ${
                                                currentPage === totalPages
                                                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                                      : "bg-gray-200 hover:bg-gray-300"
                                          }`}
                                    >
                                          Next
                                          <ChevronRight size={16} className="ml-1" />
                                    </button>
                              </nav>
                        </div>
                  )}
            </div>
      );
}
