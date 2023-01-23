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
        $$navbarBlurBackgroundColor: "#FFFFFF",
        $$navbarBackgroundColor: "#FFFFFF",
        width: "100%",
        height: "80px",
        boxSizing: "border-box",
        zIndex: 99999,
        "@smMax": {
          $$navbarBlurBackgroundColor: "#FFFFFF",
          margin: "0",
          width: "100%",
          height: "3rem",
          maxHeight: "1rem",
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
                width: "120px",
                height: "60px",
                marginTop: "0.8rem",
              },
            }}
          />
        </Navbar.Item>
        <Navbar.Item>
          <Row
            css={{
              display: "flex",
              alignItems: "flex-end",
              "@smMax": { marginLeft: "-6rem" },
            }}
          >
            <Navbar.Item>
              <Button
                light
                auto
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "$poppins",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "@smMax" : {
                    width: "60px"
                  }
                }}
              >
                <Link
                  href="/"
                  css={{ color: "#2F1709" }}
                >
                  Home
                </Link>
              </Button>
            </Navbar.Item>
            <Navbar.Item>
              <Button
                light
                auto
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "$poppins",
                  fontSize: "16px",
                  fontWeight: "bold",
                  "@smMax" : {
                    width: "60px"
                  }
                }}
              >
                Produtos
              </Button>
            </Navbar.Item>
          </Row>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
