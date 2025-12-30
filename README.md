# Convertify – Unit Converter (Spring Boot + React)

A full-stack **unit converter** web application built for learning purposes using:

- **Backend:** Spring Boot (Java)
- **Frontend:** React (Vite)
- **API style:** JSON REST

The app lets you convert between units of **length**, **weight**, and **temperature** with a clean UI, dark/light mode, and animated interactions.

---

## ✨ Features

- 📏 **Length conversion**  
  - MILLIMETER, CENTIMETER, METER, KILOMETER, INCH, FOOT, YARD, MILE

- ⚖️ **Weight conversion**  
  - MILLIGRAM, GRAM, KILOGRAM, OUNCE, POUND

- 🌡️ **Temperature conversion**  
  - CELSIUS, FAHRENHEIT, KELVIN

- 💡 **Frontend**
  - React + Vite
  - Tab navigation: Length | Weight | Temperature
  - Light / Dark mode toggle
  - Animated buttons, card hover, and conversion feedback
  - Responsive layout (works on desktop and mobile)

- ⚙️ **Backend**
  - REST endpoints for each conversion type
  - Enum-based conversion for length & weight
  - Formula-based conversion for temperature
  - CORS configured for the React frontend

---

## 🧱 Tech Stack

**Backend**
- Java
- Spring Boot
- Maven

**Frontend**
- React (Vite)
- JavaScript
- CSS (custom, no UI framework)

---
## project linke : https://roadmap.sh/projects/unit-converter

## 📂 Project Structure

```text
unit-converter/
├── backend/
│   ├── src/main/java/com/convertor/backend/
│   │   ├── controller/
│   │   │   └── ConversionController.java
│   │   ├── model/
│   │   │   ├── ConversionRequest.java
│   │   │   ├── ConversionResponse.java
│   │   │   ├── LengthUnit.java
│   │   │   └── WeightUnit.java
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── LengthConverter.jsx
│   │   ├── WeightConverter.jsx
│   │   └── TemperatureConverter.jsx
│   ├── index.html
│   └── package.json
│
└── README.md


