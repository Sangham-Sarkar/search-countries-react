import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

function SearchBar() {
  return (
    <div>
      <InputGroup>
        <InputLeftElement children={<SearchIcon color="gray.300" />} />
        <Input type="search" placeholder="Search for a country..." />
      </InputGroup>
    </div>
  );
}

export default SearchBar;
