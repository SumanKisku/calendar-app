import dayjs, { Dayjs } from "dayjs";

/**
* This function returns the current month index
* @returns 0-11(Jan is 0, Dec is 11)
*/
export function getCurrentMonth() {
    return dayjs().month();
}

/**
* This function returns the current year
* @returns Example 2024
*/
export function getCurrentYear() {
    return dayjs().year();
}

/**
* This function returns current day with format
* @returns return format 26 Jan 2020
*/
export function getCurrentDay(): string {
    return dayjs().format("D ddd");
}

const currentMonth = getCurrentMonth();

const currentYear = getCurrentYear();

/**
 * This function returns the current month
 * @returns [ "1 Wed", "2 Thu", "3 Fri", "4 Sat", "5 Sun", "6 Mon", "7 Tue", "8 Wed", "9 Thu", "10 Fri", … ]
 */
// export const currentMonthDays = Array(dayjs().daysInMonth())
//     .fill(null)
//     .map(() => {
//         d++;
//         return dayjs(new Date(currentYear, currentMonth, d)).format("D ddd");
//     });
/**
 * This function returns the current month
 * @returns Array of Dayjs
 */
export const generateMonthDays = (month = currentMonth, year = currentYear): Dayjs[] => {
    let d = 0;
    const n = dayjs(new Date(year, month)).daysInMonth();

    return Array(n).fill(null).map(() => {
        d++;
        return dayjs(new Date(year, month, d));
    })
}