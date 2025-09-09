import ProjectDetails from '../../components/ProjectDetails';
import ai1 from '../../assets/images/ai1.png';
import ai2 from '../../assets/images/ai2.png';

const Photo = () => {
  return (
    <ProjectDetails
      title="AI Headshot Generator"
      introduction="The AI Headshot Generator is a mobile application designed to create perfect profile pictures and selfies using advanced artificial intelligence technologies. The app will allow users to adjust image parameters, including lighting, shadows, and other details, to achieve the best results. Artificial intelligence will be used to automatically correct flaws in photos, such as red-eye or improper lighting. Additionally, the app will provide access to various editing tools, such as filters and retouching, to achieve the desired outcome. Users will be able to save and share their completed images across various social networks and messaging platforms."
      request="The app aims to utilize advanced AI technology to facilitate the creation of flawless profile pictures and selfies by allowing users to adjust image parameters and apply automatic corrections. It will also offer various editing tools such as filters and retouching options. Integration with social media platforms will enable users to easily save and share their images. "
      solution="A simple and minimalistic interface has been created that prioritizes ease of use and intuitive navigation. Familiar mobile design patterns are used to ensure users have effortless access to features and capabilities. Implemented interactive elements and visual feedback to guide users through the photo creation process. Organized options in a user-friendly way, using intuitive icons and gestures for seamless exploration.

Focusing on these design principles, a mobile app interface was created that not only showcases the power of AI photo generation but also improves the overall user experience by making it intuitive and visually appealing."
      text="Open in the Apple Store"
      link="https://apps.apple.com/ua/app/ai-headshot-generator-pro/id6450652729?l=uk"
      image1={ai1}
      image2={ai2}
    />
  );
};

export default Photo;
