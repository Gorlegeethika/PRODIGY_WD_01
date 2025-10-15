document.getElementById('filter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value;
    const price = document.getElementById('price').value;
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const amenities = Array.from(document.querySelectorAll('input[name="amenities"]:checked')).map(checkbox => checkbox.value);

    const filters = {
        location,
        type,
        price,
        bedrooms,
        bathrooms,
        amenities
    };

    console.log('Applied Filters:', filters);

    // Redirect to homepage.html
    window.location.href = 'homepage.html';
});
