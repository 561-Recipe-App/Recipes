import * as React from 'react';
import MainLayout from '../../components/MainLayout';
import CardContainer from '../../components/CardContainer';
import 'bootstrap/dist/css/bootstrap.min.css';



export const AboutPage = () => {
  return (
    <MainLayout>
      <figure className="text-center">
        <h1 className='center'>About Us</h1>
        <p>This is our team</p>
      </figure>
      
      <CardContainer count={5} />
    </MainLayout>
  );
};
