const FeaturedTournamentCard = ({ title, prize, date, players }) => {
  const [isRegistered, setIsRegistered] = React.useState(false);

  return (
    <div className="tournament-card p-6">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="space-y-2">
        <p className="text-indigo-400">Premio: {prize}</p>
        <p>Fecha: {date}</p>
        <p>Jugadores: {players}</p>
      </div>
      <button
        onClick={() => setIsRegistered(true)}
        className={`mt-6 w-full ${
          isRegistered ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
        } py-2 rounded`}
        disabled={isRegistered}
      >
        {isRegistered ? "Inscrito" : "Inscribirse"}
      </button>
    </div>
  );
};

const FeaturedTournaments = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        TORNEOS DESTACADOS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeaturedTournamentCard
          title="League of Legends"
          prize="$1,000 USD"
          date="15 de Diciem"
          players="128"
        />
        <FeaturedTournamentCard
          title="Valorant"
          prize="$500 USD"
          date="20 de Noviem"
          players="64"
        />
        <FeaturedTournamentCard
          title="CS:GO"
          prize="$750 USD"
          date="25 de Diciem"
          players="32"
        />
      </div>
    </div>
  );
};
