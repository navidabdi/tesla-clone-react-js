import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-s.jpg"
        buttonOne="Custom Order"
        buttonTwo="Existing Inventory"
        downArrow={true}
      />
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-x.jpg"
        buttonOne="Custom Order"
        buttonTwo="Existing Inventory"
        downArrow={false}
      />
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-y.jpg"
        buttonOne="Custom Order"
        buttonTwo="Existing Inventory"
        downArrow={false}
      />
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-3.jpg"
        buttonOne="Custom Order"
        buttonTwo="Existing Inventory"
        downArrow={false}
      />
      <Section
        title="Lowest Cost Solar Panels In America"
        description="Money-Back Guarantee"
        backgrounImg="solar-panel.jpg"
        buttonOne="Order Now"
        buttonTwo="Learn More"
        downArrow={false}
      />
      <Section
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than A New Roof"
        backgrounImg="solar-roof.jpg"
        buttonOne="Order Now"
        buttonTwo="Learn More"
        downArrow={false}
      />
      <Section
        title="Accessories"
        description="Buy The Accessories You Need"
        backgrounImg="accessories.jpg"
        buttonOne="Shop Now"
        buttonTwo=""
        downArrow={false}
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
