const RechargeOptions = () => {
  const games = [
    {
      id: 1,
      name: "League of Legends",
      imageUrl:
        "https://gamescenter.pe/wp-content/uploads/2020/10/League-of-Legends-RP-2490.webp",
      currency: "RP",
      options: [
        { amount: "650 RP", price: "$5 USD" },
        { amount: "1380 RP", price: "$10 USD" },
        { amount: "2800 RP", price: "$20 USD" },
      ],
    },
    {
      id: 1,
      name: "Dota 2",
      imageUrl: "https://cdn.gamefan.la/img/products/878.png",
      currency: "Cash",
      options: [
        { amount: "5000 Cash", price: "$50 USD" },
        { amount: "1500 Cash", price: "$100 USD" },
        { amount: "2800 Cash", price: "$200 USD" },
      ],
    },
    {
      id: 1,
      name: "MLBB",
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
      id: 1,
      name: "CSGO",
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
            <h3 className="text-xl font-bold mb-4">{game.name}</h3>
            <div className="space-y-4">
              {game.options.map((option, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span>{option.amount}</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded">
                    {option.price}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
