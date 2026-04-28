document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const userData = { name: name, email: email };

    // Simulating AJAX POST using fetch
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('AJAX Success:', data);
        
        // Push to local storage array
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(userData);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Redirect to new page
        window.location.href = 'list.html';
    })
    .catch(error => console.error('Error:', error));
});
