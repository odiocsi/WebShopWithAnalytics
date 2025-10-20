# MySiteName

A simple e-commerce admin dashboard built with **Laravel**, **Inertia.js**, and **React**. This project allows managing products, users, orders, and provides analytics powered by a Python-based AI prediction script.

---

## Features

- **Products Management:** View, add, edit, and delete products.
- **Orders Management:** Track user orders with total revenue calculations.
- **User Management:** Admin panel for user access and roles.
- **Analytics Dashboard:**  
  - Shows **historical revenue trends**.
  - Predicts **next few months revenue** using a **2nd-degree polynomial regression** implemented in Python.
  - Dynamic charts with `recharts` for visualization.
  
> ⚠️ The AI prediction is based on historical order data and provides a trend estimate. It does **not suggest purchases** anymore—only revenue predictions.

---

## Screenshots

### Products Page

![Products Page](./screenshots/products.png)

### Analytics Page

![Analytics Page](./screenshots/analytics.png)

---

## Tech Stack

- **Backend:** Laravel 10, Eloquent ORM
- **Frontend:** React + Inertia.js + TailwindCSS
- **Charts:** Recharts
- **AI Prediction:** Python 3, NumPy (2nd-degree polynomial r
