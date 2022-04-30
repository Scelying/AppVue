import './App.css';

function App() {
  const title = 'Mi primera Aplicación';
  return(
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">{title}</h2>
        <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
      
        </div>
      </div>
    </div>
  );
}

export default App;
