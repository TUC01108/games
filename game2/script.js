// script.js
let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg']; // add your image file names here

document.getElementById('check-btn').addEventListener('click', function() {
  images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg', 'image10.jpg']; // repopulate the images array
  const s = document.getElementById('input-string1').value;
  const t = document.getElementById('input-string2').value;
  const result = isAnagram(s, t);
  document.getElementById('result').innerText = result ? 'Anagram' : 'Not anagram';
  displayImages(s, t, result);
});

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCount = {};

  for(let c of s.toLowerCase()) {
    charCount[c] = (charCount[c] || 0) + 1;
  }

  for (let c of t.toLowerCase()) {
    const count = charCount[c] || 0;
    if (count === 0) {
      return false;
    }
    charCount[c] = count - 1;
  }
  return true;
}

function displayImages(s, t, isAnagram) {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '';
  if (isAnagram) {
    const charToImage = {};
    for(let i = 0; i < s.length; i++) {
      if (!charToImage[s[i]]) {
        const randomIndex = Math.floor(Math.random() * images.length);
        charToImage[s[i]] = images[randomIndex];
        images.splice(randomIndex, 1); // remove the selected image from the array
      }
      const img = document.createElement('img');
      img.src = `images/${charToImage[s[i]]}`;
      imageContainer.appendChild(img);
    }
  } else {
    const img = document.createElement('img');
    img.src = `images/x.jpg`; // assuming you have an image named x.jpg for the giant X
    imageContainer.appendChild(img);
  }
}