import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function Dropdown({lst, label}) {
  const [str, setStr] = React.useState('');

  const handleChange = (event) => {
    setStr(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 195 }} style={{margin:5}}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={str}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {lst.map(val => <MenuItem value={val}>{val}</MenuItem>)}
      </Select>
    </FormControl>
  );
}