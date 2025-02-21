export function unique_random_array(range_end: number, length: number): number[] {
    const result: number[] = [];

    function onlyUnique(value: number, index: number, self: number[]) {
        return self.indexOf(value) === index;
    }

    while (result.filter(onlyUnique).length < length) {
        result.push(Math.round(Math.random() * range_end));
    }

    return result;
}