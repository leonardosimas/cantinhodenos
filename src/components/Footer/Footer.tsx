import React from "react";
import { Button, Col, Image, Link, Row, Text } from "@nextui-org/react";
import { WhatsappLogo } from "phosphor-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Col
      css={{
        backgroundColor: "$whiteColor",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "4rem",
        marginBottom: "1rem",
        alignItems: "center",
        justifyContent: "center",
        "@smMax": {
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          marginTop: "1rem",
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
          "@smMax": {
            fontSize: "16px",
            lineHeight: "24px",
            marginTop: "0rem",
          },
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
          "@smMax": {
            fontSize: "16px",
            lineHeight: "24px",
            marginTop: "0.5rem",
          },
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
          "@smMax": {
            fontSize: "16px",
            lineHeight: "24px",
            marginTop: "0.5rem",
          },
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
          "@smMax": {
            fontSize: "16px",
            lineHeight: "24px",
            display: "flex",
            justifyContent: "center",
            marginTop: "0.5rem",
          },
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
          "@smMax": { marginTop: "0.5rem" },
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
              height: "40px",
              width: "40px",
              minWidth: "40px",
              maxWidth: "40px",
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
              height: "40px",
              width: "40px",
              minWidth: "40px",
              maxWidth: "40px",
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
              height: "40px",
              width: "40px",
              minWidth: "40px",
              maxWidth: "40px",
            },
          }}
        >
          <Image src={"/images/Vector3.png"} width="48px" height="48px" />
        </Button>
      </Row>
      <Row
        css={{
          position: "absolute",
          display: "flex",
          alignItems: "flex-end",
          width: "112px",
          height: "92px",
          right: "12rem",
        }}
      >
        <Row
          css={{
            position: "absolute",
            display: "flex",
            alignItems: "flex-end",
            left: "-5rem",
            top: "1rem",
            "@smMax": {
              top: "-0.5rem",
            },
          }}
        >
          <Image
            src={"/images/Group.png"}
            width="60px"
            height="48px"
            css={{
              position: "absolute",
              "@smMax": {
                width: "60px",
                height: "48px",
                position: "absolute",
              },
            }}
          />
        </Row>
        <Row css={{
            position: "absolute",
            display: "flex",
            alignItems: "flex-end",
            left: "0rem",
            top: "-1rem",
            "@smMax": {
              width: "55px",
              height: "66px",
              top: "1.5rem",
              left: "13rem"
            },
          }}>
          <Image
            src={"/images/Group8.png"}
            width="109px"
            height="112px"
            css={{
              position: "absolute",
              "@smMax": {
                width: "55px",
                height: "66px",
                position: "absolute",
              },
            }}
          />
        </Row>
      </Row>
    </Col>
  );
}
