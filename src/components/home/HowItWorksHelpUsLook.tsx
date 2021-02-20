import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import PaperAirplanes from "../../assets/PaperAirplanes.png";


const Section = styled.div`
  width: 260px;
  height: 523px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-bottom: 24px;
`;

const PaperAirplanesImg = styled.img`
  width: 237px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const HelpUsLook: React.FC = () => {

    return (
                <Section>
                    <PaperAirplanesImg alt="Help us look" src={PaperAirplanes} />
                    <Heading>
                        <Typography variant="h5">Help us look</Typography>
                    </Heading>
                    <Typography>
                        Found a fund that isn’t on our website? Help the community by
                        letting us know, so we can add it to our database.
                    </Typography>
                </Section>
    );
};

export default HelpUsLook;
