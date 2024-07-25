import React from 'react';
import ProjectDetails from '../../components/ProjectDetails';
import cz1 from '../../assets/images/cz1.png';
import cz2 from '../../assets/images/cz2.png';

const CZ = () => {
  return (
    <ProjectDetails
      title="Colt CZ Group Portal"
      introduction="The Collector's Hub is where Colt CZ Group holds its highest prized, limited edition firearm auctions.Joining the Collector's Hub will grant access to all auctions, a marketplace of all Right to Purchases available and your collection of Digital Certificates of Authenticity."
      request="Creating the Collector's Hub platform for conducting firearm auctions by Colt CZ Group, as well as establishing a marketplace for purchasing and selling limited rights. Functionality includes registration, auction browsing, participation, purchasing rights, and managing authenticity certificates. The design should be attractive and user-friendly. The platform should be developed using modern technologies while ensuring data security."
      solution="The design proposal entailed creating an intuitive and visually appealing interface for the Collector's Hub platform, reflecting the exclusivity of firearm auctions. A strong brand identity was developed to align with Colt CZ Group's values and establish trust among users. The focus was on seamless navigation and clear user pathways for registration, auction browsing, and purchase management to enhance the overall user experience. Furthermore, efforts were made to ensure the platform's responsiveness across various devices, alongside creating engaging visual elements like banners and icons. Collaborative work on security measures and the integration of feedback mechanisms aimed to enhance functionality and user satisfaction."
      text="View website"
      link="https://hub.coltczgroup.onblocktrust.com/"
      image1={cz1}
      image2={cz2}
    />
  );
};

export default CZ;
