export default function addLetterPrefix(index:number, content:string){
  let preffix:string;
  if(index === 0){
    preffix = 'A.';
  }else if(index === 1){
    preffix = 'B.';
  }else if(index === 2){
    preffix = 'C.';
  }else if(index === 3){
    preffix = 'D.';
  }

  return `${preffix} ${content}`
}