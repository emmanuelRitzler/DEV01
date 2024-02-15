export function genererMatrix(l, c, max = 10) {
    const matrix = [];
    for (let i = 0; i < l; i++) {
        const line = [];
        for (let j = 0; j < c; j++) {
            line.push(Math.floor(Math.random() * max) + 1);
        }

        matrix.push(line)
    }

    return matrix;
}