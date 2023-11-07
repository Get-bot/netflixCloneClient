import Hero from "../../components/Hero/Hero";
import MainBanner from "../../components/UI/MainBanner/MainBanner";
import GridItemsContainer from "../../components/GridItemsContainer/GridItemsContainer";
import FaqSection from "../../components/FaqSection/FaqSection";

const MainPage = () => {
  return (
    <>
      <Hero key={"hero"}/>
      <MainBanner key={"main-banner"}/>
      <GridItemsContainer key={"grid-item"}/>
      <FaqSection key={"faq"}/>
    </>
  )
}

export default MainPage;

