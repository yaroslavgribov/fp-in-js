const compose = (f, g) => x => f(g(x))

const toUpperCase = x => x.toUpperCase()
const exclaim = x => `${x}!`
const shout = compose(exclaim, toUpperCase)

shout('I did not hit her') // I DID NOT HIT HER