import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";

export const EarlyBirdEmail = (): React.ReactElement => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>O teu link para entrar na Bluepint Academy</Preview>
      <Container style={container}>
        <Img
          alt="Linear"
          height="42"
          src={"https://cdn.blueprint-academy.com/TPB002/icon-white.png"}
          style={logo}
          width="42"
        />
        <Heading style={heading}>Parabéns por te registares! </Heading>
        <Text style={paragraph}>
          Vais receber acesso ao video exclusivo dia 07/10 através deste email
          por isso fica atento à inbox.
        </Text>
        <Hr style={hr} />
        <Link href="https://app.bluepint-academy.com" style={reportLink}>
          Equipa Bluepint Academy
        </Link>
      </Container>
    </Body>
  </Html>
);

export default EarlyBirdEmail;

const logo = {
  borderRadius: 10,
  width: 60,
  height: 60,
};

const main = {
  backgroundColor: "#0f0f21",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: "#fff",
};

const container = {
  margin: "0 auto",
  padding: "30px 16px 64px",
  maxWidth: "560px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "400",
  color: "#fff",
  padding: "17px 0 0",
};

const paragraph = {
  margin: "0 0 15px",
  fontSize: "15px",
  lineHeight: "1.4",
  color: "#fff",
};

const reportLink = {
  fontSize: "14px",
  color: "#fff",
  fontWeight: "600",
};

const hr = {
  borderColor: "#662217",
  margin: "42px 0 26px",
};
