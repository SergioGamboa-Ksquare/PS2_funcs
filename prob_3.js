const Spiral = (ejemplo)=>{
    solve=[]
    matriz= [[1,2,9,10,25],[4,3,8,11,24],[5,6,7,12,23],[16,15,14,13,22],[17,18,19,20,21]];
    
    var a=ejemplo[0][0]-1;
    var b=ejemplo[0][1]-1;
    var c=ejemplo[1][0]-1;
    var d=ejemplo[1][1]-1;
    var e=ejemplo[2][0]-1;
    var f=ejemplo[2][1]-1;
    x=matriz[a][b];
    y=matriz[c][d];
    z=matriz[e][f];
    if (z == null){
        z='Invalid pos'
    };
    if (y == null){
        y='Invalid pos'
    };
    if (x == null){
        x='Invalid pos'
    };
    solve.push(x,y,z);
    return solve; 
}
    console.log(Spiral([[4,4],[3,1],[5,2]]))