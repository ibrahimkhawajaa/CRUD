

export default function Button({ Name, onClick }) {
  return (
    <button className='bg-black text-white px-3 py-1 rounded' onClick={onClick}>
      {Name}
    </button>
  );
}
