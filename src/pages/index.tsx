import type { NextPage } from "next";
import {
  Button,
  Col,
  Container,
  Grid,
  Image,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { PaperPlaneTilt } from "phosphor-react";
import HomeCard from "../components/Cards/HomeCard";

const Home: NextPage = () => {
  return (
    <Container
      fluid
      responsive={false}
      display={"flex"}
      gap={0}
      alignItems={"flex-start"}
      justify={"center"}
      direction={"row"}
      css={{
        backgroundColor: "$whiteColorVariant",
        linearGradient: "45deg, $whiteColor -90%, $whiteColorVariant 100%",
        width: "1440px",
        height: "100vh",
        "@smMax": {
          width: "100%",
        },
      }}
    >
      <Col
        css={{
          "@smMax": {
            width: "100%",
            height: "187.5px",
          },
        }}
      >
        <Header />
        <Row
          css={{
            display: "flex",
            // alignItems: "flex-end",
            // alignSelf: "flex-end",
            // justifyContent: "flex-end",
            // width: "100%",
            height: "415px",
            // backgroundImage:
            //   "radial-gradient(#fafafa 20%, transparent 20%), radial-gradient(#fafafa 20%, transparent 20%)",
            backgroundColor: "$greenColorBackground",
            // backgroundPosition: "0 0, 10px 10px",
            // backgroundSize: "20px 20px",
            "@smMax": {
              width: "100%",
              height: "187.5px",
            },
          }}
        >
          <Col
            css={{
              display: "flex",
              flexDirection: "column",
              marginTop: "6.75rem",
              marginLeft: "7rem",
              width: "50%",
              height: "415px",
              "@smMax": {
                marginLeft: "0",
                marginTop: "1rem",
              },
            }}
          >
            <Text
              css={{
                fontFamily: "$roboto",
                fontSize: "48px",
                fontWeight: "bold",
                lineHeight: "56.25px",
                display: "flex",
                alignItems: "flex-start",
                "@smMax": {
                  width: "160px",
                  maxWidth: "160px",
                  fontSize: "18px",
                  lineHeight: "31.2px",
                  marginLeft: "1rem",
                },
              }}
            >
              Cantinho de Nós
            </Text>

            <Spacer y={1} />

            <Text
              css={{
                fontFamily: "$roboto",
                fontSize: "18px",
                fontWeight: "normal",
                lineHeight: "27px",
                display: "flex",
                alignItems: "flex-start",
                "@smMax": {
                  width: "160px",
                  maxWidth: "160px",
                  fontSize: "16px",
                  lineHeight: "20.8px",
                  marginLeft: "1rem",
                  marginTop: "0",
                },
              }}
            >
              A arte transforma, motiva e liberta.
            </Text>

            <Spacer y={1.75} />

            <Button
              rounded
              auto
              css={{
                backgroundColor: "$yellowColor",
                color: "$blackVariant",
                fontFamily: "$poppins",
                fontSize: "16px",
                LineHeight: "24px",
                fontWeight: "$semibold",
                width: "176px",
                height: "44px",
                borderRadius: "44px",
                "@smMax": {
                  marginLeft: "1rem",
                  maxWidth: "64px",
                  width: "48px",
                  height: "36px",
                  fontSize: "12px",
                  marginTop: "-1rem",
                },
              }}
            >
              Fazer pedido&nbsp;
              <PaperPlaneTilt size={16} />
            </Button>
          </Col>
          <Col
            css={{
              display: "flex",
              alignItems: "flex-end",
              alignSelf: "flex-end",
              justifyContent: "flex-end",
              "@smMax": {
                width: "50%",
                height: "187.5px",
              },
            }}
          >
            <Image
              src="/images/carreteis_desktop.png"
              containerCss={{
                margin: 0,
                padding: 0,
                width: "524px",
                height: "415px",
                alt: "Linhas",
                objectPosition: "right",
                objectFit: "cover",
                clipPath: "polygon(100% 0, 100% 100%, 0% 100%, 16% 0%)",
                "@smMax": {
                  width: "100%",
                  height: "100%",
                  // objectFit: "cover", //Essa propriedade salvou o dia.
                  // backgroundSize: "cover",
                },
              }}
              css={{
                "@smMax": {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", //Essa propriedade salvou o dia.
                  backgroundSize: "cover",
                },
              }}
            />
          </Col>
        </Row>
        <Spacer y={7.5} />
        <Text
          css={{
            fontFamily: "$roboto",
            fontSize: "36px",
            fontWeight: "bold",
            lineHeight: "42.19px",
            display: "flex",
            alignItems: "flex-start",
            color: "#565656", //Cor não aceita vir das variáveis de temas.
            marginLeft: "7rem",
            "@smMax": {
              width: "335px",
              marginLeft: "1rem",
              marginRight: "1rem",
              display: "flex",
              justifyContent: "center",
              fontSize: "24px",
              lineHeight: "31.2px",
              marginTop: "-8rem",
            },
          }}
        >
          NOSSOS PRODUTOS
        </Text>
        <Spacer y={2.5} />
        <Row
          justify="center"
          css={{
            display: "flex",
            flexWrap: "wrap",
            width: "1216px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            marginLeft: "7rem",
            marginRight: "7rem",
            "@smMax": {
              width: "100%",
              marginLeft: "0",
              marginRight: "0",
              marginTop: "-1.5rem",
            },
          }}
        >
          <Grid.Container
            gap={0}
            justify="space-between"
            css={{
              margin: 0,
              padding: 0,
              width: "100%",
              "@smMax": {
                marginLeft: "1rem",
                marginRight: "1rem",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between"
              },
            }}
          >
            <Grid css={{ marginBottom: "1rem" }}>
              <HomeCard
                src="/images/arco-iris/arcoiris2.jpg"
                name="Arco Iris"
                description="Enfeite"
                price="49,99"
              />
            </Grid>
            <Grid>
              <HomeCard
                src="/images/bolsas/bolsa1.jpg"
                name="Bolsa"
                description="Bolsa de mão"
                price="69,99"
              />
            </Grid>
            <Grid>
              <HomeCard
                src="/images/velas/velas.jpg"
                name="Velas"
                description="Velas"
                price="29,99"
              />
            </Grid>
            <Grid>
              <HomeCard
                src="/images/bolsas/bolsa1.jpg"
                name="Bolsa"
                description="Bolsa de mão"
                price="69,99"
              />
            </Grid>
          </Grid.Container>
        </Row>
        <Footer />
      </Col>
    </Container>
  );
};

export default Home;
