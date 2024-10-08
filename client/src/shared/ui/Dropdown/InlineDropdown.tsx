import React, { useState, useRef, useEffect } from "react";
import styles from "./InlineDropdown.module.css";

interface Option {
  value: string;
  label: string;
}

interface InlineDropdownProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  options: Option[];
}

export const InlineDropdown: React.FC<InlineDropdownProps> = ({
  label,
  values,
  onChange,
  options,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionChange = (optionValue: string) => {
    if (values.includes(optionValue)) {
      onChange(values.filter((value) => value !== optionValue));
    } else {
      onChange([...values, optionValue]);
    }
  };

  // Закрытие выпадающего списка при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isSelected = (optionValue: string) => values.includes(optionValue);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <div className={styles.header}>
        <label
          className={styles.filterLabel}
          onClick={handleToggle}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleToggle();
          }}
        >
          {label}
        </label>
        <button
          type="button"
          className={`${styles.dropdownToggle} ${isOpen ? styles.up : ""}`}
          onClick={handleToggle}
          aria-label="Toggle Dropdown"
        >
          <img src="../../public/img/arrow.svg" alt="arrow" />
        </button>
      </div>
      <ul
        className={`${styles.dropdownMenu} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {options.map((option) => (
          <li key={option.value} className={styles.dropdownItem}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isSelected(option.value)}
                onChange={() => handleOptionChange(option.value)}
                className={styles.hiddenCheckbox}
              />
              <span className={styles.customCheckbox}></span>
              {option.label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
