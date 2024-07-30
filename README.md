 Sistem Manajemen Kelas Virtual Menggunakan Kecerdasan Buatan

Selamat datang di proyek Sistem Manajemen Kelas Virtual menggunakan Kecerdasan Buatan! Proyek ini dirancang untuk menyediakan platform yang efisien dalam mengelola kelas virtual, termasuk pengelolaan pengguna, kelas, dan absensi dengan menggunakan teknologi terkini.

## Struktur Proyek

Berikut adalah susunan direktori dari proyek ini:

virtual-class-management-system/
├── backend/
│   ├── config/
│   │   ├── db.js
│   │   └── keys.js
│   ├── controllers/
│   │   ├── classController.js
│   │   ├── userController.js
│   │   └── attendanceController.js
│   ├── models/
│   │   ├── Class.js
│   │   ├── User.js
│   │   └── Attendance.js
│   ├── routes/
│   │   ├── classRoutes.js
│   │   ├── userRoutes.js
│   │   └── attendanceRoutes.js
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── utils/
│   │   └── helpers.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── ClassList.js
│   │   │   ├── ClassDetail.js
│   │   │   ├── AttendanceList.js
│   │   │   ├── UserList.js
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── HomePage.js
│   │   │   ├── ClassPage.js
│   │   │   ├── AttendancePage.js
│   │   │   ├── UserPage.js
│   │   │   └── NotFoundPage.js
│   │   ├── services/
│   │   │   ├── classService.js
│   │   │   ├── userService.js
│   │   │   └── attendanceService.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── routes.js
│   │   ├── store/
│   │   │   ├── actions/
│   │   │   │   ├── classActions.js
│   │   │   │   ├── userActions.js
│   │   │   │   └── attendanceActions.js
│   │   │   ├── reducers/
│   │   │   │   ├── classReducer.js
│   │   │   │   ├── userReducer.js
│   │   │   │   └── attendanceReducer.js
│   │   │   └── store.js
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── .env
│   │   └── package.json
│
├── README.md
├── .gitignore
└── LICENSE
