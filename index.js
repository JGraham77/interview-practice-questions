// {value: number; weight: number} []
function fractionalKnapsack(items, capacity) {
    items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));

    let maxValue = 0;
    let fractions = [];

    for (const item of items) {
        if (item.weight <= capacity) {
            // we have space
            maxValue += item.value;
            capacity -= item.weight;
            fractions.push({ item,fraction: 1 })
        } else {
            // gotta break item up
            const fraction = (capacity / item.weight).toFixed(2);
            maxValue += item.value * parseFloat(fraction);
            fractions.push({ item, fraction })
        }
    }

    return { maxValue: maxValue.toFixed(2), fractions }
}

console.log (fractionalKnapsack([{value: 60, weight: 10}, {value: 100, weight: 20}, {value: 120, weight: 30}], 50))