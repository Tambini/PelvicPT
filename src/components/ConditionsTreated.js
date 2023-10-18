import { Col, Container, ListGroup, Row } from "react-bootstrap";
import office from "../assets/office.jpeg";

export const conditions = [
  "Pelvic pain",
  "Bladder urgency and frequency",
  "Bladder Leakage",
  "Bladder Retention and Hesitancy",
  "Interstitial Cystitis",
  "Sacroiliac Joint Dysfunction",
  "Endometriosis",
  "Vulvodynia",
  "Vaginismus",
  "Painful intercourse",
  "Pudendal Neuralgia",
  "Birth preparation",
  "Pregnancy and Postpartum recovery",
  "Diastasis Recti",
  "Menstrual pain",
  "Interstitial Cystitis/Painful Bladder syndrome",
  "Coccydynia (tailbone pain)",
  "Chronic constipation",
  "Fecal urgency / Frequency / Leakage",
  "Pelvic Organ Prolapse",
  "Post hysterectomy",
  "Cauda Equina Syndrome",
  "Proctacalgia Fugax",
  "Testicular / Penile Pain",
  "Post Prostatectomy",
  "Erectile dysfunction",
  "Peyronie’s Disease",
  "Hard Flaccid Syndrome",
]

const About = () => {

  return (
    <div>
      <h1 className="conditionsTitle" id="conditionsTreated">Conditions Treated</h1>
      <Container className="conditionsContainer">
          <Row xs={1} md={2} lg={4}>
        {conditions.map((condition, i) => 
          <Col>
          <ListGroup.Item key={i} className="condition">{condition}</ListGroup.Item>
          </Col>
        )}
        </Row>
        </Container>
    </div>
  );
};

export default About;
