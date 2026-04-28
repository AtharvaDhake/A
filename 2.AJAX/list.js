document.addEventListener("DOMContentLoaded", function() {
    const userList = document.getElementById('userList');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
        userList.innerHTML = "<li>No users registered yet.</li>";
    } else {
        users.forEach(function(user) {
            const li = document.createElement('li');
            li.textContent = `Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(li);
        });
    }
});
