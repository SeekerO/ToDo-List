import Side from "./sidebar/Side";
import Main from "./main/Main";
function App() {
  return (
    <div className="h-screen w-screen bg-[#a4bbb9] p-10">
      <div className="flex h-full w-full bg-slate-100 rounded-xl shadow-lg shadow-slate-700">
        <Side />
        <Main />
      </div>
    </div>
  );
}

export default App;
