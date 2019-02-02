const xs = [{ id: 1 }, { id: 2 }]
const getId = obj => obj.id

const ids = xs.map(item => getId(item))

const ids = xs.map(getId)