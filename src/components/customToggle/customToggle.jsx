import React, { useState } from 'react';
import { Switch } from '@mui/material';

const ToggleButton = ({ label, description, position = 'right', disabled = false }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    if (!disabled) {
      setChecked(event.target.checked);
    }
  };

  return (
    <div className="flex items-center justify-between" style={{ width: 340, height: 46 }}>
      {/* Left-aligned label and description */}
      {position === 'left' && (
        <div className="flex flex-col" style={{ width: 288, textAlign: 'left' }}>
          <span style={{
            fontFamily: 'Proxima Nova, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '140%',
            letterSpacing: '0%',
            color: disabled ? 'var(--Neutral-N200, #858585)' : 'var(--Text-T500, #17222B)', // Gray text when disabled
            opacity: disabled ? 0.5 : 1, // Reduce opacity when disabled
          }}>
            {label}
          </span>
          {description && (
            <span style={{
              fontFamily: 'Proxima Nova, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: disabled ? 'var(--Neutral-N200, #858585)' : 'var(--Neutral-N200, #858585)', // Gray text when disabled
              marginTop: '4px',
              width: '340px',
              height: '22px',
              opacity: disabled ? 0.5 : 1, // Reduce opacity when disabled
            }}>
              {description}
            </span>
          )}
        </div>
      )}

      {/* Customized Toggle Button */}
      <Switch
        checked={checked}
        onChange={handleChange}
        disabled={disabled} // Disable the switch when the `disabled` prop is true
        disableRipple
        sx={{
          width: "40px",
          height: "24px",
          padding: 0,
          borderRadius: '24px', // Fully rounded corners for the track
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 0, // Remove margin to fix alignment
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)', // Move thumb to the right when checked
              '& + .MuiSwitch-track': {
                backgroundColor: disabled ? '#E0E0E0' : '#17222B', // Light gray background when disabled and checked
                opacity: 1,
                border: 0,
              },
              '&:hover + .MuiSwitch-track': {
                backgroundColor: disabled ? '#E0E0E0' : '#4A5965', // No hover effect when disabled
              },
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              backgroundColor: '#E0E0E0', // Light gray background when disabled
              border: '1px solid var(--Text-T100, #4A5965)', // Border for the track when disabled
              opacity: 0.5,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            boxShadow: "none",
            width: "18px",
            height: "18px",
            margin: "3px 0px 0px 3px",
            borderRadius: '50%', // Fully rounded thumb
            backgroundColor: disabled ? '#BDBDBD' : (checked ? '#fff' : '#17222B'), // Light gray thumb when disabled
          },
          '& .MuiSwitch-track': {
            borderRadius: '24px', // Fully rounded track
            backgroundColor: disabled ? '#E0E0E0' : (checked ? '#17222B' : '#fff'), // Light gray background when disabled
            border: disabled ? '1px solid var(--Text-T100, #4A5965)' : '1px solid var(--Text-T100, #17222B)', // Border for the track
            opacity: 1,
            transition: 'background-color 500ms',
          },
          '&:hover .MuiSwitch-thumb': {
            backgroundColor: disabled ? '#BDBDBD' : (checked ? '#fff' : '#4A5965'), // No hover effect when disabled
          },
          '&:hover .MuiSwitch-track': {
            border: disabled ? '1px solid var(--Text-T100, #4A5965)' : '1px solid var(--Text-T100, #4A5965)', // No hover effect when disabled
          },
        }}
      />

      {/* Right-aligned label and description */}
      {position === 'right' && (
        <div className="flex flex-col" style={{ width: 288, textAlign: 'left' }}>
          <span style={{
            fontFamily: 'Proxima Nova, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '140%',
            letterSpacing: '0%',
            color: disabled ? 'var(--Neutral-N200, #818B94)' : 'var(--Text-T500, #17222B)', // Gray text when disabled
            // opacity: disabled ? 0.5 : 1, // Reduce opacity when disabled
          }}>
            {label}
          </span>
          {description && (
            <span style={{
              fontFamily: 'Proxima Nova, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: disabled ? 'var(--Neutral-N200, #BFBFBF)' : 'var(--Neutral-N200, #858585)', // Gray text when disabled
              marginTop: '4px',
              width: '340px',
              height: '22px',
            //   opacity: disabled ? 0.5 : 1, // Reduce opacity when disabled
            }}>
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;