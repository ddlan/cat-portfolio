import React, { type FC } from 'react';
import {
  Pink
} from '../../styles/components';
import '../../styles/styles.css';
import Intro from '../shared/Intro';
import LoudButton from '../shared/LoudButton';

interface TProps {
  scrollToProblem: () => void
}

const TedIntro: FC<TProps> = ({ scrollToProblem }) => {
  return (
    <Intro
      title='TEDx Talk Waterloo'
      subtitle='Visual and Motion UI Design'
      sideSections={[
        {
          title: 'MY ROLE',
          items: ['Web Designer', 'Motion Designer']
        },
        {
          title: 'TEAM',
          items: ['Web Designer', 'Developer', 'VP Marketing']
        },
        {
          title: 'TIMELINE',
          items: ['8 months']
        },
        {
          title: 'TOOLS',
          items: ['Figma', 'FigJam']
        }
      ]}
      body={
        <>
         {/* eslint-disable-next-line max-len */}
          TEDxUW 2023, themed <Pink>&quot;From the Ground Up,&quot;</Pink> marks the first in-person TEDx Talk event by the University of Waterloo since the pandemic. This occasion symbolizes renewal and community reconnection.
          <br />
          <br />
          {/* eslint-disable-next-line max-len */}
          Embracing this theme, the website is a hub for users to be empowered to bring their ideas to life and leave a lasting impact on the world around them.
          <br />
          <br />
        </>
      }
      buttons={[
        <LoudButton key='a' onClick={scrollToProblem}>Read WIP Case Study &nbsp;↓</LoudButton>,
        <LoudButton as='a' key='b' href='https://tedxuw.com/' target='_blank'>
          Live Website&nbsp; ↗
        </LoudButton>
      ]}
    />
  );
};

export default TedIntro;
