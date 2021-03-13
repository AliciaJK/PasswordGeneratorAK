# PasswordGeneratorAK
live site: 
https://aliciajk.github.io/PasswordGeneratorAK/.

CSS and HTML were already given to us as part of the assignment

# how it works
1. asks users what length of password they want
2. checks if the password length is between 8-128 characters
3. if no, the prompt will return again asking the user for the appropriate length of password
4. if yes, it prompts the user if they want capital letters, special characters, lowercase letters and numbers. 
5. the user selects ok for (yes) and cancel for (no)
6. the program runs through an if statement such as the following: if user selected yes for any of the 4 possible types of characters then take the "password array" which would be empty and concatinate it to the array the users wanted characters. Ex: numbers yes and lowercase yes, then 12345...abcdef etc 
7. the program then takes a random selection of the new contatinated array of the indicated length of characters 
8. it returns and print the password visible to the user on screen.