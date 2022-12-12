///ΑΣΚΗΣΗ 4
const goal = { dayCalories: 2500, dayProtein: 120 }
//console.log(goal.dayCalories)
const foodDatabase = [
    {
        name: 'egg',
        calories: 86,
        protein: 18,
        carbs: 12,
        fat: 20,
        weight: 100
    },
    {
        name: 'salad',
        calories: 130,
        protein: 8,
        carbs: 40,
        fat: 20,
        weight: 200
    },
    {
        name: 'chicken',
        calories: 500,
        protein: 28,
        carbs: 20,
        fat: 20,
        weight: 300
    },
    {
        name: 'oats',
        calories: 300,
        protein: 10,
        carbs: 54,
        fat: 6,
        weight: 80
    },
    {
        name: 'rice',
        calories: 430,
        protein: 5,
        carbs: 88,
        fat: 9,
        weight: 300
    }
]

/// βαλε με το χέρι όσες ακόμα τροφές θες
/// δεν χρειαζεται να φτιαξεις κλασεις σε αυτην την ασκηση

///Α) βρες ποια τροφη έχεις τις περισσότερες θερμίδες
function maxOfMacros() {
    let maxCal = foodDatabase[0].calories;
    let maxProt = foodDatabase[0].protein;
    let maxCarb = foodDatabase[0].carbs;
    let maxFat = foodDatabase[0].fat;
    for (i = 0; i < foodDatabase.length; i++) {
        if (maxCal < foodDatabase[i].calories) {

            maxCal = foodDatabase[i].calories;
        }
        if (maxProt < foodDatabase[i].protein) {

            maxProt = foodDatabase[i].protein;
        }
        if (maxCarb < foodDatabase[i].carbs) {

            maxCarb = foodDatabase[i].carbs;
        }
        if (maxFat < foodDatabase[i].fat) {

            maxFat = foodDatabase[i].fat;
        }
    }

    console.log(`the Max Calories : ${maxCal}`);
    console.log(`the Max Protein : ${maxProt}`);
    console.log(`the Max Carbs : ${maxCarb}`);
    console.log(`the Max Fat: ${maxFat}`);
};
maxOfMacros();
///Β) κάνε το ίδιο για protein,carbs,fat

///Γ) ενας άνθρωπος έφαγε 

const breakfast = [foodDatabase[0], foodDatabase[0]]
const lunch = [foodDatabase[2], foodDatabase[1]]
const dinner = [foodDatabase[4], foodDatabase[3]]

const allDay = [...breakfast, ...lunch, ...dinner] // διαβασε τι κανει το ...
//console.log(...allDay) /// δες τι τυπωνει εδω
//console.log(...breakfast)
function totalCalories() {
    let calorieSum = 0;
    for (i = 0; i < allDay.length; i++) {
        calorieSum += allDay[i].calories;
    };
    return calorieSum;
};

function totalProtein() {
    let proteinSum = 0; for (i = 0; i < allDay.length; i++) {
        proteinSum += allDay[i].protein;
    }
    return proteinSum;
};

function totalCarbs() {
    let carbSum = 0;
    for (i = 0; i < allDay.length; i++) {
        carbSum += allDay[i].carbs
    };
    return carbSum;
};

function totalFats() {
    let fatSum = 0;
    for (i = 0; i < allDay.length; i++) {
        fatSum += allDay[i].fat
    };
    return fatSum;
};

function seeAnalytics() {
    console.log(`The User consumed ${totalCalories()} Calories, which contained:\nProtein: ${totalProtein()} grams\nCarbohydrates: ${totalCarbs()} grams\nFats: ${totalFats()} grams`);

    if (totalCalories() > goal.dayCalories) {
        console.log(`The User Exceeded the Calorie Intake`)
    } else {
        console.log(`${goal.dayCalories - totalCalories()} Calories remain to reach Daily Goal`);
    };
};
console.log(seeAnalytics());




// φτιάξε μια συνάρτηση που θα πέρνει σαν είσοδο ενα απο τα απο πανω και θα επιστρέφει την διατροφική αξία του γεύματος
// στην περιπτωση που μπει το allDay στην συναρτηση θελω να τσεκαρει αν ο χρηστης περασε τις θερμιδες στοχο η αν πηρε την καταλληλη προτεινη (const goal)

/// tips

//console.log(foodDatabase[0].name) ///  'egg'
//console.log(foodDatabase[0].calories) ///  86