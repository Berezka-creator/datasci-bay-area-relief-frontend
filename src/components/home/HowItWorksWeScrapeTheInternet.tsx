import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import ScrapeWeb from "../../assets/ScrapeWeb.png";

const Section = styled.div`
  width: 260px;
  height: 523px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-bottom: 24px;
`;

const ScrapeWebImg = styled.img`
  width: 272px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;


const WeScrapTheInternet: React.FC = () => {

    return (
                <Section>
                    <ScrapeWebImg alt="We scrape the internet" src={ScrapeWeb} />
                    <Heading>
                        <Typography variant="h5">We scrape the internet</Typography>
                    </Heading>
                    <Typography>
                        We search across government websites, social media, and fundraising
                        platforms to look for financial aid. We then help categorize them so
                        it’s easy for you to find.
                    </Typography>
                </Section>
    );
};

export default WeScrapTheInternet;
