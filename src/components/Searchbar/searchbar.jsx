import { useState } from 'react';

const Searchbar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [selectedHero, setSelectedHero] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (query.trim() === '') return;

        try {
            const response = await fetch(`https://corsproxy.io/https://superheroapi.com/api/dbd96ba9d0028ff52eda9229164061de/search/${query}`);
            const data = await response.json();
            setResults(data.results || data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a superhero"
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                <div className="hero-container">
                    {results.map((hero) => (
                        <div key={hero.id} className="hero-card">
                            <img src={hero.image.url} alt={hero.name} className="hero-image" onClick={() => handleHeroClick(hero)} />
                            <h3>{hero.name}</h3>
                        </div>

                    ))}
                </div>
            </ul>
            {selectedHero && (
                <div className="hero-details" style={{ marginTop: '20px' , textAlign: 'center' , backgroundColor: 'gray' , padding: '20px' , borderRadius: '10px' }}>
                    <h2>{selectedHero.name}</h2>
                    <p>Nom complet: {selectedHero.biography['full-name']}</p>
                    <p>Publisher: {selectedHero.biography.publisher}</p>
                    <p>Première Apparition: {selectedHero.biography['first-appearance']}</p>
                    <p>Alignement: {selectedHero.biography.alignment}</p>
                    <p>Occupation: {selectedHero.work.occupation}</p>
                    <img src={selectedHero.image.url} alt={selectedHero.name} className="hero-image-large" />
                </div>
            )}
        </div>
    );
};
export default Searchbar;