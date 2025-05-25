# 💼 Freelancer App

یک پلتفرم کامل برای مدیریت پروژه‌های فریلنسری با قابلیت‌های حرفه‌ای برای کارفرما، فریلنسر و ادمین.

## 🧩 ویژگی‌ها

- افزودن پروژه توسط کارفرما
- ارسال پیشنهاد توسط فریلنسر
- تنظیم زمان تحویل و قیمت پروژه
- احراز هویت کاربران توسط ادمین
- ارسال کد لاگین با استفاده از سرویس **کاوه‌نگار**
- سیستم رول‌بندی کاربران (ادمین، کارفرما، فریلنسر)
- پنل اختصاصی برای هر نوع کاربر:
  - پنل ادمین
  - پنل کارفرما
  - پنل فریلنسر
- رابط کاربری **ریسپانسیو** برای استفاده در موبایل، تبلت و دسکتاپ
- اعتبارسنجی فرم‌ها با استفاده از **React Hook Form**
- دریافت و مدیریت داده‌ها با **React Query**



# 🛠️ تکنولوژی‌های استفاده شده

### فرانت‌اند

- [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://tanstack.com/query/latest)

### بک‌اند

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## ⚙️ نحوه اجرا
### RUN BACKEND
- cd freelancer-app-backend
- npm install
- npm run start

### RUN FRONTEND
- cd freelancer-app-frontend
- npm install
- npm run dev

## پیش‌نیازها

- Node.js, npm
- MongoDB
- Kave Neghar API for send login message



## ساختار پروژه 
```bash
freelancer-app/
├── freelancer-app-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.jsx
|   |   ├── main.jsx
|   |   ├── style.css
|   |   └── assets/
│   └── index.html
│
├── freelancer-app-backend/     # backend
│   ├── controllers/            # کنترلرهای مربوط به API
│   ├── models/                 # مدل‌های Mongoose
│   ├── routes/                 # مسیرهای API
│   ├── middlewares/            # میدلورها (احراز هویت، رول‌ها و ...)
│   └── server.js               # نقطه ورود سرور
│
└── README.md                   # project readme


### کلون کردن مخزن

git clone https://github.com/your-username/freelancer-app.git
cd freelancer-app
