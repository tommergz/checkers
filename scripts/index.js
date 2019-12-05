function drawBoard(){
    let board = document.getElementById("chessboard");
    let color = [
        "rgb(105, 140, 194)",
        "#dddddd"
    ] 
    let count = 1;  
    for(let i=0; i<8; i++){
        
        let x;
        for(let j=0; j<8; j++){
            if (count%2 === 0) {
                x = 0;
            }
            else {
                x = 1;
            }
            board.rows[i].cells[j].style.backgroundColor = color[x];
            if (j !== 7) {
                count++;
            }
            else {
                count +=2;
            }
        }
    }
}        
drawBoard()       


let chessBoard = document.getElementById("chessboard");
let color = true;
let choosenFigure = null;
let previousCell;
let previousFigure;
let currentCell;
let currentFigure;
let firstStep = 0;
let cells = document.getElementsByTagName("td")

let figure1White = document.getElementById('f1-white');
figure1White.possibleMoves = [];
figure1White.color = true;
figure1White.fight = false;
figure1White.oneStep = false;
figure1White.damka = false;
let figure2White = document.getElementById('f2-white');
figure2White.possibleMoves = [];
figure2White.color = true;
figure2White.fight = false;
figure2White.oneStep = false;
figure2White.damka = false;
let figure3White = document.getElementById('f3-white');
figure3White.possibleMoves = [];
figure3White.color = true;
figure3White.fight = false;
figure3White.oneStep = false;
figure3White.damka = false;
let figure4White = document.getElementById('f4-white');
figure4White.possibleMoves = [];
figure4White.color = true;
figure4White.fight = false;
figure4White.oneStep = false;
figure4White.damka = false;
let figure5White = document.getElementById('f5-white');
figure5White.possibleMoves = [];
figure5White.color = true;
figure5White.fight = false;
figure5White.oneStep = false;
figure5White.damka = false;
let figure6White = document.getElementById('f6-white');
figure6White.possibleMoves = [];
figure6White.color = true;
figure6White.fight = false;
figure6White.oneStep = false;
figure6White.damka = false;
let figure7White = document.getElementById('f7-white');
figure7White.possibleMoves = [];
figure7White.color = true;
figure7White.fight = false;
figure7White.oneStep = false;
figure7White.damka = false;
let figure8White = document.getElementById('f8-white');
figure8White.possibleMoves = [];
figure8White.color = true;
figure8White.fight = false;
figure8White.oneStep = false;
figure8White.damka = false;
let figure9White = document.getElementById('f9-white');
figure9White.possibleMoves = [];
figure9White.color = true;
figure9White.fight = false;
figure9White.oneStep = false;
figure9White.damka = false;
let figure10White = document.getElementById('f10-white');
figure10White.possibleMoves = [];
figure10White.color = true;
figure10White.fight = false;
figure10White.oneStep = false;
figure10White.damka = false;
let figure11White = document.getElementById('f11-white');
figure11White.possibleMoves = [];
figure11White.color = true;
figure11White.fight = false;
figure11White.oneStep = false;
figure11White.damka = false;
let figure12White = document.getElementById('f12-white');
figure12White.possibleMoves = [];
figure12White.color = true;
figure12White.fight = false;
figure12White.oneStep = false;
figure12White.damka = false;

let figure1Black = document.getElementById('f1-black');
figure1Black.possibleMoves = [];
figure1Black.color = false;
figure1Black.fight = false;
figure1Black.oneStep = false;
figure1Black.damka = false;
let figure2Black = document.getElementById('f2-black');
figure2Black.possibleMoves = [];
figure2Black.color = false;
figure2Black.fight = false;
figure2Black.oneStep = false;
figure2Black.damka = false;
let figure3Black = document.getElementById('f3-black');
figure3Black.possibleMoves = [];
figure3Black.color = false;
figure3Black.fight = false;
figure3Black.oneStep = false;
figure3Black.damka = false;
let figure4Black = document.getElementById('f4-black');
figure4Black.possibleMoves = [];
figure4Black.color = false;
figure4Black.fight = false;
figure4Black.oneStep = false;
figure4Black.damka = false;
let figure5Black = document.getElementById('f5-black');
figure5Black.possibleMoves = [];
figure5Black.color = false;
figure5Black.fight = false;
figure5Black.oneStep = false;
figure5Black.damka = false;
let figure6Black = document.getElementById('f6-black');
figure6Black.possibleMoves = [];
figure6Black.color = false;
figure6Black.fight = false;
figure6Black.oneStep = false;
figure6Black.damka = false;
let figure7Black = document.getElementById('f7-black');
figure7Black.possibleMoves = [];
figure7Black.color = false;
figure7Black.fight = false;
figure7Black.oneStep = false;
figure7Black.damka = false;
let figure8Black = document.getElementById('f8-black');
figure8Black.possibleMoves = [];
figure8Black.color = false;
figure8Black.fight = false;
figure8Black.oneStep = false;
figure8Black.damka = false;
let figure9Black = document.getElementById('f9-black');
figure9Black.possibleMoves = [];
figure9Black.color = false;
figure9Black.fight = false;
figure9Black.oneStep = false;
figure9Black.damka = false;
let figure10Black = document.getElementById('f10-black');
figure10Black.possibleMoves = [];
figure10Black.color = false;
figure10Black.fight = false;
figure10Black.oneStep = false;
let figure11Black = document.getElementById('f11-black');
figure11Black.possibleMoves = [];
figure11Black.color = false;
figure11Black.fight = false;
figure11Black.oneStep = false;
figure11Black.damka = false;
let figure12Black = document.getElementById('f12-black');
figure12Black.possibleMoves = [];
figure12Black.color = false;
figure12Black.fight = false;
figure12Black.oneStep = false;
figure12Black.damka = false;
  
let upLetters = document.querySelector(".up-letters")
let bottomLetters = document.querySelector(".bottom-letters")

let damka_fight = 0;
let side_one = 1;
let side_two = 1;
let side_three = 1;
let side_four = 1;

let tds = document.getElementsByTagName("TD");

tds = Array.from(tds).slice(8,72);

tds.forEach(el => {
    el.fighting_cell = 0;
})

let queue = document.getElementById("queue");

function turn(color) {
    if (color) {
        chessBoard.classList.add("turn");
        upLetters.classList.add("turn");
        bottomLetters.classList.add("turn");
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                chessBoard.rows[i].cells[j].classList.add("turn");
            }
        }
        for (let i = 0; i < 8; i++) {           
            upLetters.children[0].children[i].classList.add("turn");
            bottomLetters.children[0].children[i].classList.add("turn");
        }
        queue.innerHTML = "B L A C K";
    }
    else {
        chessBoard.classList.remove("turn");
        upLetters.classList.remove("turn");
        bottomLetters.classList.remove("turn");
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                chessBoard.rows[i].cells[j].classList.remove("turn");
            }
        }
        for (let i = 0; i < 8; i++) {           
            upLetters.children[0].children[i].classList.remove("turn");
            bottomLetters.children[0].children[i].classList.remove("turn");
        }
        queue.innerHTML = "W H I T E"
    }
}

let white_checkers = [
    figure1White, figure2White, figure3White, figure4White, figure5White, figure6White,
    figure7White, figure8White, figure9White, figure10White, figure11White, figure12White,    
]

let black_checkers = [
    figure1Black, figure2Black, figure3Black, figure4Black, figure5Black, figure6Black,
    figure7Black, figure8Black, figure9Black, figure10Black, figure11Black, figure12Black
]

let fighting_checkers = 0;
let street_of_rage_checkers = false;

tds.forEach(el => {
    el.fight_check = function(choosenDamka, boolean) {
        let i = this.parentNode.rowIndex;
        let j = this.cellIndex;
        let rememberI = i;
        let rememberJ = j;
        let newTarget = chessBoard.rows[i].cells[j];
        i-=1;
        j-=1;
        while(i > 0 && j > 0 && !newTarget.firstChild) {
            newTarget = chessBoard.rows[i].cells[j];
            i-=1;
            j-=1;
        }
        if (i >= 0 && j >= 0 && newTarget.firstChild) {
            if (newTarget.firstChild.color === boolean) {
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.firstChild || newTarget.firstChild === choosenDamka) {
                    el.fighting_cell +=1;
                    damka_fight += side_one;
                    side_one = 0;
                }               
            }
        }
        i = rememberI;
        j = rememberJ;
        newTarget = chessBoard.rows[i].cells[j];
        i-=1;
        j+=1;
        while(i > 0 && j < 7 && !newTarget.firstChild) {
            newTarget = chessBoard.rows[i].cells[j];
            i-=1;
            j+=1;
        }
        if (i >= 0 && j <= 7 && newTarget.firstChild) {
            if (newTarget.firstChild.color === boolean) {
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.firstChild || newTarget.firstChild === choosenDamka) {
                    el.fighting_cell +=1;
                    damka_fight += side_two;
                    side_two = 0;
                }                
            }
        }
        i = rememberI;
        j = rememberJ;
        newTarget = chessBoard.rows[i].cells[j];
        i+=1;
        j+=1;
        while(i < 7 && j < 7 && !newTarget.firstChild) {
            newTarget = chessBoard.rows[i].cells[j];
            i+=1;
            j+=1;
        }
        if (i <= 7 && j <= 7 && newTarget.firstChild) {
            if (newTarget.firstChild.color === boolean) {
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.firstChild || newTarget.firstChild === choosenDamka) {
                    el.fighting_cell +=1;
                    damka_fight += side_three;
                    side_three = 0;
                }                
            }
        }
        i = rememberI;
        j = rememberJ;
        newTarget = chessBoard.rows[i].cells[j];
        i+=1;
        j-=1;
        while(i < 7 && j > 0 && !newTarget.firstChild) {
            newTarget = chessBoard.rows[i].cells[j];
            i+=1;
            j-=1;
        }
        if (i <= 7 && j >= 0 && newTarget.firstChild) {
            if (newTarget.firstChild.color === boolean) {
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.firstChild || newTarget.firstChild === choosenDamka) {
                    el.fighting_cell +=1;
                    damka_fight += side_four;
                    side_four = 0;
                }                
            }
        }
    }
})

white_checkers.forEach(el => {
    el.steps = function() {
        fighting_checkers = 0;
        let i = this.parentNode.parentNode.rowIndex;
        let j = this.parentNode.cellIndex;
        let rememberI = i;
        let rememberJ = j;
        let i_for_damka_one;
        let j_for_damka_one;
        let i_for_damka_two;
        let j_for_damka_two;
        let i_for_damka_three;
        let j_for_damka_three;
        let i_for_damka_four;
        let j_for_damka_four;
        if (i > 0 && j > 0) {
            i-=1;
            j-=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }    
                if (el.damka) {
                    i_for_damka_one = i;
                    j_for_damka_one = j;
                    while (i > 0 && j > 0 && !newTarget.firstChild) {
                        i-=1;
                        j-=1;
                        newTarget = chessBoard.rows[i].cells[j];
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                        }  
                    }
                    i_for_damka_one = i;
                    j_for_damka_one = j;
                }   
            }                    
        }
        i = rememberI;
        j = rememberJ;
        if (i > 0 && j < 7) {
            i-=1;
            j+=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }    
                if (el.damka) {
                    i_for_damka_two = i;
                    j_for_damka_two = j;    
                    while (i > 0 && j < 7 && !newTarget.firstChild) {
                        i-=1;
                        j+=1;
                        newTarget = chessBoard.rows[i].cells[j];
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                        }        
                        i_for_damka_two = i;
                        j_for_damka_two = j;                
                    }                   
                }
            }            
        }
//////////////////////// damka 1 (fight 3) ////////////////////////////////////

        i = rememberI;
        j = rememberJ;
        if (el.damka && i < 7 && j > 0) {
            i+=1;
            j-=1;
            i_for_damka_three = i;
            j_for_damka_three = j;
            let newTarget = chessBoard.rows[i].cells[j];
            while (i <= 7 && j >=0 && !newTarget.firstChild) {
                i_for_damka_three = i;
                j_for_damka_three = j;
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }  
                i+=1;
                j-=1;
            } 
        }
//\\\\\\\\\\\\\\\\\\\\\\ damka 1 (fight 3) ////////////////////////////////////

//////////////////////// damka 2 (fight 4) ////////////////////////////////////

        i = rememberI;
        j = rememberJ;
        if (el.damka && i < 7 && j < 7) {
            i+=1;
            j+=1;
            i_for_damka_four = i;
            j_for_damka_four = j;
            let newTarget = chessBoard.rows[i].cells[j];
            while (i <= 7 && j <= 7 && !newTarget.firstChild) {
                i_for_damka_four = i;
                j_for_damka_four = j;
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }  
                i+=1;
                j+=1;
            } 
        }
//\\\\\\\\\\\\\\\\\\\\\\ damka 2 (fight 4) ////////////////////////////////////

        i = rememberI;
        j = rememberJ;
        if (!el.damka && i > 0 && j > 0) {
            i-=1;
            j-=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (newTarget.childNodes.length) {
                    if (newTarget.firstChild.color !== el.color && i - 1 >= 0 && j - 1 >= 0) {
                        i-=1;
                        j-=1;
                        let newTarget = chessBoard.rows[i].cells[j];

                            if (!newTarget.childNodes.length) {
                                el.possibleMoves.push(newTarget)
                                el.fight = true;
                                fighting_checkers += 1;
                                street_of_rage_checkers = true;
                            }    
                        
                    }                   
                }    
            }            
        }
        i = rememberI;
        j = rememberJ; 
        if (!el.damka && i > 0 && j < 7) {
            i-=1;
            j+=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (newTarget.childNodes.length) {
                    if (newTarget.firstChild.color !== el.color && i - 1 >= 0 && j + 1 <= 7) {
                        i-=1;
                        j+=1;
                        let newTarget = chessBoard.rows[i].cells[j];

                            if (!newTarget.childNodes.length) {
                                el.possibleMoves.push(newTarget)
                                el.fight = true;
                                fighting_checkers += 1;
                                street_of_rage_checkers = true;
                            }    
                        
                    }   
                }    
            }             
        }


//////////////////////// fight damka 1 ////////////////////////////
        i = i_for_damka_one;
        j = j_for_damka_one;
        if (el.damka && i > 0 && j > 0) {
            newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (!newTarget.firstChild.color) {
                    i-=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.firstChild) {
                        el.possibleMoves.push(newTarget);
                        fighting_checkers += 1;
                        street_of_rage_checkers = true;
                        el.fight = true;
                    } 
                }       
                while (i > 0 && j > 0 && !newTarget.firstChild) {
                    i-=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.childNodes.length) {
                        el.possibleMoves.push(newTarget)
                        fighting_checkers += 1;
                    }  
                }                 
            }  
        }
               
//\\\\\\\\\\\\\\\\\\\\\\ fight damka 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\   

//////////////////////// fight damka 2 ////////////////////////////
        i = i_for_damka_two;
        j = j_for_damka_two;
        if (el.damka  && i > 0 && j < 7) {
            newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (!newTarget.firstChild.color) {
                    i-=1;
                    j+=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.firstChild) {
                        el.possibleMoves.push(newTarget);
                        fighting_checkers += 1;
                        street_of_rage_checkers = true;
                        el.fight = true;
                    } 
                }       
                while (i > 0 && j < 7 && !newTarget.firstChild) {
                    i-=1;
                    j+=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.childNodes.length) {
                        el.possibleMoves.push(newTarget)
                        fighting_checkers += 1;
                    }                        
                }                
            }
        }
        
//\\\\\\\\\\\\\\\\\\\\\\ fight damka 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\ 

//////////////////////// fight damka 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

        i = i_for_damka_three;
        j = j_for_damka_three;
        if (el.damka && i < 7 && j > 0) {
            newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (!newTarget.firstChild.color) {
                    i+=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.firstChild) {
                        el.possibleMoves.push(newTarget);
                        fighting_checkers += 1;
                        street_of_rage_checkers = true;
                        el.fight = true;
                    }    
                } 
                while (i < 7 && j > 0 && !newTarget.firstChild) {
                    i+=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.childNodes.length) {
                        el.possibleMoves.push(newTarget)
                        fighting_checkers += 1;
                    }  
                }                        
            } 
        }

//\\\\\\\\\\\\\\\\\\\\\\\\\ fight damka 3 \\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////////////////// fight damka 4 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

i = i_for_damka_four;
j = j_for_damka_four;
if (el.damka && i < 7 && j < 7) {
    newTarget = chessBoard.rows[i].cells[j];
    if (newTarget.firstChild) {
        if (!newTarget.firstChild.color) {
            i+=1;
            j+=1;
            newTarget = chessBoard.rows[i].cells[j];
            if (!newTarget.firstChild) {
                el.possibleMoves.push(newTarget);
                fighting_checkers += 1;
                street_of_rage_checkers = true;
                el.fight = true;
            }            
        }      
        while (i < 7 && j < 7 && !newTarget.firstChild) {
            i+=1;
            j+=1;
            newTarget = chessBoard.rows[i].cells[j];
            if (!newTarget.childNodes.length) {
                el.possibleMoves.push(newTarget)
                fighting_checkers += 1;
            }  
        }                    
    }
}

//\\\\\\\\\\\\\\\\\\\\\\\\\ fight damka 4 \\\\\\\\\\\\\\\\\\\\\\\\\\

        i = rememberI;
        j = rememberJ;
        if (!el.damka && i < 6 && j > 1) {
            i+=1;
            j-=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color !== el.color) {
                    i+=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (newTarget) {
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                            el.fight = true;
                            fighting_checkers += 1;
                            street_of_rage_checkers = true;
                        }    
                    }
                }    
            }           
        }
        i = rememberI;
        j = rememberJ;
        if (!el.damka && i < 6 && j < 6) {
            i+=1;
            j+=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color !== el.color) {
                    i+=1;
                    j+=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (newTarget) {
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                            el.fight = true;
                            fighting_checkers += 1;
                            street_of_rage_checkers = true;
                        }    
                    }
                }    
            }           
        }
        if (fighting_checkers > 0) {
            el.possibleMoves = el.possibleMoves.slice(-fighting_checkers);
        }

        let choosenDamka = el;
        if (el.damka && el.fight) {
            el.possibleMoves.forEach(el => {
                el.fight_check(choosenDamka, false)
            })
            if (damka_fight > 1) {
                let count = el.possibleMoves.length;
                for (let i = 0; i < count; i++) {
                    if (el.possibleMoves[i].fighting_cell === 1) {
                        el.possibleMoves.remove(el.possibleMoves[i])
                        i -= 1;
                        count -= 1;
                    }
                }
            }
            damka_fight = 0;
            side_one = 1;
            side_two = 1;
            side_three = 1;
            side_four = 1;
        }
    }
}) 

black_checkers.forEach(el => {
    el.steps = function() {
        fighting_checkers = 0;
        let i = this.parentNode.parentNode.rowIndex;
        let j = this.parentNode.cellIndex;
        let rememberI = i;
        let rememberJ = j;
        let i_for_damka_one;
        let j_for_damka_one;
        let i_for_damka_two;
        let j_for_damka_two;
        let i_for_damka_three;
        let j_for_damka_three;
        let i_for_damka_four;
        let j_for_damka_four;

        if (i < 7 && j > 0) {
            i+=1;
            j-=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }    
                if (el.damka) {
                    i_for_damka_one = i;
                    j_for_damka_one = j;
                    while (i < 7 && j > 0 && !newTarget.firstChild) {
                        i+=1;
                        j-=1;
                        newTarget = chessBoard.rows[i].cells[j];
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                        }  
                    }
                    i_for_damka_one = i;
                    j_for_damka_one = j;
                } 
            }           
        }
        i = rememberI;
        j = rememberJ;
        if (i < 7 && j < 7) {
            i+=1;
            j+=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }    
                if (el.damka) {
                    i_for_damka_two = i;
                    j_for_damka_two = j;    
                    while (i < 7 && j < 7 && !newTarget.firstChild) {
                        i+=1;
                        j+=1;
                        newTarget = chessBoard.rows[i].cells[j];
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                        }        
                        i_for_damka_two = i;
                        j_for_damka_two = j;                
                    }                   
                }
            }           
        }

//////////////////////// damka 1 (fight 3) ////////////////////////////////////
        i = rememberI;
        j = rememberJ;
        if (el.damka && i > 0 && j > 0) {
            i-=1;
            j-=1;
            i_for_damka_three = i;
            j_for_damka_three = j;
            let newTarget = chessBoard.rows[i].cells[j];
            while (i >= 0 && j >=0 && !newTarget.firstChild) {
                i_for_damka_three = i;
                j_for_damka_three = j;
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }  
                i-=1;
                j-=1;
            } 
        }
//\\\\\\\\\\\\\\\\\\\\\\ damka 1 (fight 3) ////////////////////////////////////

//////////////////////// damka 2 (fight 4) ////////////////////////////////////

        i = rememberI;
        j = rememberJ;
        if (el.damka && i > 0 && j < 7) {
            i-=1;
            j+=1;
            i_for_damka_four = i;
            j_for_damka_four = j;
            let newTarget = chessBoard.rows[i].cells[j];
            while (i >= 0 && j <= 7 && !newTarget.firstChild) {
                i_for_damka_four = i;
                j_for_damka_four = j;
                newTarget = chessBoard.rows[i].cells[j];
                if (!newTarget.childNodes.length) {
                    el.possibleMoves.push(newTarget)
                }  
                i-=1;
                j+=1;
            } 
        }
//\\\\\\\\\\\\\\\\\\\\\\ damka 2 (fight 4) //////////////////////////////////// 

        i = rememberI;
        j = rememberJ;
        if (!el.damka && i < 7 && j > 0) {
            i+=1;
            j-=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (newTarget.childNodes.length) {
                    if (newTarget.firstChild.color !== el.color && i + 1 <= 7 && j - 1 >= 0) {
                        i+=1;
                        j-=1;
                        let newTarget = chessBoard.rows[i].cells[j];
                            if (!newTarget.childNodes.length) {
                                el.possibleMoves.push(newTarget)
                                el.fight = true;
                                fighting_checkers += 1;
                                street_of_rage_checkers = true;
                            }    
                        
                    }
                }    
            }                 
        }
        i = rememberI;
        j = rememberJ;
        if (!el.damka && i < 7 && j < 7) {
            i+=1;
            j+=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget) {
                if (newTarget.childNodes.length) {                   
                    if (newTarget.firstChild.color !== el.color && i + 1 <= 7 && j + 1 <= 7) {
                        i+=1;
                        j+=1;
                        let newTarget = chessBoard.rows[i].cells[j];
                            if (!newTarget.childNodes.length) {
                                el.possibleMoves.push(newTarget)
                                el.fight = true;
                                fighting_checkers += 1;
                                street_of_rage_checkers = true;
                            }    
                        
                    }                 
                }    
            }   
        }    

        //////////////////////// fight damka 1 ////////////////////////////
        i = i_for_damka_one;
        j = j_for_damka_one;
        if (el.damka && i < 7 && j > 0) {
            newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color) {
                    i+=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.firstChild) {
                        el.possibleMoves.push(newTarget);
                        fighting_checkers += 1;
                        street_of_rage_checkers = true;
                        el.fight = true;
                    } 
                }       
                while (i < 7 && j > 0 && !newTarget.firstChild) {
                    i+=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.childNodes.length) {
                        el.possibleMoves.push(newTarget)
                        fighting_checkers += 1;
                    }  
                }                 
            }  
        }             
//\\\\\\\\\\\\\\\\\\\\\\ fight damka 1 \\\\\\\\\\\\\\\\\\\\\\\\\\\\  

//////////////////////// fight damka 2 ////////////////////////////
i = i_for_damka_two;
j = j_for_damka_two;
if (el.damka  && i < 7 && j < 7) {
    newTarget = chessBoard.rows[i].cells[j];
    if (newTarget.firstChild) {
        if (newTarget.firstChild.color) {
            i+=1;
            j+=1;
            newTarget = chessBoard.rows[i].cells[j];
            if (!newTarget.firstChild) {
                el.possibleMoves.push(newTarget);
                fighting_checkers += 1;
                street_of_rage_checkers = true;
                el.fight = true;
            } 
        }       
        while (i < 7 && j < 7 && !newTarget.firstChild) {
            i+=1;
            j+=1;
            newTarget = chessBoard.rows[i].cells[j];
            if (!newTarget.childNodes.length) {
                el.possibleMoves.push(newTarget)
                fighting_checkers += 1;
            }                        
        }                
    }
}
//\\\\\\\\\\\\\\\\\\\\\\ fight damka 2 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

//////////////////////// fight damka 3 \\\\\\\\\\\\\\\\\\\\\\\\\\\\

        i = i_for_damka_three;
        j = j_for_damka_three;
        if (el.damka && i > 0 && j > 0) {
            newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color) {
                    i-=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.firstChild) {
                        el.possibleMoves.push(newTarget);
                        fighting_checkers += 1;
                        street_of_rage_checkers = true;
                        el.fight = true;
                    }    
                } 
                while (i > 0 && j > 0 && !newTarget.firstChild) {
                    i-=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.childNodes.length) {
                        el.possibleMoves.push(newTarget)
                        fighting_checkers += 1;
                    }  
                }                        
            } 
        }

//\\\\\\\\\\\\\\\\\\\\\\\\\ fight damka 3 black\\\\\\\\\\\\\\\\\\\\\\\\\\

/////////////////////////// fight damka 4 black\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        i = i_for_damka_four;
        j = j_for_damka_four;
        if (el.damka && i > 0 && j < 7) {
        newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color) {
                    i-=1;
                    j+=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.firstChild) {
                        el.possibleMoves.push(newTarget);
                        fighting_checkers += 1;
                        street_of_rage_checkers = true;
                        el.fight = true;
                    }            
                }      
                while (i > 0 && j < 7 && !newTarget.firstChild) {
                    i-=1;
                    j+=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (!newTarget.childNodes.length) {
                        el.possibleMoves.push(newTarget)
                        fighting_checkers += 1;
                    }  
                }                    
            }
        }

//\\\\\\\\\\\\\\\\\\\\\\\\\ fight damka 4 black \\\\\\\\\\\\\\\\\\\\\\\\\\

        i = rememberI;
        j = rememberJ;
        if (!el.damka && i > 1 && j > 1) {
            i-=1;
            j-=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color !== el.color) {
                    i-=1;
                    j-=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (newTarget) {
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                            el.fight = true;
                            street_of_rage_checkers = true;
                            fighting_checkers += 1;
                        }    
                    }
                }    
            }           
        }
        i = rememberI;
        j = rememberJ;
        if (!el.damka && i > 1 && j < 6) {
            i-=1;
            j+=1;
            let newTarget = chessBoard.rows[i].cells[j];
            if (newTarget.firstChild) {
                if (newTarget.firstChild.color !== el.color) {
                    i-=1;
                    j+=1;
                    newTarget = chessBoard.rows[i].cells[j];
                    if (newTarget) {
                        if (!newTarget.childNodes.length) {
                            el.possibleMoves.push(newTarget)
                            el.fight = true;
                            street_of_rage_checkers = true;
                            fighting_checkers += 1;
                        }    
                    }
                }    
            }           
        }
        if (fighting_checkers > 0) {
            el.possibleMoves = el.possibleMoves.slice(-fighting_checkers);
        }

        let choosenDamka = el;
        if (el.damka && el.fight) {
            el.possibleMoves.forEach(el => {
                el.fight_check(choosenDamka, true)
            })
            if (damka_fight > 1) {
                el.possibleMoves.forEach(el => {
                    if (el.fighting_cell === 1) {
                        this.possibleMoves.remove(el)
                    }
                })
            }
            damka_fight = 0;
            side_one = 1;
            side_two = 1;
            side_three = 1;
            side_four = 1;
        }
    }
}) 

Array.prototype.remove = function(value) {
    let i = this.indexOf(value);
    if (i != -1) {
        return this.splice(i,1);
    }
}

function kick() {
    if (previousCell.parentNode.rowIndex > choosenFigure.parentNode.parentNode.rowIndex && previousCell.cellIndex < choosenFigure.parentNode.cellIndex) {
        let i = choosenFigure.parentNode.parentNode.rowIndex;
        let j = choosenFigure.parentNode.cellIndex;
        i += 1;
        j -= 1;
        let newTarget = chessBoard.rows[i].cells[j];
        while (!newTarget.firstChild) {
            i += 1;
            j -= 1; 
            newTarget = chessBoard.rows[i].cells[j];
        }
        if (color) {
            black_checkers.remove(newTarget.firstChild)
        }
        else {
            white_checkers.remove(newTarget.firstChild)
        }
        newTarget.removeChild(newTarget.firstChild)
        
    }
    else if (previousCell.parentNode.rowIndex < choosenFigure.parentNode.parentNode.rowIndex && previousCell.cellIndex < choosenFigure.parentNode.cellIndex) {
        let i = choosenFigure.parentNode.parentNode.rowIndex;
        let j = choosenFigure.parentNode.cellIndex;
        i -= 1;
        j -= 1;
        let newTarget = chessBoard.rows[i].cells[j];
        while (!newTarget.firstChild) {
            i -= 1;
            j -= 1;
            newTarget = chessBoard.rows[i].cells[j]; 
        }
        if (color) {
            black_checkers.remove(newTarget.firstChild)
        }
        else {
            white_checkers.remove(newTarget.firstChild)
        }
        newTarget.removeChild(newTarget.firstChild)
        
    }
    else if (previousCell.parentNode.rowIndex < choosenFigure.parentNode.parentNode.rowIndex && previousCell.cellIndex > choosenFigure.parentNode.cellIndex) {
        let i = choosenFigure.parentNode.parentNode.rowIndex;
        let j = choosenFigure.parentNode.cellIndex;
        i -= 1;
        j += 1;
        let newTarget = chessBoard.rows[i].cells[j];
        while (!newTarget.firstChild) {
            i -= 1;
            j += 1; 
            newTarget = chessBoard.rows[i].cells[j];
        }
        if (color) {
            black_checkers.remove(newTarget.firstChild)
        }
        else {
            white_checkers.remove(newTarget.firstChild)
        }
        newTarget.removeChild(newTarget.firstChild)
        
    }
    else if (previousCell.parentNode.rowIndex > choosenFigure.parentNode.parentNode.rowIndex && previousCell.cellIndex > choosenFigure.parentNode.cellIndex) {
        let i = choosenFigure.parentNode.parentNode.rowIndex;
        let j = choosenFigure.parentNode.cellIndex;
        i += 1;
        j += 1;
        let newTarget = chessBoard.rows[i].cells[j];
        while (!newTarget.firstChild) {
            i += 1;
            j += 1; 
            newTarget = chessBoard.rows[i].cells[j];
        }
        if (color) {
            black_checkers.remove(newTarget.firstChild)
        }
        else {
            white_checkers.remove(newTarget.firstChild)
        }
        newTarget.removeChild(newTarget.firstChild)
        
    }
}

function lighten() {
    Array.from(cells).forEach(el => {
  
        el.classList.remove("background");
    });
    
    if (choosenFigure.tagName === 'DIV') {
        choosenFigure.parentNode.classList.add("background");
    }
    
}   

function lightenOff() {
    Array.from(cells).forEach(el => {
  
        el.classList.remove("background");
    });
}

let fightFigure = false;

document.getElementById("chessboard").addEventListener('click', () => {
    let cell = event.target;
    if (cell.firstChild) {
        cell = cell.firstChild;
    }
///////////////////////MOVES////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    if (color) {
        if (cell.tagName.toLowerCase() === 'td' && choosenFigure) {
            if (choosenFigure.tagName.toLowerCase() !== 'td') {
                if (choosenFigure.possibleMoves.indexOf(cell) >= 0) {
                    if (!choosenFigure.fight && !choosenFigure.oneStep) {
                        cell.appendChild(choosenFigure);
                        lighten();
                        white_checkers.forEach(el => {
                            el.possibleMoves = [];
                        })  
                        white_checkers.forEach(el => {
                            el.fight = false;
                        })  
                        black_checkers.forEach(el => {
                            el.steps();
                        }) 
                        if (street_of_rage_checkers) {
                            black_checkers.forEach(el => {
                                if (!el.fight) {
                                    el.possibleMoves = [];
                                }
                            })                          
                        }
                        if (choosenFigure.parentNode.parentNode.rowIndex === 0) {
                            choosenFigure.damka = true;
                            choosenFigure.style.boxShadow = "0 0 0 2px #000, 0 0 0 6px red, 0 0 0 8px #000";
                        }
                        street_of_rage_checkers = false;
                        setTimeout(turn, 500, color); 
                        color = !color;
                    }                
                    if (choosenFigure.fight) {
                        cell.appendChild(choosenFigure);
                        lighten();
                        kick();
                        fightFigure = true;
                        choosenFigure.oneStep = true;
                        white_checkers.forEach(el => {
                            el.possibleMoves = [];
                        })  
                        white_checkers.forEach(el => {
                            el.fight = false;
                        })       
                        if (choosenFigure.parentNode.parentNode.rowIndex === 0) {
                            choosenFigure.damka = true;
                            choosenFigure.style.boxShadow = "0 0 0 2px #000, 0 0 0 6px red, 0 0 0 8px #000";
                        }                   
                        choosenFigure.steps();
                        street_of_rage_checkers = false;
                        if (!choosenFigure.fight) {
                            black_checkers.forEach(el => {
                                el.steps();
                            }) 
                            if (street_of_rage_checkers) {
                                black_checkers.forEach(el => {
                                    if (!el.fight) {
                                        el.possibleMoves = [];
                                    }
                                })
                            }
                            fightFigure = false;
                            street_of_rage_checkers = false;
                            choosenFigure.oneStep = false;
                            if (!black_checkers.length) {
                                queue.innerHTML = "VICTORY!";
                                tds.forEach(el => {
                                    el.classList.remove("fight-figures");
                                    el.classList.remove("lit-steps");
                                    el.classList.remove("background");
                                    white_checkers.forEach(el => {
                                        el.possibleMoves = [];
                                    })
                                })
                                return;
                            }
                            setTimeout(turn, 500, color); 
                            color = !color;  
                        }
                    }
                }
                
            }                     
        }
    }
    else {
        if (cell.tagName.toLowerCase() === 'td' && choosenFigure) {
            if (choosenFigure.tagName.toLowerCase() !== 'td') {
                if (choosenFigure.possibleMoves.indexOf(cell) >= 0) {
                    if (!choosenFigure.fight && !choosenFigure.oneStep) {
                        cell.appendChild(choosenFigure);
                        lighten();
                        black_checkers.forEach(el => {
                            el.possibleMoves = [];
                        })  
                        black_checkers.forEach(el => {
                            el.fight = false;
                        }) 
                        white_checkers.forEach(el => {
                            el.steps();
                        })
                        if (street_of_rage_checkers) {
                            white_checkers.forEach(el => {
                                if (!el.fight) {
                                    el.possibleMoves = [];
                                }
                            })
                        }
                        street_of_rage_checkers = false;
                        if (choosenFigure.parentNode.parentNode.rowIndex === 7) {
                            choosenFigure.damka = true;
                            choosenFigure.style.boxShadow = "0 0 0 2px #000, 0 0 0 6px red, 0 0 0 8px #000";
                        }
                        setTimeout(turn, 500, color); 
                        color = !color;
                    }    
                    if (choosenFigure.fight) {
                        cell.appendChild(choosenFigure);
                        lighten();
                        kick();
                        fightFigure = true;
                        choosenFigure.oneStep = true;
                        black_checkers.forEach(el => {
                            el.possibleMoves = [];
                        })  
                        black_checkers.forEach(el => {
                            el.fight = false;
                        })  
                        if (choosenFigure.parentNode.parentNode.rowIndex === 7) {
                            choosenFigure.damka = true;
                            choosenFigure.style.boxShadow = "0 0 0 2px #000, 0 0 0 6px red, 0 0 0 8px #000";
                        }
                        choosenFigure.steps();
                        street_of_rage_checkers = false;
                        if (!choosenFigure.fight) {
                            white_checkers.forEach(el => {
                                el.steps();
                            })
                            if (street_of_rage_checkers) {
                                white_checkers.forEach(el => {
                                    if (!el.fight) {
                                        el.possibleMoves = [];
                                    }
                                })
                            }
                            fightFigure = false;
                            street_of_rage_checkers = false;
                            choosenFigure.oneStep = false;
                            if (!white_checkers.length) {
                                queue.innerHTML = "VICTORY!";
                                tds.forEach(el => {
                                    el.classList.remove("fight-figures");
                                    el.classList.remove("lit-steps");
                                    el.classList.remove("background");
                                    black_checkers.forEach(el => {
                                        el.possibleMoves = [];
                                    })
                                })
                                return;
                            }
                            setTimeout(turn, 500, color); 
                            color = !color;  
                        }
                    }
                }                
            }                     
        }
    }    
        
        while (firstStep === 0) {
            white_checkers.forEach(el => {
                el.steps();
            })
            firstStep = 1;
        }
        
        tds.forEach(el => {
            el.classList.remove("fight-figures");
        })
        tds.forEach(el => {
            if (el.firstChild && el.firstChild.fight) {               
                    el.classList.add("fight-figures");
            }
            else {
                el.classList.remove("lit-steps")
            }
            
        })

        choosenFigure = cell;

        previousCell = cell.parentNode; 

        if (choosenFigure.tagName === 'DIV') {
            if (choosenFigure.color !== color) {
                choosenFigure = null;
                lightenOff()
            }
        }
        if (choosenFigure !== null) {
            if (choosenFigure.firstChild && fightFigure) {
                choosenFigure = choosenFigure.firstChild;
                previousCell = choosenFigure.parentNode;
            }

            if (choosenFigure.tagName === 'DIV') {
                if (choosenFigure.fight) {                                           
                    choosenFigure.parentNode.classList.remove("fight-figures");
                }
                choosenFigure.possibleMoves.forEach(el => {
                    el.classList.add("lit-steps");
                }) 
            }
            if (choosenFigure.tagName === 'DIV') {
                lighten()
            }          
            else {
                lightenOff()
            }  
        }        
})