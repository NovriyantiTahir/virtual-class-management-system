<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attendance Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        input, button {
            padding: 10px;
            margin: 5px 0;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            display: flex;
            justify-content: space-between;
            margin: 5px 0;
            padding: 10px;
            background-color: #f4f4f4;
            border-radius: 5px;
        }
        button.remove {
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Attendance Page</h1>
        <form id="attendanceForm">
            <input type="text" id="studentNameInput" placeholder="Enter student name" required>
            <button type="submit">Add Student</button>
        </form>

        <ul id="attendanceList"></ul>
    </div>

    <script src="AttendancePage.js"></script>
</body>
</html>

