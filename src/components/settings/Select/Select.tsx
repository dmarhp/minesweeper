import './Select.scss';

interface SelectProps {
  title: string;
  options: number[];
  selected: number;
  toggleSelected: (amount: number) => void;
}

export const Select = ({ title, options, selected, toggleSelected }: SelectProps) => (
  <div className="select__wrapper">
    {title}
    <select
      className="select__button"
      value={selected}
      onChange={(event) => toggleSelected(parseInt(event.target.value, 10))}
    >
      {options.map((item) => (
        <option value={item} key={item}>{item}</option>
      ))}
    </select>
  </div>
);
