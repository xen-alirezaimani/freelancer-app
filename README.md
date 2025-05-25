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

## 🛠️ تکنولوژی‌های استفاده شده

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
- RUN BACKEND => npm run start
- RUN FRONTEND => npm run dev

### پیش‌نیازها

- Node.js و npm باید روی سیستم نصب باشند.
- MongoDB باید در حال اجرا باشد یا URI اتصال آن را در فایل `.env` قرار دهید.
- توکن و اطلاعات سرویس **کاوه‌نگار** برای ارسال پیامک لاگین

### ۱. کلون کردن مخزن

```bash
git clone https://github.com/your-username/freelancer-app.git
cd freelancer-app

### ساختار پروژه 
freelancer-app/
├── client/             # رابط کاربری (فرانت‌اند با React + Vite)
│   ├── src/
│   │   ├── components/         # کامپوننت‌های عمومی
│   │   ├── pages/              # صفحات (پنل‌ها، لاگین، ثبت‌نام و ...)
│   │   ├── hooks/              # هوک‌های سفارشی (از جمله React Query)
│   │   ├── services/           # فانکشن‌های API برای فچ داده
│   │   └── App.jsx
│   └── tailwind.config.js      # پیکربندی Tailwind
│
├── server/             # بک‌اند با Node.js و Express
│   ├── controllers/            # کنترلرهای مربوط به API
│   ├── models/                 # مدل‌های Mongoose
│   ├── routes/                 # مسیرهای API
│   ├── middlewares/           # میدلورها (احراز هویت، رول‌ها و ...)
│   └── server.js              # نقطه ورود سرور
│
└── README.md           # توضیحات پروژه

