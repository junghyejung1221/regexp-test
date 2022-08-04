console.log('start')

//줄바꿈 표현
const str = `
010-1234-5678
123456@naver.com
The quick the best fox jumps over the lazy dog.
aabbbbcccccddd
`



// gi 는 대문자 소문자를 구별하지 않겠다
// const regexp = new RegExp('The','gi')
// const regexp = /the/gi

// console.log(str.match(regexp))

// const regexp = /fox/gi

// console.log(regexp.test(str))

const regexp = /fox/gi

console.log(str.replace(regexp,'AAA'))
console.log(str)