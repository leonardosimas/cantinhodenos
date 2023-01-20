import { useEffect, useState } from "react";
import styles from "../../styles/Header.module.css";
import { WhatsappLogo } from "phosphor-react";

import {
  Avatar,
  Image,
  Button,
  Row,
  Col,
  Text,
  Navbar,
  Link,
  Divider,
} from "@nextui-org/react";

export function Header(props: any) {
  const [isMounted, setIsMounted] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const logged = props.isLogged;

  useEffect(() => {
    setIsLogged(logged);

    if (!isMounted) {
      setIsMounted(true);
    }
  }, []);

  if (!isMounted) return null;

  return (
    <Navbar
      disableShadow
      maxWidth={"fluid"}
      containerCss={{
        justifyContent: "space-evenly",
        $$navbarBlurBackgroundColor: "#whiteColor",
        $$navbarBackgroundColor: "#whiteColor",
        width: "100%",
        height: "80px",
        boxSizing: "border-box",
        zIndex: 99999,
        "@smMax": {
          $$navbarBlurBackgroundColor: "#whiteColor",
          width: "100%",
          height: "40px",
          maxHeight: "1rem",
          margin: "0",
          paddingBottom: "0",
          borderBottom: "$borderWeights$light solid $grayColor",
        },
      }}
    >
      <Navbar.Content
        css={{
          background: isToggled ? "#whiteColor" : "#whiteColor",
          justifyContent: "space-between",
          width: "100%",
          margin: "1rem",
          marginLeft: "7rem",
          marginRight: "7rem",
          color: "#1A1A1F",
          "@smMax": {
            margin: "1rem",
            marginLeft: "3rem",
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            background: "$whiteColor",
          },
        }}
      >
        <Navbar.Item>
          <Image
            src={"/images/logo2.jpg"}
            width="200px"
            height="80px"
            css={{
              "@smMax": {
                width: "64px",
                height: "18px",
                marginTop: "1.4rem",
              },
            }}
          />
        </Navbar.Item>
        <Navbar.Item>
          <Row
            css={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Navbar.Item>
              <Text
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "$poppins",
                  fontSize: "16px",
                  fontWeight: "$bold",
                  margin: "1rem",
                }}
              >
                Home
              </Text>
            </Navbar.Item>
            <Navbar.Item>
              <Text
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "$poppins",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "1rem",
                }}
              >
                Produtos
              </Text>
            </Navbar.Item>
            <Navbar.Item>
              <Text
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "$poppins",
                  fontSize: "16px",
                  fontWeight: "bold",
                  margin: "1rem",
                }}
              >
                <Link
                  href="https://web.whatsapp.com/send?phone=5521985035765"
                  target="_blank"
                  css={{color: "#2F1709"}}
                >
                  Contato
                </Link>
              </Text>
            </Navbar.Item>
          </Row>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
