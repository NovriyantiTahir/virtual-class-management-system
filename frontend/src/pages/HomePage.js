<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .nav-links a {
            margin: 0 10px;
            padding: 10px 20px;
            text-decoration: none;
            color: white;
            background-color: #333;
            border-radius: 5px;
        }
        .nav-links a:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to the School Management System</h1>
        <div class="nav-links">
            <a href="ClassPage.html">Class List</a>
            <a href="UserList.html">User List</a>
            <a href="AttendancePage.html">Attendance</a>
        </div>
    </div>

    <script src="HomePage.js"></script>
</body>
</html>

