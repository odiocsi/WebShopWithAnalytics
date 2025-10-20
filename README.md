# MySiteName

A simple **e-commerce web application** built with **Laravel**, **Inertia.js**, and **React**, allowing users to browse products, manage a cart, place orders, and for admins to monitor analytics.

---

## Features

### Shop

- **Products Catalog:** Browse all available products with details like price, description, and stock.
- **Cart & Checkout:** Users can add products to the cart and complete orders.
- **Orders Tracking:** Admins can view all placed orders and their totals.

### Admin Dashboard

- **User Management:** Admins can manage registered users.
- **Product Management:** Add, edit, or remove products.
- **Order Management:** Review all orders, total revenue, and order counts.
- **Analytics:**  
  - Visualizes **historical revenue trends**.
  - **Predicts future revenue** for the next few months using a **Python-based polynomial regression model**.
  - Interactive charts built with `recharts`.

> ⚠️ Note: The AI prediction shows **revenue trends only** — it no longer suggests purchase quantities.

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
- **AI Prediction:** Python 3, NumPy (2nd-degree polynomial regression)
- **Database:** MySQL

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mysitename.git
cd mysitename
