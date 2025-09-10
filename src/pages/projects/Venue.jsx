import ProjectDetails from '../../components/ProjectDetails';
import vm1 from '../../assets/images/vm1.png';
import vm2 from '../../assets/images/vm2.png';

const Venue = () => {
  return (
    <ProjectDetails
      title="See You There"
      introduction="See You There is a social discovery mobile app designed to connect people in real time, based on shared spaces and interests. Unlike traditional dating apps, its focus is broader—it helps users find like-minded individuals, new friends, or even business opportunities. For example, while sitting in a bar, a user can see who else is currently there and open to conversation, explore their profile, and discover common interests. The app bridges the gap between digital connections and real-life interactions, making networking spontaneous and effortless."
      request="The challenge was to design an interface that encourages organic connections without overwhelming the user with noise or pressure. Unlike typical dating platforms, See You There needed to feel inclusive, versatile, and safe—supporting multiple use cases, from casual chats to professional networking. The app required a design that balances simplicity with social context, guiding users smoothly from discovery to meaningful interaction."
      solution="I created the complete UI and UX design for the app, focusing on intuitive flows that reduce friction in social discovery. The design prioritizes clarity—users can easily navigate nearby profiles, explore interests, and start conversations in just a few taps. Visual elements emphasize warmth and inclusivity, while subtle interface cues communicate safety and consent in interactions. By carefully blending modern UI aesthetics with thoughtful UX principles, I delivered a product that feels approachable, versatile, and engaging. The result is an app that transforms casual presence in a space into opportunities for real-world connection."
      text="View website"
      link=""
      image1={vm1}
      image2={vm2}
    />
  );
};

export default Venue;
