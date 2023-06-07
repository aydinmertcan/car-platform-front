import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const Autocomplete = () => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOptions = async (inputValue) => {
    setIsLoading(true);

    try {
      const response = await axios.get(`http://localhost:8080/api/v1/car/get-autocomplete-results?q=${inputValue}`);
      const data = response.data;

      const mappedOptions = data.map((item) => ({
        value: item.id,
        label: (item.carBrand + ' - ' + item.carModel + ' - ' + item.productionYear) ,
      }));

      setOptions(mappedOptions);
    } catch (error) {
      console.error('Error fetching autocomplete options:', error);
    }

    setIsLoading(false);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (inputValue) => {
    if (inputValue) {
      fetchOptions(inputValue);
    } else {
      setOptions([]);
    }
  };

  return (
    <Select
      value={selectedOption}
      options={options}
      onChange={handleSelectChange}
      onInputChange={handleInputChange}
      isLoading={isLoading}
      placeholder="Search..."
    />
  );
};

export default Autocomplete;
