

function ageSort(users) {

  users.sort((a,b)=>{
    console.log(a.id,b.id)
    return a.age - b.age
  })
  return users
}


function oddEvenSort(arr) {
  let evens = arr.filter(x=> x%2===0)
  let odds = arr.filter(x=> x%2!==0)
  evens.sort()
  odds.sort()
  
}

function validAnagrams(s, t) {
  // Fill this in
}

function reverseBaseSort(arr) {
  // Fill this in
}

function frequencySort(arr) {
  // Fill this in
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
                  frequencySort, ageSort];
