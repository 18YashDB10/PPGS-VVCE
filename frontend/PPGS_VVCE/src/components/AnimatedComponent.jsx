// Importing necessary components from React and Framer Motion
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start state: opacity 0 (invisible)
      animate={{ opacity: 1 }} // End state: opacity 1 (fully visible)
      transition={{ duration: 1 }} // The transition duration (1 second)
    >
      <h1>Hello, this is an animated component!</h1>
      <p>This text will fade in when the component loads.</p>
    </motion.div>
  );
};

export default AnimatedComponent;
