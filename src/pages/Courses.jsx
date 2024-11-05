import React from 'react';

const Courses = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Courses</h1>

      {/* Documentation Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Documentation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Explore the detailed documentation and resources to deepen your understanding of our courses.
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Course 1 Documentation
            </a> - A comprehensive guide on the basics of Course 1.
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced Topics in Course 2
            </a> - Detailed information and advanced topics covered in Course 2.
          </li>
          <li>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Getting Started with Course 3
            </a> - Step-by-step documentation for beginners.
          </li>
        </ul>
      </section>

      {/* Videos Section */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">Videos</h2>
        <p className="text-lg text-gray-700 mb-4">
          Watch instructional videos to reinforce your learning and get hands-on experience with our courses.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Video Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Introduction to Course 1</h3>
            <p className="text-gray-600 mb-4">An overview of the basic concepts in Course 1.</p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>

          {/* Video Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Deep Dive into Course 2</h3>
            <p className="text-gray-600 mb-4">Learn advanced topics and best practices for Course 2.</p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>

          {/* Video Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-xl font-bold mb-2">Hands-On Session for Course 3</h3>
            <p className="text-gray-600 mb-4">Interactive session to help you practice Course 3 topics.</p>
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
