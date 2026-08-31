import React, { useState } from 'react';

const MOOD_PRESETS = {
  work: { label: 'Work / Study', query: 'cafe with wifi quiet' },
  date: { label: 'Date Night', query: 'romantic restaurant dinner' },
  quick_bite: { label: 'Quick Bite', query: 'fast food bakery snack' },
  budget: { label: 'Budget Friendly', query: 'affordable street food meal' }
};

const SAMPLE_PLACES = [
  { id: 1, name: 'The Roastery Cafe', mood: 'work', rating: 4.6, distance: '0.8 km', openNow: true, price: '$$' },
  { id: 2, name: 'Bistro Lumière', mood: 'date', rating: 4.8, distance: '2.3 km', openNow: true, price: '$$$' },
  { id: 3, name: 'Express Wok & Roll', mood: 'quick_bite', rating: 4.1, distance: '0.3 km', openNow: true, price: '$' },
  { id: 4, name: 'Green Garden Meals', mood: 'budget', rating: 4.4, distance: '1.1 km', openNow: false, price: '$' }
];

export default function App() {
  const [selectedMood, setSelectedMood] = useState('work');
  const [onlyOpen, setOnlyOpen] = useState(false);

  const filteredPlaces = SAMPLE_PLACES.filter(place => {
    const matchesMood = place.mood === selectedMood;
    const matchesOpen = onlyOpen ? place.openNow : true;
    return matchesMood && matchesOpen;
  });

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif', padding: '1rem' }}>
      <h2>📍 Smart Nearby Places Recommender</h2>
      
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {Object.entries(MOOD_PRESETS).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSelectedMood(key)}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: 'none',
              background: selectedMood === key ? '#2563eb' : '#e5e7eb',
              color: selectedMood === key ? '#fff' : '#1f2937',
              cursor: 'pointer'
            }}
          >
            {value.label}
          </button>
        ))}
      </div>

      <label style={{ display: 'block', marginBottom: '1rem', cursor: 'pointer' }}>
        <input 
          type="checkbox" 
          checked={onlyOpen} 
          onChange={(e) => setOnlyOpen(e.target.checked)} 
        />
        <span style={{ marginLeft: '8px' }}>Open Now Only</span>
      </label>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredPlaces.map(place => (
          <div key={place.id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '12px' }}>
            <h3 style={{ margin: '0 0 4px 0' }}>{place.name}</h3>
            <p style={{ margin: 0, color: '#6b7280', fontSize: '14px' }}>
              ⭐ {place.rating} • 📍 {place.distance} • 💰 {place.price} • {place.openNow ? '🟢 Open' : '🔴 Closed'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
