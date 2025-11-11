import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from './Carousel';
import AboutSection from './AboutSection';
import VideoSection from './VideoSection';
import ScholarshipCards from './ScholarshipCards';
import BuildSection from './BuildSection';
import CoursesCategory from './CoursesCategory';
import OurCourses from './OurCourses';
import WhoWeAre from './WhoWeAre';
import GetStarted from './GetStarted';
import EmpoweringSection from './EmpoweringSection';
import WhyChooseHunarmandPunjab from './WhyChooseHunarmandPunjab';
import OurSupportingPartners from './OurSupportingPartners';
import Footer from './Footer';
function Home() {
  return (
    <div>
    <Carousel />
    <AboutSection />
    <VideoSection />
    <ScholarshipCards />
    <BuildSection />
    <CoursesCategory />
    <OurCourses />
    <WhoWeAre />
    <GetStarted />
    <EmpoweringSection />
    <WhyChooseHunarmandPunjab />
    <OurSupportingPartners />
    <Footer />
  </div>
  );
}

export default Home;
