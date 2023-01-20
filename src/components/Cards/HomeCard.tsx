import { Card, Text , Grid, Col, Row, Button } from "@nextui-org/react";

export default function HomeCard(props: any) {

  const src = props.src
  const name = props.name
  const description = props.description
  const price = props.price
  
  return (

    <Card 
      isHoverable

    css={{ w: "384px", h: "499px", "@smMax": {w: "335px"} }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5}}>
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
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        height: "100px",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
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
              lineHeight: "30px"
            }}
          >
            {description}
          </Text>
          <Text color="#000" size={24}
          css={{
            fontFamily: "$poppins",
            fontWeight: "$semibold",
            lineHeight: "36px"
          }}>
            R$ {price}
          </Text>
      </Col>
    </Card.Footer>
  </Card>
  );
}
