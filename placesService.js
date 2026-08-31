export async function fetchNearbyPlaces(userCoords, moodKeyword, radius = 5000) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userCoords.lat},${userCoords.lng}&radius=${radius}&keyword=${encodeURIComponent(moodKeyword)}&key=YOUR_API_KEY`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching places:", error);
    return [];
  }
}

export function sortPlacesByDistance(places) {
  return [...places].sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
}

export function filterOpenPlaces(places) {
  return places.filter(place => place.openNow === true);
}
