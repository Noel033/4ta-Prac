const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">SOBRE NOSOTROS</h1>
        <img
          src="https://images.prismic.io/winnder/ZjneMkMTzAJOCl3G_CUERPO.jpg?auto=format%2Ccompress&rect=0%2C0%2C960%2C540&w=960&h=540"
          alt="Nuestro equipo"
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <div className="space-y-6 text-lg">
          <p>
            La Guarida de Antibush es una plataforma líder en la organización de
            torneos de esports y venta de productos gaming en Latinoamérica.
          </p>
          <p>
            Fundada en 2024, nos dedicamos a crear experiencias competitivas
            únicas para jugadores de todos los niveles, proporcionando un
            ambiente seguro y profesional para el desarrollo del gaming
            competitivo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold mb-2">Misión</h3>
              <p className="text-gray-300">
                Fomentar el crecimiento del gaming competitivo en la región.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Visión</h3>
              <p className="text-gray-300">
                Ser la principal plataforma de esports en Latinoamérica.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Valores</h3>
              <p className="text-gray-300">
                Integridad, Pasión, Innovación y Comunidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
