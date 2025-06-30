import "./index.css";
function App() {
  return (
    <div className="p-[20px]">
      <h1 className="border-2 w-[500px] p-[10px] text-[50px] bg-amber-200 m-auto text-center rounded-[20px]">Educational website about animals</h1>
      <div className="flex gap-[15px]">
        <div>
          <h2 className="border-2 w-[500px] text-[27px] mt-[15px] p-[10px] bg-amber-200">Guinea pig</h2>
          <p className="border-2 w-[400px] p-[15px] text-[15px] mt-[10px] bg-amber-300">The guinea pig or domestic guinea pig Cavia porcellus, also known as the cavy or domestic cavy, is a species of rodent belonging to the genus Cavia, family Caviidae. Breeders tend to use the name "cavy" for the animal, but "guinea pig" is more commonly used in scientific and laboratory contexts.</p>
        </div>
        <div>
          <h2 className="border-2 w-[500px] text-[27px] mt-[15px] p-[10px] bg-blue-200">Lion</h2>
          <p className="border-2 w-[400px] p-[15px] text-[15px] mt-[10px] bg-blue-300">The lion is a large cat of the genus Panthera, native to Sub-Saharan Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a dark, hairy tuft at the tip of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane</p>
        </div>
      </div>
    </div>
  );
}

export default App;
