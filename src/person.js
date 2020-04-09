export const isAdult = (x) => {

    if (x>18) {
        return true;
    }
    else{
        return false;
    }

   


}


export const canDrink = (x) => {

    if (x>20) {
        return true;
    }
    else{
        return false;
    }
 


}

const isSenior = (x) => x >= 64

export default isSenior;
