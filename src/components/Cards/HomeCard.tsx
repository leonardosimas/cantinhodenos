import { Card, Text , Grid, Col, Row, Button } from "@nextui-org/react";

export default function HomeCard(props: any) {

  const src = props.src
  const name = props.name
  const description = props.description
  const price = props.price
  
  return (

    <Card 
      isHoverable
    css={{ w: "384px", h: "499px", "@smMax": {w: "168px" , h: "320px", display: "flex", flexWrap: "wrap"} }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5, "@smMax": {height: "80px"}}}>
      <Col>
        <Text h3 color="ffffffAA">
          {name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={src}
        width="100%"
        height="100%"
        objectFit="fill"
        alt="Card example background"
        css={{display: "flex"}}
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        height: "100px",
        bgBlur: "#ffffff33",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
        "@smMax": {height: "80px"}
      }}
    >
      <Col css={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        
          <Text color="#000" size={20}
            css={{
              fontFamily: "$poppins",
              fontWeight: "$semibold",
              lineHeight: "30px",
              "@smMax" : {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                fontSize: "16px"
              }
            }}
          >
            {description}
          </Text>
          <Text color="#000" size={24}
          css={{
            fontFamily: "$poppins",
            fontWeight: "$semibold",
            lineHeight: "36px",
            "@smMax" : {
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              fontSize: "16px"
            }
          }}>
            R$ {price}
          </Text>
      </Col>
    </Card.Footer>
  </Card>
  );
}
