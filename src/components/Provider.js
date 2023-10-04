import JessicaBoo from "../assets/JessicaBoo2.jpeg";

const About = () => {
  return (
    <div>
      <h1 className="providerTitle">Meet the Provider</h1>
      <div className="providerContainer">
        <img className="providerImage" src={JessicaBoo}></img>

        <div className="providerText">
          <p>
            Jessica Swisher, PT, DPT, PRPC Jessica received her doctorate of
            physical therapy (DPT) from Northeastern University in 2009. She has
            been practicing in outpatient orthopedics and found her passion for
            pelvic health in 2018. She has experience treating many pelvic
            health related conditions for all genders. In addition, her practice
            has a large focus on pregnancy and postpartum care. As a new mom
            herself, she understands the importance of taking care of any issues
            that may arise during this time. Jessica is also a teaching
            assistant for the Herman and Wallace (H&W) Institute and enjoys
            mentoring other physical therapists interested in pelvic health. H&W
            has recognized her as a PRPC (Pelvic Rehabilitation Practitioner
            Certification) confirming her expertise in this field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
