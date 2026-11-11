
 // Import all five utility functions
import {
    getClassStats,
    capitalizeWords,
    calculateDiscount,
    countWords,
    convertCelsiusToFahrenheit
} from "./utils.js";

// Test Utility 1: Class Statistics
const grades = [88, 95, 72, 91, 65];

const results = getClassStats(grades);

console.log("Class Statistics:");
console.log(results);

// Test Utility 2: Capitalize Words
const sentence = "welcome to javascript programming";

const capitalized = capitalizeWords(sentence);

console.log("Capitalized Text:", capitalized);

// Test Utility 3: Calculate Discount
const price = 200;
const discountPercent = 25;

const finalPrice = calculateDiscount(price, discountPercent);

console.log("Original Price:", price);
console.log("Discount:", discountPercent + "%");
console.log("Final Price:", finalPrice);

// Test Utility 4: Count Words
const text = "JavaScript modules make code reusable";

const wordCount = countWords(text);

console.log("Word Count:", wordCount);

// Test Utility 5: Convert Celsius to Fahrenheit
const celsius = 25;

const fahrenheit = convertCelsiusToFahrenheit(celsius);

console.log("Temperature in Celsius:", celsius);
console.log("Temperature in Fahrenheit:", fahrenheit);
