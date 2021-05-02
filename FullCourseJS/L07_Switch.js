//--> Switch Statements
//case values are tested with strict equality (===).
//If the break is omitted, the next statement will be executed.

function caseInSwitch(val){
    var answer ="does not exist";
    switch(val){
        
        case 1:
        answer="1";
        //break;//If the break is omitted it goes to next case
        
          case 2:
            answer="2";
            break;
        
          case 3:
            answer="3";
            break;
        
          case 4:
            answer="4";
            break;
        
        default://Default works if nothing is match
            answer="default";
            break;
        
    }
    return answer;
    
}

console.log(caseInSwitch(1));


