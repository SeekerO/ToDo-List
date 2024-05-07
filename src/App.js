import Side from "./sidebar/Side";
import Main from "./main/Main";
function App() {
  return (
    <div className="h-screen w-screen bg-[#08080d] ">
      <div className=" text-white flex gap-5 h-full items-center justify-center">
        <Main />
        <Side />
      </div>
    </div>
  );
}

export default App;
