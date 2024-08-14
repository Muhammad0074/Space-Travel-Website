//alert after submit
document.getElementById('reg-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Submitted Successfully');
});

document.getElementById('reg-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Collect form data
    const formData = {
        name: document.getElementById("name").value,
        email: document.querySelector('input[name="email"]').value,
        country: document.querySelector('select').value,
        experienceLevel: document.querySelector('input[name="Experience lvl"]:checked')?.value,
        motivation: document.getElementById('motivational-q').value,
        consent: document.getElementById('consent').checked
    };

     // debug
    console.log(formData);

    
});
