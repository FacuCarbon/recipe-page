import Omelette from "./components/omelette/Omelette";

function App() {
  return (
    <main>
      <Omelette />
      <footer className="mt-4 p-3 bg-slate-500 text-white flex flex-col">
        <div className="w-full flex justify-center p-2 items-center">
          <p className="mr-4 md:mr-1">Challenge by</p>
          <a
            className="m-0 hover:text-sky-700"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor.
          </a>
        </div>

        <div className="w-full flex justify-center p-2 items-center">
          <p className="mr-4 md:mr-1">Coded by</p>
          <a
            className="m-0 hover:text-sky-700"
            href="https://github.com/FacuCarbon"
          >
            Facundo Carbón
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
