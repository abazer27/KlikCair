var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.on('line', (input) => {
    let weightGems = []
    let numberOfGems = []
    let bagSize = 0;
    let carriedGems = []

    if (input > 0) {
      rl.on('line', async (capacity) => {
        for (let i = 1; i <= input; i++) {
          await new Promise((resolve) => {
            rl.question(`${i} `, (weight) => {
              if (weight == 0) {
                console.log("Cant be Zero")
                i -= 1
                resolve()
              } else if (weight != 0) {
                weightGems.push(parseInt(weight))
                numberOfGems.push(i)
                resolve()
              }
            })
          })
        }

        for (let i = 0; i <= weightGems.length; i++) {

          let tempCapacity = capacity - bagSize
          if (weightGems[i] > tempCapacity) {
          } else if (weightGems[i] <= tempCapacity) {
            carriedGems.push(numberOfGems[i])
            bagSize += weightGems[i]
          }
        }

        if (carriedGems.length == 0) {
          carriedGems.push(-1)
        }

        console.log(carriedGems)
        rl.close()
      })
    }
  }).on("close", () => {
    process.exit(0)
  })
}

main();