import React from 'react';
import { Hero} from 'react-daisyui';
import { CardBox } from '../components/CardBox';
import { CardCreateForm } from '../components/CardCreateForm';

export const CreateCardScreen: React.FC<any> = (props) => {

  return (
    <Hero>
      <Hero.Content className="flex-col lg:flex-row ">
        <CardCreateForm></CardCreateForm>
        <CardBox></CardBox>
      </Hero.Content>
    </Hero>
  )
}