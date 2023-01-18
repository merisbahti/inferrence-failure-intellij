const myFunc = () => {
    const myPromise = Promise.resolve(['a', 'b']).then(myArray =>
        myArray.flatMap(char => {
            if (char === 'b') return [];
            return [{ a: char, num: 10 }];
        }),
    );
    return myPromise;
};