const AccessoryCard = ({ item }) => {
  const [isAdded, setIsAdded] = React.useState(false);

  return (
    <div className="tournament-card p-4">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-bold mb-2">{item.name}</h3>
      <p className="text-gray-400 mb-2">{item.description}</p>
      <p className="text-xl text-indigo-400 mb-4">{item.price}</p>
      <button
        onClick={() => setIsAdded(true)}
        className={`w-full ${
          isAdded ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
        } py-2 rounded`}
        disabled={isAdded}
      >
        {isAdded ? "Añadido" : "Añadir al carrito"}
      </button>
    </div>
  );
};
const AccessoriesList = () => {
  const accessories = [
    {
      id: 1,
      name: "Mouse Gamer RGB",
      imageUrl:
        "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125240618_03/w=800,h=800,fit=pad.png",
      price: "$49.99",
      description: "Mouse gaming con sensor óptico y RGB personalizable",
    },
    {
      id: 1,
      name: "PC Gamer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuYyaHkY6gAMDL1K_qk0cx_9aKVZX6-h3_Q&s.png",
      price: "$49999.99",
      description: "PC Gamer con sensor óptico y RGB personalizable",
    },
    {
      id: 1,
      name: "Teclado Gamer",
      imageUrl:
        "https://promart.vteximg.com.br/arquivos/ids/7859828-1000-1000/135328.jpg?v=638446832992000000.png",
      price: "$99.99",
      description: "Teclado Gamer con sensor óptico y RGB personalizable",
    },
    {
      id: 1,
      name: "Monitor Gamer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIrkbabiye31MXK9Auy4CAz69CCTpJojZrVw&s.png",
      price: "$599.99",
      description: "Monitor Gamer con sensor óptico y RGB personalizable",
    },
    {
      id: 1,
      name: "Cpu Gamer",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaB2a2Sb5PutSY8_MAQpnjOLXpk5M1q0drkw&s.png",
      price: "$69999.99",
      description: "Cpu Gamer con sensor óptico y RGB personalizable",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        ACCESORIOS GAMING
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessories.map((item) => (
          <AccessoryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
