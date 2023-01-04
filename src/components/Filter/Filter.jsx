import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, changeFilter } from 'redux/filter';

import { FilterInput } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    console.log(changeFilter);
    dispatch(changeFilter(event.currentTarget.value));
  };

  return (
    <FilterInput
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      placeholder="search..."
    />
  );
}

// git test
