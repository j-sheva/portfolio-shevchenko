import ProjectDetails from '../../components/ProjectDetails';
import ml1 from '../../assets/images/ml1.png';
import ml2 from '../../assets/images/ml2.png';

const Major = () => {
  return (
    <ProjectDetails
      title="MajorLabl App"
      introduction="MajorLabl is an innovative platform designed for musicians to upload their tracks, share them with audiences, and generate income from streaming. It combines ease of use with monetization opportunities, giving artists a new level of independence and control over their content."
      request="The challenge was to create a user experience that makes every step clear and intuitive—from uploading tracks to viewing statistics and receiving earnings. The goal was not only to design an appealing interface but also to streamline user flows so musicians could interact with the platform without friction."
      solution="I optimized the core user flows, simplifying the journey for musicians across key scenarios. The design emphasized transparency of actions and quick access to primary features. On the UI level, I applied clear visual hierarchy, modern typography, and a scalable design system to ensure the platform’s growth potential. Beyond design, I also implemented the frontend, bringing UX and UI solutions to life in code. This allowed the concept to be tested quickly and delivered a stylish, efficient tool for musicians to promote and monetize their work."
      text="View website"
      link=""
      image1={ml1}
      image2={ml2}
    />
  );
};

export default Major;
