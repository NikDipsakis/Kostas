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
function maxOfMacros(foods, macro) {
    let maxMacro = foods[0][macro];

    for (i = 0; i < foods.length; i++) {
        if (maxMacro < foods[i][macro]) {

            maxMacro = foods[i][macro];
        }

    }
    console.log(`the Max ${macro}: ${maxMacro}`);
};
maxOfMacros(foodDatabase , ['calories']);

///Β) κάνε το ίδιο για protein,carbs,fat

///Γ) ενας άνθρωπος έφαγε 

const breakfast = [foodDatabase[0], foodDatabase[0]]
const lunch = [foodDatabase[2], foodDatabase[1]]
const dinner = [foodDatabase[4], foodDatabase[3]]

const allDay = [...breakfast, ...lunch, ...dinner] // διαβασε τι κανει το ...
//console.log(...allDay) /// δες τι τυπωνει εδω
//console.log(...breakfast)

function totalofMacro(meal, macro) {
    let macroSum = 0;
    for (i = 0; i < meal.length; i++) {
        macroSum += meal[i][macro];
    };
    return macroSum;
};
const totalMacros = totalofMacro(allDay , ['calories']);
console.log(totalMacros);



function seeAnalytics(meal) {
    console.log(`The User consumed ${totalofMacro(meal, ['calories'])} Calories, which contained:\nProtein: ${totalofMacro(meal, ['protein'])} grams\nCarbohydrates: ${totalofMacro(meal, ['carbs'])} grams\nFats: ${totalofMacro(meal, ['fat'])} grams`);

    if (totalofMacro(meal, ['calories']) > goal.dayCalories) {
        console.log(`The User Exceeded the Calorie Intake`)
    } else {
        console.log(`${goal.dayCalories - totalofMacro(meal, ['calories'])} Calories remain to reach Daily Goal`);
    };
};

seeAnalytics(allDay);

function callByName(foodList , searchName) {
    for (i = 0; i < foodList.length; i++){
        //console.log(foodList[i].name)
        if (foodList[i].name === searchName){
            console.log(foodList[i]);
            return
        }else{
            console.log(`${searchName} is not registered in this Food List`);
            return
        }
    }
}
callByName(foodDatabase , 'egg');


// φτιάξε μια συνάρτηση που θα πέρνει σαν είσοδο ενα απο τα απο πανω και θα επιστρέφει την διατροφική αξία του γεύματος
// στην περιπτωση που μπει το allDay στην συναρτηση θελω να τσεκαρει αν ο χρηστης περασε τις θερμιδες στοχο η αν πηρε την καταλληλη προτεινη (const goal)

/// tips

//console.log(foodDatabase[0].name) ///  'egg'
//console.log(foodDatabase[0].calories) ///  86