/**
 * This is a TypeScript React component for rendering an email template for a contact form message.
 * @property {string} message - The `message` property is a string that represents the content of the
 * message received from the contact form.
 * @property {string} senderEmail - The `senderEmail` property is a string that represents the email
 * address of the sender who filled out the contact form.
 */
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        {/* <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body> */}
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">Congratulations</Heading>
              <Text>{message}</Text>
            </Section>
            <Section>
              <Heading style={heading}>Hello Dear,</Heading>
              <Text style={paragraph}>
                I hope this email finds you well. My name is Yug Jadvani, and I
                am a Frontend Developer with a passion for ReactJs and NextJs. I
                am reaching out to share my portfolio and explore potential
                opportunities for collaboration.
              </Text>
              <Text style={paragraph}>
                Over the past 2+ years, I have honed my skills in HTML, CSS,
                Responsive Design, JavaScript, TypeScript, ReactJs, NextJs,
                React Native.
              </Text>
              <Text style={paragraph}>
                I am excited about the possibility of contributing to Delemont
                Studio Company and am eager to discuss how my background,
                skills, and portfolio might align with your needs and goals.
                Please find my portfolio attached for your review. You can also
                view it online at
                <Link href="https://yugjadvani.vercel.app">My Portfolio</Link>.
              </Text>
              <Text style={paragraph}>
                I would love the opportunity to discuss this further and learn
                more about how I can contribute to your team. I am available for
                a call or meeting at your earliest convenience and can be
                reached at +91 9081804810 or{" "}
                <Link href="mailto:yugjadvani@gmail.com">
                  yugjadvani@gmail.com
                </Link>
                .
              </Text>
              <Text style={paragraph}>
                Thank you for considering my application. I look forward to the
                possibility of working together and contributing to your
                continued success.
              </Text>
              <Text style={signature}>
                Best regards,
                <br />
                Yug Jadvani
                <br />
                Frontend Developer
                <br />
                <Link href="https://www.linkedin.com/in/yug-jadvani">
                  My LinkedIn Profile
                </Link>
                <br />
                +91 9081804810
                <br />
                <Link href="mailto:yugjadvani@gmail.com">
                  yugjadvani@gmail.com
                </Link>
                <br />
                <Link href="https://yugjadvani.vercel.app">My Portfolio</Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const heading = {
  fontSize: "24px",
  marginBottom: "20px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginBottom: "20px",
};

const signature = {
  fontSize: "16px",
  lineHeight: "1.5",
  marginTop: "20px",
};
