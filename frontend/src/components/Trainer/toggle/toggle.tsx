import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
`;

const ToggleLabel = styled.span<{isOn: boolean}>`
  font-weight: bold;
  color: ${(props) => props.isOn ? '#2E7D32' : '#C62828'};
  transition: color 0.3s ease;
`;

const ToggleButton = styled.button<{ isOn: boolean }>`
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;

  ${(props) => props.isOn
    ? css`
      background-color: #4CAF50;
      box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
    `
    : css`
      background-color: #F44336;
      box-shadow: 0 0 10px rgba(244, 67, 54, 0.5);
    `}
`;

const ToggleKnob = styled.div<{ isOn: boolean }>`
  position: absolute;
  top: 3px;
  left: ${(props) => props.isOn ? '33px' : '3px'};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  transition: left 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ColorToggleSwitch: React.FC = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <ToggleContainer>
      <ToggleLabel isOn={isOn}>
        <p className='toggle-title'>Беру новые заказы</p>
      </ToggleLabel>

      <ToggleButton
        isOn={isOn}
        onClick={() => setIsOn(!isOn)}
        aria-label={isOn ? 'Turn off' : 'Turn on'}
      >
        <ToggleKnob isOn={isOn} />
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ColorToggleSwitch;
