
function addImage() {
    const fileInput = document.getElementById('inputImage');
    const gallery = document.getElementById('gallery');

    const file = fileInput.files[0];

    if (file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file); 
        img.alt = 'Uploaded Image';
        img.style.width = '200px'; 
        img.style.height = 'auto';
        gallery.appendChild(img);
    } else {
        alert('Please select an image before uploading.');
    }
}