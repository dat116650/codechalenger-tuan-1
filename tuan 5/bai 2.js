function createImage(imgPath) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imgPath;
        img.onload = function() {
            document.querySelector('.image').appendChild(img);
            resolve(img);
        };
        img.onerror = function() {
            reject(new Error('Could not load image at ' + imgPath));
        };
    });
}

function wait(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

createImage('path/to/image1.jpg')
    .then(img => {
        console.log('Image 1 loaded');
        return wait(2);
    })
    .then(() => {
        document.querySelector('.image').style.display = 'none';
        return createImage('path/to/image2.jpg');
    })
    .then(img => {
        console.log('Image 2 loaded');
        return wait(2);
    })
    .then(() => {
        document.querySelector('.image').style.display = 'none';
    })
    .catch(err => console.error(err));