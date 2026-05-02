const getProgressionNumbers = (start, end, step) => {

    let result = new Array(end);
    for (let i = 0; i < end; i++) {
        result[i] = start * step;
        start += 1;

    }

    return result;
}

export { getProgressionNumbers };

