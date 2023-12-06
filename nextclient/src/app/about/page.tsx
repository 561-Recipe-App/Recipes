"use client";
import * as React from "react";

const cardContent: CardContent[] = [
  {
    title: "Arianna-Sarahi Bergado",
    text: "Hello, my name is Arianna-Sarahi Bergado. I am from San Diego, California. I got to San Diego State University and am a fourth year Computer Engineering major. My expected graduation is Spring 2024.",
    image: "https://cdn.discordapp.com/attachments/951627719198781541/1181489991952646164/52AA9682-C240-4F84-90C4-D7590C1891FE.jpg?ex=65813f4d&is=656eca4d&hm=154fbc4981efcdcc006fb889a669c3106e83fa7eb85f3dded152a8211c0b2a50&"
  },
  {
    title: "Hayden Thai",
    text: "Hi, I'm Hayden Thai and I'm a senior computer engineering major at San Diego State. I'm from Westlake Village, California and I'm interested in Computer Vision and LLMs.",
    image: "https://cdn.discordapp.com/attachments/951627719198781541/1181489914378993764/7dafe8b0f90011ed8768d7edbbeeee35-CROPPED_DOWNLOADABLE_1_1.jpg?ex=65813f3a&is=656eca3a&hm=aa176ad945d1774ff847917c70495eb2d8a6816acffe73f2985bb5129f2cdf91&"
  },
  {
    title: "Samuel Martinez",
    text: "Hello, my name is Samuel Martinez. I'm a Computer Engineering undergrad student at San Diego State University coming out of Chula Vista, California, interested in embedded systems.",
    image: "https://cdn.discordapp.com/attachments/951627719198781541/1181489954505900102/IMG_3198.PNG?ex=65813f44&is=656eca44&hm=627c493d3b54f651b86d857667cd2b943bac0cfd9e482ef833c4713dd6a74d7b&"
  },
  {
    title: "Adeline Guizar",
    text: "Hi I'm Adeline Guizar, I am a senior computer engineering student at San Diego State Universtiy. I'm from the Bay Area, San Jose specifically and I am intrested in machine learning.",
    image: "https://cdn.discordapp.com/attachments/951627719198781541/1181825309725704262/Adeline_picture.jpg?ex=65827797&is=65700297&hm=d75e5edca7d74a259a9f4ba79e6d2958b204554df80bdfe07aeb5301d5932d61&"
  },
  {
    title: "Txomin Errasti",
    text: "Hello, I am Txomin Errasti. I'm a Computer Science undergrad student from Spain, I am interested in Cibersecurity and XR development.git branc",
    image: "https://cdn.discordapp.com/attachments/1181454253584293959/1181659351170154516/DSC00396.jpg?ex=6581dd07&is=656f6807&hm=834e1f8c525e24fdb4c67733403dbf2437aa990f37936e14dd28e7be53759849&"
  }

];

interface CardContent {
  title: string;
  text: string;
  image: string;
}

export default function AboutPage() {

  return (
    <>


      <div className="container mx-auto px-4 mt-5">
        <div className="flex flex-row flex-wrap justify-center gap-6">
          {cardContent.map((content, index) => (
            <div key={index} className="max-w-sm">
              <div
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img src={content.image} alt={content.title} className="w-full h-55 object-cover" />
                <div className="p-4">
                  <h2 className="font-semibold text-xl mb-2 dark:text-gray-600">{content.title}</h2>
                  <p className="text-gray-600 ">{content.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
