import * as React from 'react';
import MainLayout from '../../components/MainLayout';
import CardContainer from '../../components/CardContainer';


export const AboutPage = () => {
  const cardContent: {
    title: string;
    text: string;
    image?: string;
  }[]=[
    { 
      title: "Arianna-Sarahi Bergado", 
      text: "Hello, my name is Arianna-Sarahi Bergado. I am from San Diego, California. I got to San Diego State University and am a fourth year Computer Engineering major. My expected graduation is Spring 2024." ,
      image: "https://cdn.discordapp.com/attachments/951627719198781541/1181489991952646164/52AA9682-C240-4F84-90C4-D7590C1891FE.jpg?ex=65813f4d&is=656eca4d&hm=154fbc4981efcdcc006fb889a669c3106e83fa7eb85f3dded152a8211c0b2a50&"
    },  
    { title: "Haiden Thai", 
      text: "Hi, I'm Hayden Thai and I'm a senior computer engineering major at San Diego State. I'm from Westlake Village, California and I'm interested in Computer Vision and LLMs." ,
      image: "https://cdn.discordapp.com/attachments/951627719198781541/1181489914378993764/7dafe8b0f90011ed8768d7edbbeeee35-CROPPED_DOWNLOADABLE_1_1.jpg?ex=65813f3a&is=656eca3a&hm=aa176ad945d1774ff847917c70495eb2d8a6816acffe73f2985bb5129f2cdf91&"
    },
    { title: "Samuel Martinez", 
      text: "Hello, my name is Samuel Martinez. I'm a Computer Engineering undergrad student at San Diego State University coming out of Chula Vista, California, interested in embedded systems." ,
      image: "https://cdn.discordapp.com/attachments/951627719198781541/1181489954505900102/IMG_3198.PNG?ex=65813f44&is=656eca44&hm=627c493d3b54f651b86d857667cd2b943bac0cfd9e482ef833c4713dd6a74d7b&"
    },
    { title: "Card", text: "This is card 4 content" },
    { title: "Card 5", text: "This is card 5 content" },
    
  ];


    return (
      <MainLayout>
        <figure className="text-center">
          <h1 className='center'>About Us</h1>
          <p>Meet the team</p>
        </figure>
        
        <CardContainer 
        count={5}
        cardContent={cardContent} 
      />
    </MainLayout>
  );
};
