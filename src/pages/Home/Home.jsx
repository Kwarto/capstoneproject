import React from "react";
import SearchBar from '../../components/SearchBar/SearchBar'
import HeaderSlider from '../../components/HeaderSlider/HeaderSlider'
import HeaderCategory from '../../components/HeaderCategory/HeaderCategories'
import HomeSales from '../../components/HomeSales/PopularSales'
import NewsLetter from "../../sections/NewsLetter/NewsLetter";

function Home() {
    return(
        <>
           <SearchBar />
           <HeaderSlider />
           <HeaderCategory />
           <HomeSales />
           <NewsLetter />
        </>
    )
}

export default Home