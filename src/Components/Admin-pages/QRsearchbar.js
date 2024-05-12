import React from 'react';
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from './assets/Search.svg';
import PropTypes from 'prop-types';
import useAutocomplete from '@mui/material/useAutocomplete';
import { autocompleteClasses } from '@mui/material/Autocomplete';

const Search = styled('div')(() => ({
  borderRadius: '5px',
  backgroundColor: '#EEEE',
  position: 'relative',
  width: '300px',
  height: '40px',

  '&:hover': {
    backgroundColor: alpha('#CCCC', 0.85),
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  position: 'absolute',
  padding: '0 10px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CloseIconWrapper = styled('div')(() => ({
  position: 'absolute',
  height: '100%',
  right: 0,
  top: 0,
  padding: '0 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
  },
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: '40px',
  paddingRight: '40px',
  paddingTop: '3px',
  height: '100%',
}));

const Listbox = styled('ul')(() => ({
  width: '100%',
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#f1f1f1',
  overflow: 'auto',
  maxHeight: 200,
  borderRadius: '0 0 10px 10px',
  border: '1px solid rgba(0,0,0,.25)',
  '& li': { textAlign: 'left', paddingLeft: '10px' },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

const QRsearchbar = ({
  value,
  width,
  onChange,
  placeholder,
  height,
  onCancelResearch,
  onSearch,
  className,
  style,
  disabled,
  options,
}) => {
  const [internalValue, setInternalValue] = useState(value || '');

  const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      id: 'use-autocomplete',
      freeSolo: true,
      options: options || ["apple"],
      getOptionLabel: option => option,
      filterOptions: options => {
        if (options === undefined) return [];
        let newOptions = options.filter(option => {
          return option ? option.toLowerCase().includes(internalValue ? internalValue.toLowerCase() : "") : [];
        });
        return newOptions.slice(0, 5);
      },
    });

  const handleChange = e => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleCancel = () => {
    setInternalValue('');
    if (onCancelResearch) {
      onCancelResearch(internalValue);
    }
  };

  const handleClickOption = e => {
    setInternalValue(e.target.textContent);
    if (onChange) {
      onChange(e.target.textContent);
    }
    if (onSearch) return onSearch(e.target.textContent);
  };

  const handleKeyUp = e => {
    if (e.keyCode === 13 || (e.code === 'Enter' && onSearch)) {
      onSearch();
    } else if (e.keyCode === 27 || e.code === 'Escape') {
      handleCancel();
    }
  };

  return (
    <>
      <Search
        {...getRootProps()}
        key={'SearchBarComponent-root'}
        style={{ ...style, width: width || '300px', height: height || '40px' }}
        className={`SearchBarComponent-root ${className ? className : null}`}
      >
        <SearchIconWrapper>
        <img src={  SearchIcon} style={{width:26,height:26}}/>
       
        </SearchIconWrapper>
        <StyledInputBase
          inputProps={{ ...getInputProps(), onChange: handleChange, value: internalValue }}
          placeholder={placeholder || 'Search'}
          onKeyUp={handleKeyUp}
          disabled={disabled}
          
        />
        {internalValue ? (
          <CloseIconWrapper onClick={handleCancel}>
            {/* <CloseIcon /> */}
          </CloseIconWrapper>
        ) : null}

        {groupedOptions.length > 0 && internalValue.length ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li {...getOptionProps({ option, index })} onClick={handleClickOption}>
                <strong>{option}</strong>
              </li>
            ))}
          </Listbox>
        ) : null}
      </Search>
    </>
  );
};

QRsearchbar.propTypes = {
  className: PropTypes.string,
  width: PropTypes.node,
  // changes the default height of component
  height: PropTypes.node,
  // override the placeholder
  placeholder: PropTypes.string,
  // value of input text field
  value: PropTypes.string,
  // fired when input value changes
  onChange: PropTypes.func,
  // fired when the search is canceled
  onCancelResearch: PropTypes.func,
  // fired when press enter
  onSearch: PropTypes.func,
  // override styles of the root element
  style: PropTypes.object,
  // disable text field
  disabled: PropTypes.bool,
  //options of autocomplete suggests
  options: PropTypes.array,
};

export default QRsearchbar;