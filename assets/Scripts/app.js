
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
const breakfastBtn = document.getElementById("new-breakfast-submit");
const lunchBtn = document.getElementById("new-lunch-submit");
const dinnerBtn = document.getElementById("new-dinner-submit");
const snacksBtn = document.getElementById("new-snacks-submit");


/// This is a better alternative to onClick functions inside html code
const daySubmitButton = document.querySelector('#new-day-submit')
daySubmitButton.addEventListener('click', getDaysData)


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
    return {
        meal: meal,
        calories: calorieSum,
        protein: proteinSum,
        carbs: carbSum,
        fat: fatSum,
    }
}

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
const breakTable = document.getElementById("break-name");
const lunchTable = document.getElementById("lunch-name");
const dinnerTable = document.getElementById("dinner-name");
const snacksTable = document.getElementById("snacks-name");
function getDaysData() {
    const daysObj = {
        breakfast: getValue(breakfastInput, foodDatabase, 'Breakfast'),
        lunch: getValue(lunchInput, foodDatabase, 'Lunch'),
        dinner: getValue(dinnerInput, foodDatabase, 'Dinner'),
        snacks: getValue(snacksInput, foodDatabase, 'Snacks'),
    }
    console.log(daysObj)
    breakTable.innerHTML = daysObj.breakfast.meal
    lunchTable.innerHTML = daysObj.lunch.meal
    dinnerTable.innerHTML = daysObj.dinner.meal
    snacksTable.innerHTML = daysObj.snacks.meal
    console.log(daysObj.breakfast);
}





breakfastBtn.addEventListener('click', getDaysData);
lunchBtn.addEventListener('click', getDaysData);
dinnerBtn.addEventListener('click', getDaysData);
snacksBtn.addEventListener('click', getDaysData);
