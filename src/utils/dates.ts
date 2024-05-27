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