

function ageSort(users) {

  users.sort((a,b)=>{

    return a.age - b.age
  })
  return users
}


function oddEvenSort(arr) {
  let evens = arr.filter(x=> x%2===0)
  let odds = arr.filter(x=> x%2!==0)
  evens.sort((a,b)=>a-b)
  odds.sort((a,b)=>a-b)
  return[...odds,...evens]

}

function validAnagrams(s, t) {
  s = s.split("").sort().join("")
  t = t.split("").sort().join("")
  return s===t
}

function reverseBaseSort(arr) {

}

function frequencySort(arr) {
  let counts = {}
  for(let num of arr){
    if(!counts[num])counts[num] = 1
    else counts[num]++
  }
  arr.sort((a,b)=>{
    if(counts[a.toString()]-counts[b.toString()]===0){
      return a-b
    } else return counts[a.toString()]-counts[b.toString()]
  })
  console.log(counts)
  return arr
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
                  frequencySort, ageSort];
