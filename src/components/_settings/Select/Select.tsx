import { useState } from 'react';

interface SelectProps {
  title: string;
  options: number[];
  toggleSelected: (amount: number) => void;
}

export const Select = ({ title, options, toggleSelected }: SelectProps) => {
  const [selected, setSelected] = useState(options[0]);

  const onSelectChange = (value: string) => {
    setSelected(parseInt(value, 10));
    toggleSelected(parseInt(value, 10));
  };

  return (
    <div>
      {title}
      <select
        value={selected}
        onChange={(event) => onSelectChange(event.target.value)}
      >
        {options.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
