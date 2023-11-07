import React from 'react';
import cl from './select.module.css';

const Select = ({options, value, onChange}: any) => {
    return (
        <select
          className={cl.select }
          style={{visibility: 'visible'}}
          value={value}
          onChange={event => onChange(event.target.value)}
        >
            {options.map((option: any) => 
                <option className={cl.option} key={option.value} value={option?.value}>
                    {option?.name}
                </option>
            )}
        </select>
    );
};

export default Select;