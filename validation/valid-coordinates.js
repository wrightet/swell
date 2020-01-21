const validCoordinates = arr => {
    let res = false;
    let count = 0;

    if (arr.length !== 2) { return false}
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
         if (typeof element === 'number') {
            res = true;
            count += 1;
        }
    }
    if (res === true && count === 2){
        return true;
    } else 
    { return false}
}