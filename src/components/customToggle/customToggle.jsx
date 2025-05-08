import React from 'react';
import { Switch } from '@mui/material';

const ToggleButton = ({
  label,
  description,
  position = 'right',
  disabled = false,
  checked,
  onChange,
}) => {
  const handleChange = (event) => {
    if (!disabled && onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <div className="flex items-center justify-between" style={{ width: 340, height: 46 }}>
      {position === 'left' && (
        <div className="flex flex-col" style={{ width: 288, textAlign: 'left' }}>
          <span
            style={{
              fontFamily: 'Proxima Nova, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: disabled
                ? 'var(--Neutral-N200, #858585)'
                : 'var(--Text-T500, #17222B)',
              opacity: disabled ? 0.5 : 1,
            }}
          >
            {label}
          </span>
          {description && (
            <span
              style={{
                fontFamily: 'Proxima Nova, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: disabled
                  ? 'var(--Neutral-N200, #858585)'
                  : 'var(--Neutral-N200, #858585)',
                marginTop: '4px',
                width: '340px',
                height: '22px',
                opacity: disabled ? 0.5 : 1,
              }}
            >
              {description}
            </span>
          )}
        </div>
      )}

      <Switch
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        disableRipple
        sx={{
          width: '40px',
          height: '24px',
          padding: 0,
          borderRadius: '24px',
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 0,
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              '& + .MuiSwitch-track': {
                backgroundColor: disabled ? '#E0E0E0' : '#17222B',
                opacity: 1,
                border: 0,
              },
              '&:hover + .MuiSwitch-track': {
                backgroundColor: disabled ? '#E0E0E0' : '#4A5965',
              },
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              backgroundColor: '#E0E0E0',
              border: '1px solid var(--Text-T100, #4A5965)',
              opacity: 0.5,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            boxShadow: 'none',
            width: '18px',
            height: '18px',
            margin: '3px 0px 0px 3px',
            borderRadius: '50%',
            backgroundColor: disabled ? '#BDBDBD' : checked ? '#fff' : '#17222B',
          },
          '& .MuiSwitch-track': {
            borderRadius: '24px',
            backgroundColor: disabled ? '#E0E0E0' : checked ? '#17222B' : '#fff',
            border: disabled
              ? '1px solid var(--Text-T100, #4A5965)'
              : '1px solid var(--Text-T100, #17222B)',
            opacity: 1,
            transition: 'background-color 500ms',
          },
          '&:hover .MuiSwitch-thumb': {
            backgroundColor: disabled ? '#BDBDBD' : checked ? '#fff' : '#4A5965',
          },
          '&:hover .MuiSwitch-track': {
            border: disabled
              ? '1px solid var(--Text-T100, #4A5965)'
              : '1px solid var(--Text-T100, #4A5965)',
          },
        }}
      />

      {position === 'right' && (
        <div className="flex flex-col" style={{ width: 288, textAlign: 'left' }}>
          <span
            style={{
              fontFamily: 'Proxima Nova, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '140%',
              letterSpacing: '0%',
              color: disabled
                ? 'var(--Neutral-N200, #818B94)'
                : 'var(--Text-T500, #17222B)',
            }}
          >
            {label}
          </span>
          {description && (
            <span
              style={{
                fontFamily: 'Proxima Nova, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '140%',
                letterSpacing: '0%',
                color: disabled
                  ? 'var(--Neutral-N200, #BFBFBF)'
                  : 'var(--Neutral-N200, #858585)',
                marginTop: '4px',
                width: '340px',
                height: '22px',
              }}
            >
              {description}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleButton;
