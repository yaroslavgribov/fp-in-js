const add = curry((a, b) => a + b)

const increment = add(1)
increment(2)
