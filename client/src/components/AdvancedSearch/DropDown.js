import { useContext } from "react";
import Select from "react-select";
import { ThemeContext } from "../../context/ThemeContext";

export default function DropDown({ title, options, value, setValue }) {
   const { colorTheme } = useContext(ThemeContext);
   const customStyles = {
      control: (styles, state) => ({
         ...styles,
         backgroundColor: `${colorTheme === "dark" ? "#F3F4F6" : "#282828"}`,
         border: "none",
         boxShadow: "none",
         height: 48,
      }),
      dropdownIndicator: (provided, state) => ({
         ...provided,
         color: `${colorTheme === "dark" ? "black" : "white"}`,
      }),
      indicatorSeparator: (provided, state) => ({
         ...provided,
         backgroundColor: `${colorTheme === "dark" ? "black" : "white"}`,
      }),
      singleValue: (provided, state) => ({
         ...provided,
         color: `${colorTheme === "dark" ? "black" : "white"}`,
      }),
      menu: (provided, state) => ({
         ...provided,
         backgroundColor: `${colorTheme === "dark" ? "#F3F4F6" : "#282828"}`,
      }),
   };
   return (
      <div>
         <div className="font-medium mb-1">{title}</div>
         <Select
            options={options}
            value={value}
            onChange={setValue}
            styles={customStyles}
            className="shadow-lg"
            theme={(theme) => ({
               ...theme,
               colors: {
                  ...theme.colors,
                  primary25: `${colorTheme === "dark" ? "#9ca3af" : "#383838"}`,
               },
            })}
         />
      </div>
   );
}
