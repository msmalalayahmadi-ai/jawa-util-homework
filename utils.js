
// Utility 1: Get class statistics
export function getClassStats(grades) {
    let highest = grades[0];
    let lowest = grades[0];
    let sum = 0;

    // Process all grades using one for...of loop
    for (const grade of grades) {
        sum += grade;

        if (grade > highest) {
            highest = grade;
        }

        if (grade < lowest) {
            lowest = grade;
        }
    }

    const average = sum / grades.length;

    return {
        highest: highest,
        lowest: lowest,
        average: average
    };
}

// Utility 2: Capitalize the first letter of each word
export function capitalizeWords(text) {
    return text
        .toLowerCase()
        .replace(/\b\w/g, letter => letter.toUpperCase());
}

// Utility 3: Calculate discounted price
export function calculateDiscount(price, discountPercent) {
    if (price < 0 || discountPercent < 0 || discountPercent > 100) {
        return "Invalid input";
    }

    const discount = price * discountPercent / 100;
    const finalPrice = price - discount;

    return Number(finalPrice.toFixed(2));
}

// Utility 4: Count words in a sentence
export function countWords(sentence) {
    if (sentence.trim() === "") {
        return 0;
    }

    return sentence.trim().split(/\s+/).length;
}

// Utility 5: Convert Celsius to Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
