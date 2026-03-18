import {
  Body, Container, Head, Heading,
  Hr, Html, Preview, Section, Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ name, email, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact message from {name}</Preview>
      <Body style={{ backgroundColor: "#f5f5f5", fontFamily: "sans-serif" }}>
        <Container style={{ backgroundColor: "#ffffff", margin: "40px auto", padding: "32px", borderRadius: "8px", maxWidth: "560px" }}>
          <Heading style={{ fontSize: "20px", marginBottom: "8px" }}>
            New message from {name}
          </Heading>
          <Text style={{ color: "#555", fontSize: "14px" }}>
            Reply to: <a href={`mailto:${email}`}>{email}</a>
          </Text>
          <Hr />
          <Section>
            <Text style={{ fontSize: "15px", lineHeight: "1.6" }}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}