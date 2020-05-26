
class setUser {
  constructor(Name, 
    {TarodCard, Trait, Color, Cause, Status, Grades, Element, Creature} = {})
  {
    this.Name = Name
    this.TarodCard = TarodCard
    this.Cause = Cause
    this.Status = Status
    this.Trait = Trait
    this.Element = Element
    this.Grades = Grades
    this.Creature = Creature
    this.Color = Color
  }
}

function getUser(user){
  console.log(user)
}

u1 = new setUser("Layt", { 
  TarodCard: "I. The Fool",
  Color: "Bloodred",
  Trait: "Exiled Trickster",
  Cause: "Pech",
  Status: "Trickster",
  Grades: "S+",
  Element: "Shadow",
  Creature: "High-Res"

})

u2 = new setUser("Leni", {
  Status: "Aristocrat",
  Grades: "S+",
  Element: "Light",
  Trait: "Wonderkind"

})

 getUser(u1)
 getUser(u2)

