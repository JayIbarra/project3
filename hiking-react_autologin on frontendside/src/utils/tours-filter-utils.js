export const filterTours = (_filterParams, items) => {
  console.log('filterTours');
  const defaultFilterParams = {
    search: '',
    trail_length_min: 0,
    trail_length_max: 99,
    difficulty: 'ALL'
  };
  const filterParams = {
    ...defaultFilterParams,
    ..._filterParams
  };

  console.log(filterParams);
  console.log(items);

  let query = '';
  if (typeof filterParams.search === 'string') {
    query = filterParams.search.trim();
  }

  const query_filter = (items, query) => {
    if (typeof query === 'string') {
      if (query !== '') {
        // do search
        let results = [];
        // step 1) search query filtering
        items.forEach((item) => {
          if (item.name.toUpperCase().includes(query.toUpperCase()) || item.description.toUpperCase().includes(query.toUpperCase())) {
            // if query found in tour name or description
            results.push(item);
          }
        })
        return results;

      } else {
        return items;
      }
    } else {
      return items;
    }
  }

  // FILTERING 1) search query filtering
  let search_results = query_filter(items, query);


  // FILTERING 2) classic filtering...
  const filteredItems = search_results.filter((item) => {
    let total_test = true;
    let trail_length_min = 0;
    if (Number.parseInt(filterParams.trail_length_min) > 0) {
      trail_length_min = Number.parseInt(filterParams.trail_length_min);
    }
    let trail_length_max = 0;
    if (Number.parseInt(filterParams.trail_length_max) > 0) {
      trail_length_max = Number.parseInt(filterParams.trail_length_max);
    }
    // testing
    const test_1 = () => {
      let test = true;
      if (item.trail_length >= trail_length_min) {
        // test = true;
        // testing second only if we found first
        if (trail_length_max > 0 && trail_length_max >= trail_length_min) {
          if (item.trail_length <= trail_length_max) {
            // test = true;
          } else {
            test = false;
          }
        }
      } else {
        test = false;
      }
      return test;
    }
    /*
    const test_2 = () => {
      let test = true;
      if (filterParams.category === 'ALL') {
        // true
      } else {
        if (filterParams.category !== item.category) {
          test = false;
        }
      }
      return test;
    }
    */
    const test_3 = () => {
      let test = true;
      if (filterParams.difficulty === 'ALL') {
        // true
      } else {
        if (filterParams.difficulty !== item.difficulty) {
          test = false
        }
      }
      return test
    }

    // executing tests
    if (!test_1()) {
      total_test = false;
    }
    /*
    if (!test_2()) {
      total_test = false;
    }
    */
    if (!test_3()) {
      total_test = false
    }
    return total_test;

  });


  // STEP 3) output
  console.log(filteredItems)
  return filteredItems;
}
