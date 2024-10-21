"use client"; // Marque ce fichier comme un composant client

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Select() {
  const router = useRouter();

  // Récupère l'année actuelle
  const currentYear = new Date().getFullYear();

  // Génère un tableau des années : année en cours et les trois précédentes
  const years = Array.from({ length: 4 }, (_, i) => currentYear - i);

  // Définit la valeur par défaut comme l'année actuelle
  const [selectedYear, setSelectedYear] = useState<string>(currentYear.toString());

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);

    // Met à jour l'URL avec la nouvelle valeur sélectionnée
    router.push(`?year=${year}`);
  };

  return (
    <select value={selectedYear} onChange={handleChange}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}
