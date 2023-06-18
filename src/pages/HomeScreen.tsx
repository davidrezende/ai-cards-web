import React from 'react';
import { Hero} from 'react-daisyui';
import { HomeWelcomeText } from '../components/home/HomeWelcomeText';
import { HomeBox } from '../components/home/HomeBox';


export const HomeScreen: React.FC<any> = (props) => {

  return (

    <Hero>
      <Hero.Content className="flex-col lg:flex-row gap-y-5 gap-x-80 pb-96">
        <HomeWelcomeText></HomeWelcomeText>
        <HomeBox></HomeBox>
      </Hero.Content>
    </Hero>
  )
}