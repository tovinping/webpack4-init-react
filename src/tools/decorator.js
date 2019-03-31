function addSkill(target) {
  console.log(target.name)
  target.type = 'superMan'
  target.prototype.sex = 'man'
}

@addSkill
class Person{}
console.log(Person.type)
let user = new Person()
console.log(user.sex)
export default Person