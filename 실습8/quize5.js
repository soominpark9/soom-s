

const alphabet =[
    [
        ['a', 'b', 'c', 'd'],
        ['e', 'f', 'g', 'h'],
        ['i', 'j', 'k', 'l'],
        ['m', 'n', 'o', 'p'],
    ],
    [
        ['q', 'r', 's', 't'],
        ['u', 'v', 'w', 'x'],
        ['y', 'z', 'D', 'H'],
        ['L', 'O', 'W', ' '],
    ],
];

console.log(alphabet[1][2][3]+alphabet[0][1][0]+alphabet[1][3][0]+alphabet[0][2][3]+alphabet[0][3][2]+alphabet[1][3][3]+alphabet[1][3][2]+alphabet[0][3][2]+alphabet[1][0][1]+alphabet[1][3][0]+alphabet[1][2][2]);
console.log(alphabet[1][0][2]+alphabet[0][3][2]+alphabet[0][3][2]+alphabet[1][3][3]+alphabet[0][3][0]+alphabet[0][2][0]+alphabet[0][3][1]+alphabet[1][3][3]+alphabet[0][3][3]
    +alphabet[0][0][0]+alphabet[1][0][1]+alphabet[0][2][2]);