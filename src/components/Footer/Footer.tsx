import React from "react";
import { Button, Col, Image, Link, Row, Text } from "@nextui-org/react";
import { WhatsappLogo } from "phosphor-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Col
      css={{
        backgroundColor: "$greenColorBackground",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "4rem",
        marginBottom: "1rem",
        alignItems: "center",
        justifyContent: "center",
        "@smMax": {
          flexWrap: "wrap",
          height: "100%",
          justifyContent: "center",
          zIndex: 0, //Para não aparecer os itens no fundo do collapse
        },
      }}
    >
      <Text
        css={{
          color: "#2F1709", // Props color do Text não recebe valor vindo de variável
          fontWeight: "$semibold",
          fontSize: "20px",
          fontFamily: "$poppins",
          lineHeight: "30px",
        }}
      >
        {year} - Cantinho de Nós
      </Text>
      <Text
        css={{
          color: "#2F1709", // Props color do Text não recebe valor vindo de variável
          fontWeight: "$semibold",
          fontSize: "20px",
          fontFamily: "$poppins",
          lineHeight: "30px",
          marginTop: "1rem",
        }}
      >
        Contato
      </Text>
      <Text
        css={{
          color: "#2F1709", // Props color do Text não recebe valor vindo de variável
          fontWeight: "$semibold",
          fontSize: "20px",
          fontFamily: "$poppins",
          lineHeight: "30px",
          marginTop: "1rem",
        }}
      >
        <Link
          href="https://web.whatsapp.com/send?phone=5521985035765"
          target="_blank"
          css={{ color: "#2F1709" }}
        >
          (XX) 98763-4567
        </Link>
      </Text>
      <Text
        css={{
          color: "#2F1709", // Props color do Text não recebe valor vindo de variável
          fontWeight: "$semibold",
          fontSize: "20px",
          fontFamily: "$poppins",
          lineHeight: "30px",
          marginTop: "0.5rem",
        }}
      >
        <a href="mailto:cantinhodenosmacrame@gmail.com?subject=link HTML">
          cantinhodenosmacrame@gmail.com
        </a>
      </Text>
      <Row
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1.625rem",
        }}
      >
        <Button
          rounded
          auto
          css={{
            backgroundColor: "$yellowColor",
            borderRadius: "48px",
            height: "48px",
            width: "48px",
            minWidth: "48px",
            maxWidth: "48px",
            marginRight: "1rem",
            "@smMax": {
              margin: "1rem",
              marginTop: "0",
            },
          }}
        >
          <Image src={"/images/Vector.png"} width="48px" height="48px" />
        </Button>
        <Button
          rounded
          auto
          css={{
            backgroundColor: "$yellowColor",
            borderRadius: "48px",
            height: "48px",
            width: "48px",
            minWidth: "48px",
            maxWidth: "48px",
            marginRight: "1rem",
            "@smMax": {
              margin: "1rem",
              marginTop: "0",
            },
          }}
        >
          <Link
            href="https://web.whatsapp.com/send?phone=5521985035765"
            target="_blank"
          >
            <WhatsappLogo size={40} color="black" />
          </Link>
        </Button>
        <Button
          rounded
          auto
          css={{
            backgroundColor: "$yellowColor",
            borderRadius: "48px",
            height: "48px",
            width: "48px",
            minWidth: "48px",
            maxWidth: "48px",
            "@smMax": {
              margin: "1rem",
              marginTop: "0",
            },
          }}
        >
          <Image src={"/images/Vector3.png"} width="48px" height="48px" />
        </Button>
      </Row>
    </Col>
  );
}
