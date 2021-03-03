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

<<<<<<< HEAD
=======
const Section = styled.div`
  width: 260px;
  height: 523px;
  display: flex;
  flex-direction: column;
`;

const SectionHeading = styled.div`
  margin-bottom: 24px;
`;

const LeftImg = styled.img`
  width: 272px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const MiddleImg = styled.img`
  width: 259.5px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const RightImg = styled.img`
  width: 237px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;
>>>>>>> f3464ec0ebb1644c1819ce7d0cee44671d55bc46

const HowItWorks: React.FC = () => {

  return (
    <Container>
      <Typography variant="h3">How it works</Typography>
<<<<<<< HEAD
        <SectionContainer>
            <WeScrapTheInternet />
            <SearchOurDataBase />
            <HelpUsLook />
        </SectionContainer>
=======
      <SectionContainer>
        <Section>
          <LeftImg alt="We scrape the internet" src={ScrapeWeb} />
          <SectionHeading>
            <Typography variant="h5">We scrape the internet</Typography>
          </SectionHeading>
          <Typography>
            We search across government websites, social media, and fundraising
            platforms to look for financial aid. We then help categorize them so
            it’s easy for you to find.
          </Typography>
        </Section>

        <Section>
          <MiddleImg alt="Search our database" src={Searching} />
          <SectionHeading>
            <Typography variant="h5">Search our database</Typography>
          </SectionHeading>
          <Typography>
            Here you can filter by grant qualifications. Once you find a loan or
            grant, you can apply through the original website.
          </Typography>
        </Section>

        <Section>
          <RightImg alt="Help us look" src={PaperAirplanes} />
          <SectionHeading>
            <Typography variant="h5">Help us look</Typography>
          </SectionHeading>
          <Typography>
            Found a fund that isn’t on our website? Help the community by
            letting us know, so we can add it to our database.
          </Typography>
        </Section>
      </SectionContainer>
>>>>>>> f3464ec0ebb1644c1819ce7d0cee44671d55bc46
    </Container>
  );
};

export default HowItWorks;
