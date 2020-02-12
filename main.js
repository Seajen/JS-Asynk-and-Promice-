



function clearHouse(isClear) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isClear) {
                resolve(5);
            } else {
                reject('Clear house first')
            }
        }, 2000)
    })
}


function buyClothes(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 1000) {
                reject('I have not enough money')
            } else {
                console.log(`Buy jeans for ${money / 4}`);
                console.log(`Buy sweater for ${money / 2}`);
                resolve('GOOD !')
            }
        }, 500)
    })
}

async function goToWork() {
         try {
        let xxx = await clearHouse(true);
        console.log('CONGRATS');

        let smth = await buyClothes(xxx);
        console.log(smth);
    } catch (e) {
        console.log('ERRROR: ' + e);
    }
}

goToWork();
