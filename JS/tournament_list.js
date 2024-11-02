const TournamentCard = ({ tournament }) => {
  const [isRegistered, setIsRegistered] = React.useState(false);

  return (
    <div className="tournament-card p-6">
      <img
        src={tournament.imageUrl}
        alt={tournament.game}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{tournament.game}</h3>
      <div className="space-y-2">
        <p className="text-indigo-400">Premio: {tournament.prize}</p>
        <p>Fecha: {tournament.date}</p>
        <p>Jugadores: {tournament.players}</p>
        <p className="text-green-400">{tournament.status}</p>
      </div>
      <button
        onClick={() => setIsRegistered(true)}
        className={`mt-4 w-full ${
          isRegistered ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
        } py-2 rounded`}
        disabled={isRegistered}
      >
        {isRegistered ? "Inscrito" : "Inscribirse"}
      </button>
    </div>
  );
};
const TournamentList = () => {
  const tournaments = [
    {
      id: 1,
      game: "League of Legends",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMOEBFetKxj3ZIkF8umBWm5XXsMPEk4AmBg&s.png",
      prize: "$1,000 USD",
      date: "15 de Diciembre",
      players: "128",
      status: "Inscripciones abiertas",
    },
    {
      id: 2,
      game: "Valorant",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSz2uHXP72OSC1saqQ6wDQr1q4ZSevTHNdnQ&s.png",
      prize: "$500 USD",
      date: "20 de Noviembre",
      players: "64",
      status: "Inscripciones abiertas",
    },
    {
      id: 1,
      game: "Mlbb",
      imageUrl: "https://i.ytimg.com/vi/YQXGI0KVRPE/maxresdefault.jpg",
      prize: "$10,000 USD",
      date: "25 de Diciembre",
      players: "100",
      status: "Inscripciones abiertas",
    },
    {
      id: 2,
      game: "CSGO",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcwwQBFWuMXQqy3pBkatTwdm9-V_xO123fHw&s.png",
      prize: "$7,000 USD",
      date: "28 de Noviembre",
      players: "64",
      status: "Inscripciones abiertas",
    },
    {
      id: 1,
      game: "DOta 2",
      imageUrl:
        "https://elcomercio.pe/resizer/a_8xcBhcqouD5OnJdQbeSmUHE-A=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/2TTYPDACDVEWBLOURXST3RFWVU.jpg",
      prize: "$7,000 USD",
      date: "25 de Diciembre",
      players: "128",
      status: "Inscripciones abiertas",
    },
    {
      id: 2,
      game: "ROBLOX",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1RIxcRi40Pk3FzgcVRr80eMwfyYeeAtMUg&s.png",
      prize: "$2,000 USD",
      date: "24 de Diciembre",
      players: "1000",
      status: "Inscripciones abiertas",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">TORNEOS ACTIVOS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </div>
  );
};
