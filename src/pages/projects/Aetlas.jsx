import ProjectDetails from '../../components/ProjectDetails';
import ae1 from '../../assets/images/ae1.png';
import ae2 from '../../assets/images/ae2.png';

const Aetlas = () => {
  return (
    <ProjectDetails
      title="Aetlas App "
      introduction="Aetlas is a digital marketplace where sellers and buyers of carbon credits connect and complete secure transactions. Carbon credits represent verified reductions of greenhouse gas emissions—each credit typically equals one ton of CO₂ avoided or removed from the atmosphere. By trading these credits, companies and individuals can offset their environmental impact while supporting sustainability projects worldwide. Aetlas aims to simplify this process by providing an intuitive, transparent platform for climate-conscious transactions."
      request="The primary challenge was to design a seamless user experience that would guide both buyers and sellers through the complexity of carbon credit trading. The platform needed to balance financial transparency, trust, and compliance with ease of use, ensuring that participants could confidently browse, purchase, or list credits without being overwhelmed by technical details."
      solution="I designed a clear and intuitive user flow that simplifies how users discover, evaluate, and trade carbon credits. The interface highlights trust signals, such as verification details and transaction history, to reinforce credibility. On the UI side, I built a clean and modern design system that communicates professionalism while remaining approachable for new users. In addition to design, I also implemented the frontend, ensuring that the product faithfully reflected the intended user experience. The result is a platform that makes sustainable finance accessible and engaging, empowering users to participate in the global carbon market with confidence."
      text="View website"
      link=""
      image1={ae1}
      image2={ae2}
    />
  );
};

export default Aetlas;
