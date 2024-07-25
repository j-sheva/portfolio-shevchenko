import React from 'react';
import ProjectDetails from '../../components/ProjectDetails';
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2.png';

const CarKey = () => {
  return (
    <ProjectDetails
      title="Digital Smart Car Key"
      introduction="Introducing Car Connect — MY CAR KEYS, a mobile app for tracking, monitoring, and unlocking your car. Check fuel reserves, oil level, tire pressure, and more with a tap. Find your parked car quickly with smartphone map integration. Secure or access your car with a powerful lock/unlock system. Locate gas stations, EV charging stations, and parking lots with the live map feature. Compatible with popular car makes like Audi, BMW, Buick, and more."
      request="The design of the app must focus on user experience, featuring an intuitive interface and modern aesthetics that match current design trends. It should seamlessly integrate functional elements like navigation and interaction tools to improve user engagement. Furthermore, the design needs to be adaptable across different screen sizes and resolutions to cater to various mobile devices. By prioritizing these aspects, we aim to create a compelling and user-friendly experience for our app users."
      solution="The design solution for the Car Connect — My Car Keys app focuses on a user-friendly interface with a dashboard displaying essential vehicle information, including fuel reserves, oil level, and tire pressure, through intuitive icons and progress bars. A GPS-enabled car finder feature helps users locate their parked vehicles quickly, while a secure lock/unlock system ensures vehicle safety and accessibility. Integrated maps display nearby gas stations, EV charging stations, and parking lots, complete with filters and user reviews for convenience. Usability testing and user feedback drive iterative improvements to ensure a seamless and intuitive experience for Car Connect users."
      text="Open in the Apple Store"
      link="https://apps.apple.com/ua/app/digital-smart-car-key/id1636750385?l=uk"
      image1={car1}
      image2={car2}
    />
  );
};

export default CarKey;
