
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

function maxOfMacros(foods, macro) {
    let maxMacro = foods[0][macro];

    for (i = 0; i < foods.length; i++) {
        if (maxMacro < foods[i][macro]) {

            maxMacro = foods[i][macro];
        }

    }
    console.log(`the Max ${macro}: ${maxMacro}`);
};
//maxOfMacros(foodDatabase, ['calories']);

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
const totalMacros = totalofMacro(allDay, ['calories']);
//console.log(totalMacros);



function seeAnalytics(meal) {
    console.log(`The User consumed ${totalofMacro(meal, ['calories'])} Calories,\nwhich contained:\nProtein: ${totalofMacro(meal, ['protein'])} grams\nCarbohydrates: ${totalofMacro(meal, ['carbs'])} grams\nFats: ${totalofMacro(meal, ['fat'])} grams`);

    if (totalofMacro(meal, ['calories']) > goal.dayCalories) {
        console.log(`The User Exceeded the Calorie Intake`)
    } else {
        console.log(`${goal.dayCalories - totalofMacro(meal, ['calories'])} Calories remain to reach Daily Goal`);
    };
};

//seeAnalytics(allDay);

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

const breakfastInput = document.getElementById("new-breakfast-input");
const lunchInput = document.getElementById("new-lunch-input");
const dinnerInput = document.getElementById("new-dinner-input");
const snacksInput = document.getElementById("new-snacks-input");

function getValue(input, foods, meal) {
    const inputValue = input.value;
    const inputArray = inputValue.split(',');
    let calorieSum = 0;
    let proteinSum = 0;
    let carbSum = 0;
    let fatSum = 0;
    if (input.value === '') {
        alert('You must enter a food');
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
    console.log(`Total of calories of ${meal}: ${calorieSum} \nTotal of Protein : ${proteinSum} \nTotal of Carbs : ${carbSum} \nTotal of Fat : ${fatSum}`)
}

function getBreakfast() {
    getValue(breakfastInput, foodDatabase, 'Breakfast');
};

function getLunch() {
    getValue(lunchInput, foodDatabase, 'Lunch');
}

function getDinner() {
    getValue(dinnerInput, foodDatabase, 'Dinner');
}

function getSnacks() {
    getValue(snacksInput, foodDatabase, 'Snacks');
}

