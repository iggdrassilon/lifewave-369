import React from "react";
import { motion } from "framer-motion";

interface VideoSectionProps {
  title: string;
  videoUrl: string;
  buttons?: string[];
}

const VideoSection = ({ title, videoUrl, buttons }: VideoSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-space-dark text-center mb-8">
        {title}
      </h2>

      <div className="aspect-w-16 aspect-h-9 mb-8">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        />
      </div>

      {buttons && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {buttons.map((button, index) => (
            <motion.button
              key={button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-space-light transition-colors"
            >
              {button}
            </motion.button>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default VideoSection;