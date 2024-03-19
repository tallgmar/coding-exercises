const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Tarkistetaan onko keskimmäinen elementti etsittävä arvo
        if (arr[mid] === target) {
            return mid; // Palautetaan indeksi
        }

        // Jos etsittävä arvo on pienempi, etsitään vasemmasta puolikkaasta
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Muussa tapauksessa etsitään oikeasta puolikkaasta
        else {
            right = mid - 1;
        }
    }

    return -1; // Palautetaan -1, jos etsittävää arvoa ei löydy
}

// Testataan binäärihakua
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetValue = 19;

const resultIndex = binarySearch(sortedArray, targetValue);

// Tulostetaan tulos
resultIndex !== -1 ? console.log(`Arvo ${targetValue} löytyi indeksistä ${resultIndex}.`) : console.log(`Arvoa ${targetValue} ei löytynyt.`);