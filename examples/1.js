const hi = name => `Oh hi, ${name}`
const greet = name => hi(name)

const greet = hi
greet('Mark') // Oh hi, Mark
