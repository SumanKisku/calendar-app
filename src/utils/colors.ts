const tailwindBgColors = [
    'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500',
    'bg-yellow-600', 'bg-gray-800', 'bg-teal-500', 'bg-orange-500'
];

export const getRandomTailwindBgColor = () => {
    const randomIndex = Math.floor(Math.random() * tailwindBgColors.length);
    return tailwindBgColors[randomIndex];
}
