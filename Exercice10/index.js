// Fonction qui génère une chaîne contenant les nombres de 1 à n
function printNumbers(n) {
        let result = "";
        for (let i = 1; i <= n; i++) {
            result += i + " "; // Ajoute chaque nombre suivi d'un espace
        }
        return result.trim(); // Supprime l'espace final
}

console.log(printNumbers(5)); // Affichera "1 2 3 4 5"
console.log(printNumbers(10)); // Affichera "1 2 3 4 5 6 7 8 9 10"
    
// Exportation de la fonction
export default printNumbers;
    