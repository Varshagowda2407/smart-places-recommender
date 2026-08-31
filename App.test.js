import { sortPlacesByDistance, filterOpenPlaces } from './placesService';

const mockPlaces = [
  { id: 1, name: 'Place A', distance: '1.5 km', openNow: false },
  { id: 2, name: 'Place B', distance: '0.4 km', openNow: true },
  { id: 3, name: 'Place C', distance: '2.1 km', openNow: true }
];

test('sorts places by distance in ascending order', () => {
  const sorted = sortPlacesByDistance(mockPlaces);
  expect(parseFloat(sorted[0].distance)).toBe(0.4);
  expect(parseFloat(sorted[2].distance)).toBe(2.1);
});

test('filters out closed places when openOnly is active', () => {
  const openOnly = filterOpenPlaces(mockPlaces);
  expect(openOnly.length).toBe(2);
  expect(openOnly.every(p => p.openNow)).toBe(true);
});
