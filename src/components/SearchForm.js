import React from "react";

export default function SearchForm(props) {
 
  let filterTerm = '';
  let newCharactersData = []

  console.log(props.charactersData)
  const handleChanges = (event) => {
    console.log(event.target.value)
    filterTerm = event.target.value;
    newCharactersData = props.charactersData.filter(element => {
      return element.name.toLowerCase().includes(filterTerm.toLowerCase())
    })
    console.log(newCharactersData)
    props.setFilteredData(newCharactersData)
  }
  return (
    <section className="search-form">
     <form>
       <input type="text" name="searchbar" placeholder="search" onChange={handleChanges}></input>
     </form>
    </section>
  );
}
