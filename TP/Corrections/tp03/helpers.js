

export function formate(number, precision = 100) {
    // vérification de la précision
    if (isNaN(parseInt(precision)) && precision > 10) throw new Error("Bad precision")

    return Math.floor(number * precision) / precision;
}