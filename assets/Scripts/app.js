
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



const breakfastInput = document.getElementById("new-breakfast-input");
const lunchInput = document.getElementById("new-lunch-input");
const dinnerInput = document.getElementById("new-dinner-input");
const snacksInput = document.getElementById("new-snacks-input");


const daySubmitButton = document.querySelector('#new-day-submit')
daySubmitButton.addEventListener('click', getDaysData)


function getValue(input, foods, meal) {
    const inputValue = input.value;
    const inputArray = inputValue.split(',');
    let calorieSum = 0;
    let proteinSum = 0;
    let carbSum = 0;
    let fatSum = 0;
    if (input.value === '') {
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

function getDaysData() {
    const daysObj = {
        breakfast: getValue(breakfastInput, foodDatabase, 'Breakfast'),
        lunch: getValue(lunchInput, foodDatabase, 'Lunch'),
        dinner: getValue(dinnerInput, foodDatabase, 'Dinner'),
        snacks: getValue(snacksInput, foodDatabase, 'Snacks'),
    }
    console.log(daysObj)
}

