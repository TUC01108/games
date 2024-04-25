# Game2

## Game2 is an interactive game that checks if two input strings are anagrams and displays corresponding images for each character if they are anagrams. If they are not anagrams, it displays a giant 'X' image.

## The game uses a JavaScript function isAnagram to check if two strings are anagrams by comparing the counts of their characters. It treats uppercase and lowercase letters as the same character.

## On clicking the 'check' button, the game:

### Retrieves the values of two input fields.
### Calls the isAnagram function with these two strings as arguments.
### Displays the result ('Anagram' or 'Not anagram') in a result element.
### Calls the displayImages function with the two strings and the result as arguments.
### Please note that the displayImages function is not included in the provided code. It should display corresponding images for each character in the strings if they are anagrams, or a giant 'X' image if they are not.

### Here's a brief overview of the isAnagram function:

### This function checks if two strings are anagrams. If they are, it returns true; otherwise, it returns false.