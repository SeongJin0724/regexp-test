const str = `
010-1234-5678
thls702464@gmail.com
https://wwww.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
    str.match(/(?=@).{1,}/g)
    )
