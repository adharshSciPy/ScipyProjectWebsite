document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('svg path'); // Select all SVG paths
  
    paths.forEach((path, index) => {
      const pathLength = path.getTotalLength(); // Get the total length of the path
  
      // Set initial styles for the path
      path.style.strokeDasharray = pathLength;
      path.style.strokeDashoffset = pathLength;
  
      // Function to update strokeDashoffset based on scroll position
      const updatePathProgress = () => {
        const scrollTop = window.scrollY; // Current vertical scroll position
        const documentHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
        const progress = Math.min(Math.max(scrollTop / documentHeight, 0), 1); // Progress from 0 to 1
  
        // Calculate the stroke offset based on scroll progress
        const offset = pathLength * (1 - progress); // Decrease offset as you scroll down
        path.style.strokeDashoffset = offset;
      };
  
      // Update progress on scroll
      window.addEventListener('scroll', updatePathProgress);
  
      // Initial update
      updatePathProgress();
    });
  });
  