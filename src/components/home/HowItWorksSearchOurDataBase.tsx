import React from "react";
import styled from "styled-components";
import Searching from "../../assets/Searching.png";
import Typography from "@material-ui/core/Typography";

const Section = styled.div`
  width: 260px;
  height: 523px;
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  margin-bottom: 24px;
`;

const SearchingImg = styled.img`
  width: 259.5px;
  height: 253px;
  padding: 0px;
  margin-bottom: 24px;
`;

const SearchOurDataBase: React.FC = () => {

    return (
                <Section>
                    <SearchingImg alt="Search our database" src={Searching} />
                    <Heading>
                        <Typography variant="h5">Search our database</Typography>
                    </Heading>
                    <Typography>
                        Here you can filter by grant qualifications. Once you find a loan or
                        grant, you can apply through the original website.
                    </Typography>
                </Section>
    );
};

export default SearchOurDataBase;
