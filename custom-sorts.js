

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
  arr.sort((a,b)=> {
    let logA = Math.log10(a)
    let logB = Math.log10(b)
    if(Math.floor(Math.log10(a))===Math.floor(Math.log10(b))) return logA-logB
    return logB-logA
  })
  return arr
}


function frequencySort(arr) {
  let counts = {}
  for(let num of arr){
    if(!counts[num])counts[num] = 1
    else counts[num]++
  }
  arr.sort((a,b)=> counts[a] === counts[b] ? b-a : counts[a] - counts[b])
  return arr
}

module.exports = [oddEvenSort, validAnagrams, reverseBaseSort,
                  frequencySort, ageSort];
