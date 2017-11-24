export const dateYM = time =>{
	time -= 0;
    time *= 1000 
    var newDate = new Date(time);
    let {y,m,d}={y:newDate.getFullYear(),m:newDate.getMonth()+1,d:newDate.getDate()};
    return `${y}年${m}月` ;
}