import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  width: 544px;
  margin-bottom: 7px;
  border: 5px solid #E06C20;
  border-radius: 20px;
  background-color: transparent;
`;

const DropdownButton = styled.button`
  width: 100%;
  padding: 20px 30px;
  background-color: transparent;
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
  font-size: 32px;
  color: #fff;

  &:hover {
    background-color: #E06C20;
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
  background-color: #202F39;
  border: 5px solid #E06C20;
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
  font-size: 32px;
  color: #fff;

  &:hover {
    background-color: #E06C20;
  }
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s ease;
  transform: ${(props) => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

export default function Dropdown(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'trainer' | 'user'>('user');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    { value: 'trainer', label: 'Тренер' },
    { value: 'user', label: 'Пользователь' }
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

