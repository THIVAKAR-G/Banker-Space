import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = '';

export const Email = ({
  userFirstName,
  duration,
  meetingTime,
  date,
  meetingUrl,
  businessName,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Confirmation</Preview>
      <Body style={main}>
        <Container>
          <Section style={logo}>
            <Img src={''} />
          </Section>

          <Section style={content}>
            <Row>
              <Column>
                <Heading style={heading}>
                  Hi {userFirstName},
                </Heading>
                <Heading as="h2" style={subHeading}>
                  Thank you for scheduling a meeting with {businessName},
                </Heading>
                <Text style={paragraph}>
                  Please find the meeting details:
                </Text>
                <Text style={infoText}>
                  <b>Time:</b> {meetingTime}
                </Text>
                <Text style={infoText}>
                  <b>Date:</b> {date}
                </Text>
                <Text style={infoText}>
                  <b>Location:</b> <a href={meetingUrl}>{meetingUrl}</a>
                </Text>
                <Text style={infoText}>
                  <b>Duration:</b> {duration}
                </Text>
                <Text style={footerText}>
                  *Please join the meeting using the above details.
                </Text>
              </Column>
            </Row>
            <Row style={buttonRow}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button} href={meetingUrl}>
                  Join Now
                </Button>
              </Column>
            </Row>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © 2024 | Bancker Space, Othakalmandapam, Coimbatore
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Email;

const main = {
  backgroundColor: "#f8f9fa", // Light background for better contrast
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const heading = {
  fontSize: 30,
  fontWeight: "bold",
  textAlign: "center",
  color: "#333", // Darker color for better visibility
  margin: "10px 0",
};

const subHeading = {
  fontSize: 24,
  fontWeight: "500",
  textAlign: "center",
  color: "#555", // Slightly lighter color
  margin: "5px 0 20px 0",
};

const paragraph = {
  fontSize: 16,
  textAlign: "center",
  color: "#666", // Subtle color for less emphasis
  margin: "10px 0",
};

const infoText = {
  fontSize: 16,
  textAlign: "center",
  color: "#333",
  margin: "5px 0",
};

const footerText = {
  textAlign: "center",
  fontSize: 12,
  color: "rgb(0, 0, 0, 0.5)",
};

const logo = {
  padding: "30px 20px",
  textAlign: "center", // Center logo
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: "20px", // Spacing above the button
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: "5px", // Slightly rounded corners
  color: "#FFF",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  padding: "12px 30px",
  textDecoration: "none", // Remove underline
  transition: "background-color 0.3s", // Add transition effect
};

const buttonRow = {
  padding: "20px 0",
};

const content = {
  borderRadius: "5px",
  overflow: "hidden",
  backgroundColor: "#ffffff", // White background for the content area
  padding: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Soft shadow for depth
};

const footer = {
  padding: "30px 0",
};
