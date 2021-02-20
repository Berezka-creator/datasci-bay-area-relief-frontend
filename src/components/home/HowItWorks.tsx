import React from "react";
import styled from "styled-components";

import SearchOurDataBase from "./HowItWorksSearchOurDataBase";
import WeScrapTheInternet from "./HowItWorksWeScrapeTheInternet";
import HelpUsLook from "./HowItWorksHelpUsLook";
import Typography from "@material-ui/core/Typography";

const Container = styled.div`
  width: 100%;
  padding: 10% 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 85px;
`;


const HowItWorks: React.FC = () => {

  return (
    <Container>
      <Typography variant="h3">How it works</Typography>
        <SectionContainer>
            <WeScrapTheInternet />
            <SearchOurDataBase />
            <HelpUsLook />
        </SectionContainer>
    </Container>
  );
};

export default HowItWorks;
