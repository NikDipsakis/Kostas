
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


//Shows you the analysis of the foods and checks if the daily goal was exceeded:
function seeAnalytics(meal) {
    console.log(`The User consumed ${totalofMacro(meal, ['calories'])} Calories,\nwhich contained:\nProtein: ${totalofMacro(meal, ['protein'])} grams\nCarbohydrates: ${totalofMacro(meal, ['carbs'])} grams\nFats: ${totalofMacro(meal, ['fat'])} grams`);

    if (totalofMacro(meal, ['calories']) > goal.dayCalories) {
        console.log(`The User Exceeded the Calorie Intake`)
    } else {
        console.log(`${goal.dayCalories - totalofMacro(meal, ['calories'])} Calories remain to reach Daily Goal`);
    };
};
//seeAnalytics(allDay);


//Searches a Food or several by name and gives you the exact macro count:
function callByName(foodList, searchName) {
    for (i = 0; i < foodList.length; i++) {
        //console.log(foodList[i].name)
        if (foodList[i].name === searchName) {
            console.log(foodList[i]);
            return
        } else {
            console.log(`${searchName} is not registered in this Food List`);
            return
        }
    }
}
//callByName(foodDatabase, 'egg');


//Gets the value from foods that the user dialed:
function getValue(input, foods, meal) {
    const inputValue = input.value;
    const inputArray = inputValue.split(',');
    let calorieSum = 0;
    let proteinSum = 0;
    let carbSum = 0;
    let fatSum = 0;
    if (inputValue === '') {
        console.log('You must enter a food');
        return;
    }
    //console.log(inputValueArray);
    for (i = 0; i < foods.length; i++) {
        //console.log(foodDatabase[i].name);
        for (j = 0; j < inputArray.length; j++) {
            if (foods[i].name === inputArray[j]) {
                calorieSum += foods[i].calories
                proteinSum += foods[i].protein
                carbSum += foods[i].carbs
                fatSum += foods[i].fat
                //console.log(`${foods[i].name} contains :\n${foods[i].calories} calories, \n${foods[i].protein} grams of Protein, \n${foods[i].carbs} grams of Carbs \nand ${foods[i].fat} grams of fat`)
            }
        }
    }
    return {
        meal: meal,
        calories: calorieSum,
        protein: proteinSum,
        carbs: carbSum,
        fat: fatSum,
    }
}



//variables that get value of a food:
const breakfastInput = document.getElementById("new-breakfast-input");
const lunchInput = document.getElementById("new-lunch-input");
const dinnerInput = document.getElementById("new-dinner-input");
const snacksInput = document.getElementById("new-snacks-input");
//const breakfastBtn = document.getElementById("new-breakfast-submit");
//const lunchBtn = document.getElementById("new-lunch-submit");
//const dinnerBtn = document.getElementById("new-dinner-submit");
//const snacksBtn = document.getElementById("new-snacks-submit");

// Macro imports from dialed foods:
const breakFastCaloriesImport = document.getElementById("breakfast-calories");
const breakFastProteinImport = document.getElementById("breakfast-protein");
const breakFastCarbsImport = document.getElementById("breakfast-carbs");
const breakFastFatImport = document.getElementById("breakfast-fat");
const lunchCaloriesImport = document.getElementById("lunch-calories");
const lunchProteinImport = document.getElementById("lunch-protein");
const lunchCarbsImport = document.getElementById("lunch-carbs");
const lunchFatImport = document.getElementById("lunch-fat");
const dinnerCaloriesImport = document.getElementById("dinner-calories");
const dinnerProteinImport = document.getElementById("dinner-protein");
const dinnerCarbsImport = document.getElementById("dinner-carbs");
const dinnerFatImport = document.getElementById("dinner-fat");
const snacksCaloriesImport = document.getElementById("snacks-calories");
const snacksProteinImport = document.getElementById("snacks-protein");
const snacksCarbsImport = document.getElementById("snacks-carbs");
const snacksFatImport = document.getElementById("snacks-fat");

// function getBreakfast() {
//     getValue(breakfastInput, foodDatabase, 'Breakfast');
// };

// function getLunch() {
//     getValue(lunchInput, foodDatabase, 'Lunch');
// }

// function getDinner() {
//     getValue(dinnerInput, foodDatabase, 'Dinner');
// }

// function getSnacks() {
//     getValue(snacksInput, foodDatabase, 'Snacks');
// }


//Displays all the macros on the Table: 
function getDaysData() {
    const daysObj = {
        breakfast: getValue(breakfastInput, foodDatabase, 'Breakfast'),
        lunch: getValue(lunchInput, foodDatabase, 'Lunch'),
        dinner: getValue(dinnerInput, foodDatabase, 'Dinner'),
        snacks: getValue(snacksInput, foodDatabase, 'Snacks'),
    }
    console.log(daysObj)
    breakFastCaloriesImport.innerHTML = daysObj.breakfast.calories;
    breakFastProteinImport.innerHTML = daysObj.breakfast.protein;
    breakFastCarbsImport.innerHTML = daysObj.breakfast.carbs;
    breakFastFatImport.innerHTML = daysObj.breakfast.fat;
    lunchCaloriesImport.innerHTML = daysObj.lunch.calories;
    lunchProteinImport.innerHTML = daysObj.lunch.protein;
    lunchCarbsImport.innerHTML = daysObj.lunch.carbs;
    lunchFatImport.innerHTML = daysObj.lunch.fat;
    dinnerCaloriesImport.innerHTML = daysObj.dinner.calories;
    dinnerProteinImport.innerHTML = daysObj.dinner.protein;
    dinnerCarbsImport.innerHTML = daysObj.dinner.carbs;
    dinnerFatImport.innerHTML = daysObj.dinner.fat;
    snacksCaloriesImport.innerHTML = daysObj.snacks.calories;
    snacksProteinImport.innerHTML = daysObj.snacks.protein;
    snacksCarbsImport.innerHTML = daysObj.snacks.carbs;
    snacksFatImport.innerHTML = daysObj.snacks.fat;
}


/// This is a better alternative to onClick functions inside html code
const daySubmitButton = document.querySelector('#new-day-submit')
daySubmitButton.addEventListener('click', getDaysData)

//breakfastBtn.addEventListener('click', getDaysData);
//lunchBtn.addEventListener('click', getDaysData);
//dinnerBtn.addEventListener('click', getDaysData);
//snacksBtn.addEventListener('click', getDaysData);
