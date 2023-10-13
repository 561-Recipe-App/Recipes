import * as React from 'react';
import MainLayout from '../../components/MainLayout';
import SearchBar from '../../components/HomeSearchBar';

export default function Home() {
  return (
    <>
      <MainLayout>
        <SearchBar />
      </MainLayout>
    </>
  );
}
