import ProjectDetails from '../../components/ProjectDetails';
import qu1 from '../../assets/images/qu1.png';
import qu2 from '../../assets/images/qu2.png';

const Qualoo = () => {
  return (
    <ProjectDetails
      title="Qualoo App"
      introduction="The Village Key is a benefits and web3 platform where people can purchase unique digital collectibles and unlock exclusive experiences and benefits."
      request="A whole new digital layer needs to be added to the park visit that will improve the customer experience and create a new revenue stream. Visitors participate by earning or purchasing Legend Cards, which are then entered into the park's ride-to-earn contests in exchange for bragging rights and rewards. Starting with Leviathan as a proof of concept, the experience will be expanded with new features and attractions, first at Sea World and then at other parks."
      solution="Conducting market research on amusement park trends and analyzing visitor behavior to understand their needs and expectations. Developing a concept for the new digital layer, including defining key features and visual styles that resonate with the park's atmosphere and values. Creating user interfaces for the digital platform and developing prototypes for user interaction testing. Collaborating with developers to implement the design into the software and ensuring a seamless user experience. Analyzing feedback from prototype testing and making necessary design revisions to enhance the user experience. Designing marketing materials for advertising campaigns and promotional efforts aimed at attracting visitors to the new digital layer of the park."
      text="Google Play"
      link="https://play.google.com/store/apps/details?id=com.qualoo.io"
      image1={qu1}
      image2={qu2}
    />
  );
};

export default Qualoo;
