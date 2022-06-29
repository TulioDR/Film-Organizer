export default function Input({ type, name, placeholder, onChange, small }) {
   return (
      <input
         type={type}
         name={name}
         placeholder={placeholder}
         onChange={onChange}
         className={`bg-gray-500 text-white h-10 pl-3 focus:outline-none rounded-lg ${
            small ? "w-1/2 pr-3" : "flex-1 pr-10"
         }`}
      />
   );
}
