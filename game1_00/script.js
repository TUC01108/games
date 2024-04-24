const inputArray = document.getElementById('input-array');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const numberList = document.getElementById('number-list');

checkBtn.addEventListener('click', () => {
  const inputString = inputArray.value;
  if (!inputString) return;

  const numberArray = inputString.split(',').map(Number); // Convert string to array of numbers

  let hasDuplicates = false;
  const seenNumbers = new Set();

  numberList.innerHTML = ''; // Clear previous list

  numberArray.forEach((num, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = num;

    if (seenNumbers.has(num)) {
      hasDuplicates = true;
      listItem.classList.add('duplicate');

      const duplicateImg = document.createElement('img');
      duplicateImg.src = "./images/surprised_cat.png";
      duplicateImg.onerror = () => {
        console.error("Error loading surprised_cat.png"); // Log error to console
      };
      listItem.appendChild(duplicateImg);
    } else {
      seenNumbers.add(num);
      listItem.classList.add('unique');

      const uniqueImg = document.createElement('img');
      uniqueImg.src = "./images/happy_dog.png";
      uniqueImg.onerror = () => {
        console.error("Error loading happy_dog.png"); // Log error to console
      };
      listItem.appendChild(uniqueImg);
      numberList.appendChild(listItem);
    }

    numberList.appendChild(listItem);
  });

  result.textContent = hasDuplicates ? 'Array contains duplicates!' : 'No duplicates found.';
});