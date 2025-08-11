import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  { id: 1, url: "../src/assets/Dashboard-images/DashboardBrain1.jpg", title: "Brain Dashboard View 1" },
  { id: 2, url: "../src/assets/Dashboard-images/DashboardBrain2.jpg", title: "Brain Dashboard View 2" },
  { id: 3, url: "../src/assets/Dashboard-images/DashboardBrain3.jpg", title: "Brain Dashboard View 3" },
  { id: 4, url: "../src/assets/Dashboard-images/DashboardBrain4.jpg", title: "Brain Dashboard View 4" },
  { id: 5, url: "../src/assets/Dashboard-images/DashboardBrain5.jpg", title: "Brain Dashboard View 5" },
  { id: 6, url: "../src/assets/Dashboard-images/DashboardBrain6.jpg", title: "Brain Dashboard View 6" },
  { id: 7, url: "../src/assets/Dashboard-images/DashboardBrain7.jpg", title: "Brain Dashboard View 7" },
  { id: 8, url: "../src/assets/Dashboard-images/DashboardBrain8.jpg", title: "Brain Dashboard View 8" },
];

function Dashboard() {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleViewClick = (photo) => setSelectedImage(photo);
  const closeModal = () => setSelectedImage(null);

  return (
    <main className="min-h-screen bg-gradient-to-tr from-purple-100 to-purple-200 pt-24 px-4">
      {/* Fixed Header */}
     

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-48 object-cover"
              />
              <motion.div
                className={`absolute inset-0 bg-black/50 p-4 flex flex-col justify-end transition-opacity duration-300 ${
                  hoveredId === photo.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {photo.title}
                </h3>
                <button
                  className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md self-start"
                  onClick={() => handleViewClick(photo)}
                >
                  View Fullscreen
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className="mt-4 text-center text-white text-xl font-semibold">
                {selectedImage.title}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Dashboard;

