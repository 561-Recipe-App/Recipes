import * as React from 'react';
import MainLayout from '../../components/MainLayout';
import CardContainer from '../../components/CardContainer';
// import adelineImage from "./adeline.jpg";

export const AboutPage = () => {
  
    const textStyle = {
      color: 'darkblue',
      fontSize: '18px',
    };
  return (
    <MainLayout>
      <figure style= {textStyle} className="text-center">
        <h1 className='center'>About Us</h1>
        <p>This is our team</p>
      </figure>
      
      <CardContainer count={5}
      cardContent={[
    { title: "Adeline Guizar", text: "I am a senior computer engineering major at San Diego State University!", image: ""},
    { title: "Card 2", text: "This is card 2 content", image:"" },
    { title: "Card 3", text: "This is card 3 content", image:""  },
    { title: "Card 4", text: "This is card 4 content", image:""  },
    { title: "Card 5", text: "This is card 5 content", image:""  },
  ]} />
    </MainLayout>
  );
};
