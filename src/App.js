import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/header";
import Searchbar from "./components/searchBar";
import CountryCard from "./components/countryCard";
function App() {
  return (
    <ChakraProvider>
      <>
        <Header></Header>
        <Searchbar></Searchbar>
        <CountryCard></CountryCard>
      </>
    </ChakraProvider>
  );
}

export default App;
