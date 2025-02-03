import { useState, useEffect } from 'react';
import './fetchHeros.css';
import Search from '../Searchbar/searchbar';


export default function FetchHero() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeros = async () => {
      try {
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des super héros :', error);
        setLoading(false);
      }
    };

    fetchHeros();
  }, []);

  if (loading) {
    return <div className="loader"><div className="loader-icon"> Chargement...</div></div>;
  }

  return (
    <div>
      <Search />
    </div>
  );
}