import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
  <div className='widgetHeader'>
    <h3 className='widgetHeaderTitle'>Your Options</h3>
    <button
      className='button buttonLink'
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
  </div>
    {props.options.length === 0 && <p className='widgetMessage'>Please add an option to get started.</p>}
    {
      props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;
