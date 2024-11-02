const RechargeOptions = () => {
  const games = [
    {
      id: 1,
      name: "League of Legends",
      title: "Recarga para League of Legends",
      description: "Obtén RP para desbloquear campeones, skins y más.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFI97kJNHpZJQMlT1yxcx4K6MNPjrh7atzfw&s.png",
      currency: "RP",
      options: [
        { amount: "650 RP", price: "$5 USD" },
        { amount: "1380 RP", price: "$10 USD" },
        { amount: "2800 RP", price: "$20 USD" },
      ],
    },
    {
      id: 2,
      name: "Dota 2",
      title: "Recarga para Dota 2",
      description: "Adquiere Cash para obtener artículos exclusivos.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrpC35uYVYTE7WVggg6AJeuaRhiqMAUiCw7g&s.png",
      currency: "Cash",
      options: [
        { amount: "5000 Cash", price: "$50 USD" },
        { amount: "1500 Cash", price: "$100 USD" },
        { amount: "2800 Cash", price: "$200 USD" },
      ],
    },
    {
      id: 3,
      name: "MLBB",
      title: "Recarga para Mobile Legends",
      description: "Compra diamantes para skins, emotes y héroes.",
      imageUrl:
        "https://bonoxs.com/media/catalog/product/cache/1b4f2a02dc2cb7d299364f0e7e2d60e8/m/l/mlbb_recargadirecta_240x300.jpg",
      currency: "Diamantes",
      options: [
        { amount: "1000 Diam", price: "$30 USD" },
        { amount: "2000 Diam", price: "$50 USD" },
        { amount: "5000 Diam", price: "$150 USD" },
      ],
    },
    {
      id: 4,
      name: "CSGO",
      title: "Recarga para CSGO",
      description: "Aumenta tu Cash para personalizar tus armas y equipo.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTr8ntoRtH4HES8S3yfvPhzMUpxn7hhgpArw&s.png",
      currency: "Cash",
      options: [
        { amount: "3000 Cash", price: "$50 USD" },
        { amount: "15800 Cash", price: "$100 USD" },
        { amount: "30000 Cash", price: "$200 USD" },
      ],
    },
  ];

  const [modalContent, setModalContent] = React.useState(null);

  const openModal = (option, game) => {
    setModalContent({
      ...option,
      gameTitle: game.title,
      gameDescription: game.description,
    });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        RECARGAS DE JUEGOS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game) => (
          <div key={game.id} className="tournament-card p-6">
            <img
              src={game.imageUrl}
              alt={game.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{game.title}</h3>
            <p className="text-gray-700 mb-4">{game.description}</p>
            <div className="space-y-4">
              {game.options.map((option, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{option.amount}</span>
                  <button
                    className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                    onClick={() => openModal(option, game)}
                  >
                    {option.price}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal-content bg-blue-500 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-2">
              {modalContent.gameTitle}
            </h2>
            <p className="mb-2">{modalContent.gameDescription}</p>
            <p className="text-xl font-semibold">{`El precio es: ${modalContent.price}`}</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};