import * as React from 'react';
import MainLayout from '../../components/MainLayout';
import SearchBar from '../../components/HomeSearchBar';
// import './client/src/pages/style/style.css';
export default function Home() {
  return (
    <>
      <MainLayout>
        <SearchBar />
      </MainLayout>
    </>
  );
}
