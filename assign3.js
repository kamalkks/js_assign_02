let oldarr=[]
let m
let n
function pen(m,n)
{
    oldarr[m]=n
  //  console.log(oldarr[m])
    let l=oldarr[m]+2
    return l
}
console.log(pen(0,1))
console.log(pen(1,2))
console.log(pen(2,3))


//Another way

/*let himalya=[5,2,3]
for(let i=0;i<himalya.length;i++)
{
    pen(i,himalya[i])
}
function pen(j,k)
{
let otherarr=[]
otherarr[j]=k+2
console.log(otherarr[j])

}
let j
let k*/