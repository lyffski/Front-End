class User {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  hasAccess() {
    return this.name === 'Layt'
  }
}

class NullUser {
  constructor() {
    this.id = -1
    this.name = 'Anonymous'
  }

  hasAccess() {
    return false
  }
}

const users = [
  new User(1, 'Layt')
]


function getUser(id) {
  const user = users.find(user => user.id === id)
  if (user == null) {
    return new NullUser()
  } else {
    return user
  }
}

function printUser(id) {
  const user = getUser(id)
  console.log('Greetings ' + user.name)

  if (user.hasAccess()) {
    console.log('You are allowed')
  } else {
    console.log('You are not allowed')
  }
}

printUser(1)

