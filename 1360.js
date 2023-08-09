// 1360. Number of Days Between Two Dates
// Easy
// 317
// 1.2K
// Companies
// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

 

// Example 1:

// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15
var daysBetweenDates = function(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    
    const timeDifference = endDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return Math.abs(daysDifference);

};