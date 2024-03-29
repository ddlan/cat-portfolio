import React, { type FC, useRef } from 'react';
import {
  Box,
  Image,
  Spacer
} from '@chakra-ui/react';

import portfolio from '../images/ted-portfolio.png';
import '../styles/styles.css';
import Navbar from '../components/Navbar';
import TedIntro from '../components/tedxuw/TedIntro';
import Problem from '../components/tedxuw/Problem';
import Empathy from '../components/tedxuw/Empathy';
import Wireframing from '../components/tedxuw/Wireframing';
import Reflection from '../components/tedxuw/Reflection';
import WIP from '../components/tedxuw/WIP';

const TedxUW: FC = () => {
  const problemRef = useRef<HTMLDivElement>(null);
  const scrollToProblem = (): void => {
    problemRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box>
      <Navbar isWork={true} />
      <Box
        mt="100px"
        mx='20vw'
      >
        <TedIntro scrollToProblem={scrollToProblem} />
        <Spacer height='200px' />

        <Image src={portfolio} />
        <Spacer height='200px' />

        <Problem problemRef={problemRef} />
        <Spacer height='200px' />

        <Empathy />
        <Spacer height='200px' />

        <Wireframing />
        <Spacer height='200px' />

        <Reflection />
        <Spacer height='200px' />

        <WIP />
        <Spacer height='200px' />
      </Box>
    </Box>
  );
};

export default TedxUW;
