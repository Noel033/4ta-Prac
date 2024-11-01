const Navigation = () => {
  return (
    <div>
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.oddspedia.bg/media/es/1x1/sport-dota-2.jpg"
              alt="Logo"
              className="navbar-logo h-16 w-auto"
            />
            <h1 className="text-2xl font-bold">La Guarida de Antibush</h1>
          </div>
          <div className="relative">
            <input
              type="search"
              placeholder="¿Qué estás buscando?"
              className="w-64 px-4 py-2 rounded-lg bg-gray-700 text-white"
            />
          </div>
        </div>
      </header>
      <nav>
        <ul className="flex space-x-4 p-4 bg-gray-800">
          <li>
            <a href="index.html" className="text-white hover:underline">
              INICIO
            </a>
          </li>
          <li>
            <a href="torneos.html" className="text-white hover:underline">
              TORNEOS
            </a>
          </li>
          <li>
            <a href="recargas.html" className="text-white hover:underline">
              RECARGAS
            </a>
          </li>
          <li>
            <a href="accesorios.html" className="text-white hover:underline">
              ACCESORIOS
            </a>
          </li>
          <li>
            <a href="acerca.html" className="text-white hover:underline">
              ACERCA DE
            </a>
          </li>
          <li>
            <a href="contac.html" className="text-white hover:underline">
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
