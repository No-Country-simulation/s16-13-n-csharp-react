import Home from "./pages/Home/Home";

function App() {
  // const darkMode = () => {
  //   document.documentElement.classList.toggle("dark");
  // };

  return (
    <div className="size-full text-text">
      {/* <button
        onClick={darkMode}
        className="bg-secondary-dark text-primary-light p-2 rounded-md"
      >
        Dark mode
      </button> */}
      <Home />
    </div>
  );
}

export default App;
