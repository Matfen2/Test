// Fonction qui vérifie l'âge et retourne un message correspondant
function checkAge(age) {
        if (age < 18) {
            return "Vous êtes mineur.";
        } else if (age >= 18 && age <= 65) {
            return "Vous êtes majeur.";
        } else {
            return "Vous êtes senior.";
        }
}

console.log(checkAge(15)); // Affichera "Vous êtes mineur."
console.log(checkAge(30)); // Affichera "Vous êtes majeur."
console.log(checkAge(75)); // Affichera "Vous êtes senior."
    
// Exportation de la fonction
export default checkAge;
    