
// console.dir(_)


// isEmpty()

// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));


// get()

// - user && user.location && objA.location.city
//  - user?.location?.city

// console.log(user?.location?.city);



// union()

// console.log(_.union([1, 2, 3], [3, 4, 5]));



// range()

// console.log(_.range(10, 25));



// sortBy()





// sum() и sumBy()




// uniq()  и  uniqBy()
// sortedUniq()  и   sortedUniqBy()




// random()




// min()  и  max()
// minBy()  и  maxBy()




// camelCase(),  capitalize(),  kebabCase(),  lowerCase(),  upperCase()


 function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Change code below this line

  // for (let i = 0; i < firstArray.length; i += 1) 
   firstArray.forEach(function(el) {
    if (secondArray.includes(el)) {
      commonElements.push(el);
    }
  });

  return commonElements;
  // Change code above this line
}
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));