//   var input = "my name is sourabh";
// expected output = "ym eman si hbaruos";

// var input = "my name is sourabh";
var input='picture upload sell leather'
console.log('input length='+input.length)
console.log('input=');
var output='';
let i;
useEffect(()=>{
  console.log('inside use effect')

},[])
var temp='';

console.log('output='+output);

// const onAssignment=()=>{
//   for(i=0;i<=input.length;i++){
//     output=output+input[0];
//     if(input[i]!=' '){
//       temp=temp+input[i]
//       console.log('temp='+temp)
//     }
//   }

// const onAssignment=()=>{
//   for(i=0;i<=input.length;i++){
//     temp=temp+input[i]
//     console.log('temp  ='+temp);
//     // while(input[i]!=" "){
//     //   output=output+input[i]
//     // }
//     console.log('output in assignment='+output)
//   }
// }
var final;
var revOutput='', revSec='', revThrid='', revFourth=''
var finalRev=''

var second=''; var third=''; var fourth=''
let j;  let k; let l;let x=0, y=0,  z=0, xx, yy,zz,aa
const onAssignment=useCallback(()=>{
  for(i=0;i<=input.length;i++){
    if(input[i]==' '){
      x=i; break;
    } else {output=output+input[i]}
    console.log('x='+x)

  }
  for(j=x;j<=input.length;j++){
    if(input[j+1]==' '){
      y=j; break;
    } else{second=second+input[j+1]}
  }

  for(k=y+1;k<=input.length;k++){
    if(input[k+1]==' '){
      z=k;break;
    }else {third=third+input[k+1]}
  }

  for(l=z+1;l<input.length;l++){
     fourth=fourth+input[l];
  }

  final=output+second+third+fourth;
  console.log('final='+final)

  for(xx=output.length-1;xx>=0;xx--){
    revOutput=revOutput+output[xx]
  }
  for(yy=second.length-1;yy>=0;yy--){
    revSec=revSec+second[yy]
  }
  for(zz=third.length-1;zz>=0;zz--){
    revThrid=revThrid+third[zz]
  }
  for(aa=fourth.length-1;aa>=0;aa--){
    revFourth=revFourth+fourth[aa]
  }

  finalRev=revOutput+" "+revSec+" "+revThrid+" "+revFourth;
  console.log('reversed='+finalRev)
},[output, temp, input,i,x, second, third, fourth, final, revOutput, revSec, revThrid, revFourth, finalRev])

  
  // for(i=input.length-1;i>=0;i--){

  //   // output=output+input[i];
  //   // console.log('output='+output);
    
  //  }
// }