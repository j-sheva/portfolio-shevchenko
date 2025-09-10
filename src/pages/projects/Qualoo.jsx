import ProjectDetails from '../../components/ProjectDetails';
import qu1 from '../../assets/images/qu1.png';
import qu2 from '../../assets/images/qu2.png';

const Qualoo = () => {
  return (
    <ProjectDetails
      title="Qualoo App"
      introduction="Qualoo is a global mobile application that empowers users to actively contribute to mapping and improving internet connectivity worldwide. Available on Google Play in 177+ countries, the app transforms everyday devices into network-mapping nodes, turning users into guardians of the internet. By simply installing the app or setting up a fixed node, contributors can analyze Wi-Fi and mobile networks, share insights, and earn rewards. Backed by AI and ML analytics, Qualoo makes it possible for anyone to improve their own network performance while strengthening the global internet infrastructure."
      request="The challenge was to design an app that balances technical complexity with user-friendly accessibility. While the product needed to showcase advanced features—like real-time network analytics and global coverage mapping—it also had to be approachable for everyday users with no technical background. The experience needed to clearly guide users through joining the network, contributing data, and understanding the value they gain in return."
      solution="I designed the complete UX and UI for the Qualoo App, creating a seamless user journey from onboarding to contribution and rewards. The flows were structured into clear steps: setting up the node or app, mapping network data, earning rewards, and connecting with the community. Visually, the design highlights the app’s futuristic mission while maintaining clarity and inclusivity. By combining intuitive layouts with engaging gamification elements—such as leaderboards and friend tracking—I ensured the app motivates users to contribute consistently. The result is a polished mobile experience that makes participation in a global movement both simple and rewarding."
      text="Google Play"
      link="https://play.google.com/store/apps/details?id=com.qualoo.io"
      image1={qu1}
      image2={qu2}
    />
  );
};

export default Qualoo;
