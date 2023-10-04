import office from "../assets/office.jpeg";

const About = () => {
  return (
    <div>
      <h1 id="aboutTitle">About Us</h1>
      <div className="aboutContainer">
        <p className="aboutText">
          Pelvic Physical Therapy Rehabilitation (PPTR) is dedicated to
          providing specialized care for people of any gender with pelvic pain,
          bladder/bowel issues and sexual dysfunction. Our treatment approach
          considers how your systems work together to provide long term relief.
          We believe knowledge of your condition is empowering! We are
          passionate about finding the driver of your symptoms and reaching your
          desired goals as a team.
        </p>
        <img className="aboutImage" src={office}></img>
      </div>
    </div>
  );
};

export default About;
