import * as React from "react";
import MainLayout from "../../../../client/src/components/MainLayout";
import CardContainer from "../../../../client/src/components/CardContainer";


export const AboutPage = () => {
  return (
    <MainLayout>
      <figure className="text-center">
        <h1 className="center">About Us</h1>
        <p>This is our team</p>
      </figure>

      <CardContainer count={5}
                     cardContent={[
                       { title: "Card 1", text: "This is card 1 content" },
                       { title: "Card 2", text: "This is card 2 content" },
                       { title: "Card 3", text: "This is card 3 content" },
                       { title: "Card 4", text: "This is card 4 content" },
                       { title: "Card 5", text: "This is card 5 content" }
                     ]} />
    </MainLayout>
  );
};
