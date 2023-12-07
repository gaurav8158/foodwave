export const filteredData = (searchInput, restaurants) => {
    const filterData = restaurants.filter(
      (restaurant) =>
        restaurant?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
      // The includes method checks if the string it's called on contains the specified substring.
    );
    return filterData;
  };