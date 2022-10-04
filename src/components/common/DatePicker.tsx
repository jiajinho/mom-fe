import React from 'react';
import styled from 'styled-components/macro';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';

const Wrapper = styled.div`
  & > div, & > div > div {
    width: fit-content;
  }

  & .react-datepicker {
    display: flex;
  }

  & .react-datepicker__time-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  & .react-datepicker__header--time {
    height: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .react-datepicker__time {
    height: 1px;
    flex-grow: 1;
    overflow: hidden;
  }

  & .react-datepicker__time-list-item {
    display: flex;
    align-items: center;
  }
`;

const Picker = styled(DatePicker)`
  padding: 10px 12px;
  border-radius: 4px;

  border: 1px solid #bbb;
  outline: none;

  font-family: var(--font-family);

  &:focus {
    border-color: var(--primary-color);
  }
`;

export default ({ onChange, ...props }: {
  onChange: (d: Date) => void
} & Omit<ReactDatePickerProps, "onChange">
) => {
  const handleChange = (d: any) => {
    if (d instanceof Date) {
      onChange(d);
    }
  }

  return (
    <Wrapper>
      <Picker
        {...props}
        placeholderText="yyyy/MM/dd   h:mm aa"
        dateFormat="yyyy/MM/dd   h:mm aa"
        onChange={handleChange}
        showTimeSelect
      />
    </Wrapper>
  );
}