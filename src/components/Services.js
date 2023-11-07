import React from "react";
import "./Services.css";
import ServicesCard from "./ServicesCard";
import servicesData from "./services.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import service_one_img from './../assets/service_one.webp'
import service_two_img from './../assets/service_two.webp'
import service_three_img from './../assets/service_three.webp'
import feature_img from './../assets/features.webp'


function Services() {
  servicesData[0].image = service_one_img;
  servicesData[1].image = service_two_img;
  servicesData[2].image = service_three_img;
  return (
    <div className="services" id="services">
      <div className="services-header">
        <h1>Our services</h1>
      </div>
      <Container>
        <Row>
          {servicesData.map((data) => {
            return (
              <Col sm={12} lg={4}>
                <ServicesCard
                  image={data.image}
                  title={data.title}
                  subtitle={data.subtitle}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="features">
        <p>
          <span>Features & Benefits</span>
        </p>
      </div>
      <div className="features-content">
        <div>
          <h1>Features</h1>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Expert Event Planning
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Stress-Free Venue Management
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Seamless On-Site Coordination
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Innovative Event Design
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Ongoing Support
          </p>
        </div>
        <div>
          <h1>Benefits</h1>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Memorable Event Experiences
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Maximum Guest Satisfaction
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Elevated Brand Image
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Cost-Effective Event Management
          </p>
          <p>
            <FontAwesomeIcon icon={faCircleDot} style={{ color: "#49a078" }} />{" "}
            Sustained Partnership
          </p>
        </div>
        <div className="features-image">
          <img src={feature_img} alt="features-image"/>
        </div>
      </div>
    </div>
  );
}

export default Services;
