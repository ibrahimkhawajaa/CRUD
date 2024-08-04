
export default function InputField({ Name,onchange,value }) {
  return (
    <input 
      type="text" 
      placeholder={Name} 
      className='border-black border-2 py-2 px-4 outline-none' 
      onChange={onchange} 
      value={value}
      required
    />
  );
}
