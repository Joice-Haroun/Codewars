function friend(friends){
output = [];
for(let friend of friends){
  if(friend.length === 4){
    output.push(friend)
  }
}
  return output
}
console.log(friend(["Rayan", "Joice", "Lina", "mathani"]))