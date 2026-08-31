# 📍 Smart Nearby Places Recommender

[![React CI](https://github.com/Varshagowda2407/smart-places-recommender/actions/workflows/ci.yml/badge.svg)](https://github.com/Varshagowda2407/smart-places-recommender/actions)
[![React](https://img.shields.io/badge/Frontend-React.js-blue.svg)](https://reactjs.org/)
[![Google Maps](https://img.shields.io/badge/API-Google%20Maps-green.svg)](https://developers.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A location-based React application that delivers context-aware place recommendations (cafes, date venues, quick bites, budget meals) by matching user intent and mood with real-time geospatial data via Google Maps and Places APIs.

---

## ✨ Key Features

* **Mood-Driven Matching:** Dynamic query translation for curated vibes (*Work/Study*, *Date Night*, *Quick Bite*, *Budget Friendly*).
* **Real-Time Client-Side Filtering:** Instant client filtering by distance, star ratings, and real-time open/closed status.
* **Geospatial Proximity Sorting:** Automatic Euclidean/haversine-distance sorting from user coordinates.
* **Modular Service Architecture:** Decoupled API business logic for clean maintenance and high testability.
* **Continuous Integration:** Automated test runner pipeline on every pull request via GitHub Actions.

---

## 🛠️ Architecture & Data Flow

```text
User Selects Mood ➡️ Geolocation Hook (Lat/Lng) ➡️ placesService.js
                                                         │
                                               Google Places API
                                                         │
                                                         ▼
State Update (App.jsx) ⬅️ Filter / Sort Logic ⬅️ Raw JSON Payload
