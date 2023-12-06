import * as React from "react";
import MainLayout from "../../../../client/src/components/MainLayout";
import SearchBar from "../../../../client/src/components/HomeSearchBar";

export default function Home() {
  return (
    <>
      <MainLayout>
        <SearchBar />
      </MainLayout>
    </>
  );
}
