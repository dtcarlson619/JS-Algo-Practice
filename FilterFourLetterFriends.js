// make a program that returns a list of friends whos names have 4 letters

function friend(friends){
    let friendsList = [];
    for(let i = 0; i < friends.length; i++){
      if(friends[i].length == 4){
        friendsList.push(friends[i]);
        }
    }
    return friendsList;
}

console.log(friend(["Ryan","Joey","Bob","Barbara"]));

