function rotates(l,k3){
  var i
for(i=0;i<k3;i++){
  var k2=l.shift()
  l.push(k2)
  }
  return l
}
module.exports={rotates}