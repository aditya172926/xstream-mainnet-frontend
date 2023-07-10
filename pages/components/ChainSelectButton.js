const ChainSelectButton = ({ name, chain, setChain }) => {
  console.log(name);
  return (
    <button
      onClick={() => setChain(`${name}`)}
      className={`py-[20px] px-[30px]  gap-2.5  flex justify-center items-center font-semibold  w-[91px] rounded-[10px] text-[rgba(150,208,104,1)] ${
        chain == name ? "bg-white" : ""
      }`}
    >
      <p className=" m-0 leading-[19.530521392822266px]">{name}</p>
    </button>
  );
};

export default ChainSelectButton;
