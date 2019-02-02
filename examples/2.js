// Closure is a stateful function
const add = a => b => a + b

const increment = add(1) // b => a + b
increment(2) // 3
