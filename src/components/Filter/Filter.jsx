import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

import { FilterInput } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event =>
    dispatch(changeFilter(event.currentTarget.value));

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
