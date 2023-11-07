import React from "react";
import "./Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialCard from "./TestimonialCard";
import testmonialData from "./testimonial.json";
import img_one from "./../assets/team_member_one.webp"
import img_two from "./../assets/team_member_two.webp"

function Team() {
  return (
    <div className="team" id="team">
      <h1>Our team</h1>
      <p className="mb-2">Meet Our Expert Event Management Team at KD Events</p>

      <div className="team-data mt-5">
        <div className="team-member d-md-flex ">
          <div className="team-member-image">
          <img src={img_one} />
          </div>
          <div className="team-member-content">
            <h1>Kunal Agarwal</h1>
            <h3>Founder & CEO</h3>
            <p>
              Kunal, with his extensive experience in event management, leads
              the team with his vision, innovation, and professionalism. He is
              passionate about music and traveling.
            </p>
          </div>
        </div>
        <div className="team-member d-md-flex">
          <div className="team-member-image">
          <img src={img_two} />
          </div>

          <div className="team-member-content">
            <h1>Neha Singh</h1>
            <h3>Senior Event Planner</h3>
            <p>
              Neha’s creativity, attention to detail, and customer-first
              approach make her an expert in planning and executing events that
              exceed client expectations. She loves reading and painting.
            </p>
          </div>
        </div>
      </div>

      <h1>Client Testimonials</h1>
      <p className="mb-5">Hear What Our Clients Have to Say About Us</p>

      <Container>
        <Row>
          {testmonialData.map((data) => {
            return (
              <Col sm={12} md={6} className="ps-0">
                <TestimonialCard data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Team;
