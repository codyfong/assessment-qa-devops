const {shuffleArray} = require('./utils')
const testArray = [1,2,3,4,5]
describe('shuffleArray should return a given array shuffled', () => {
    
    test('Check array has same elements', () => {
        let arr1 = shuffleArray(testArray).sort()
        let arr2 = testArray.sort()
        expect(arr1).toEqual(arr2)
    })
    
    test('Check length of returned array is equal to parameter array', () => {
        expect(shuffleArray(testArray).length).toEqual(testArray.length)
    })
})