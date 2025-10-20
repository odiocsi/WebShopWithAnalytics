# WebShopWithAnalytics

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
- **Order Management:** Review all orders.
- **Analytics:**  
  - Visualizes **historical revenue trends**.
  - **Predicts future revenue** for the next few months using a **Python-based polynomial regression model**.
  - Interactive charts built with `recharts`.

---

## Screenshots

### Products Page

![Products Page](https://i.imgur.com/IWO7d5Y.png)

### Analytics Page

![Analytics Page](https://i.imgur.com/ewkMc9z.png)

---

## Tech Stack

- **Backend:** Laravel 10, Eloquent ORM
- **Frontend:** React + Inertia.js + TailwindCSS
- **Charts:** Recharts
- **AI Prediction:** Python 3, NumPy (2nd-degree polynomial regression)
- **Database:** MySQL

---
## Setup

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/mysitename.git
cd mysitename

# 2. Backend (PHP / Laravel)
composer install
cp .env.example .env
php artisan key:generate
# Update .env with database credentials, APP_NAME, and optionally PYTHON_PATH

# 3. Frontend (React / Inertia.js / TailwindCSS)
npm install
npm run dev   # for development
npm run build # for production

# 4. Database
php artisan migrate --seed
# Creates tables (users, products, orders, etc.) and seeds example data

# 5. Python environment (AI Revenue Prediction)
python3 --version  # ensure Python 3 is installed
python3 -m venv venv
# Linux / macOS:
source venv/bin/activate
# Windows:
# venv\Scripts\activate
pip install numpy

# Test the Python prediction script
python predict.py "1000,1200,1100" 3
# Should return JSON with predicted_revenues and revenue_increase_percent

# 6. Run the application
php artisan serve
npm run dev
# Open http://localhost:8000 in your browser

