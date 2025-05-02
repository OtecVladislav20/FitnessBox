import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  border-radius: 20px;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #60B663;
  border: none;
  border-radius: 13px;
  cursor: pointer;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Alumni Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #fff;

  &:hover {
    background-color: #7CBA7E;
  }
`;

const DropdownList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: -5px;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #60B663;
  border: 3px solid #60B663;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${(props) => props.isOpen ? 'block' : 'none'};
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 12px;

  font-family: 'Alumni Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #fff;

  &:hover {
    background-color: #7CBA7E;
  }
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: ${(props) => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export default function Drop(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Выберать тренера');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: 'chose', label: 'Выбрать тренера' },
    { value: 'trainer', label: 'Маслаков Владислав Денисович' },
    // { value: 'user', label: 'Пользователь' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: 'trainer' | 'user') => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {options.find((opt) => opt.value === selectedOption)?.label}
        <ArrowIcon isOpen={isOpen}>▼</ArrowIcon>
      </DropdownButton>
      <DropdownList isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => handleOptionClick(option.value as 'trainer' | 'user')}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}
