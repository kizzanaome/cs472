class Meditation {

    constructor(countDown) {
        this.countDown = countDown
    }
    start() {
        this.inervalId = setInterval(() => {
            console.log(this.countDown--)
            if (this.countDown===0){
                console.log("...")
                clearInterval(this.inervalId)
            }
        }, 1000)
    }
}


const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);
// Start meditation`
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev