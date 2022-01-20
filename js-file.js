function computerPlay(){
    let randomize = Math.floor(Math.random() * 100)
    console.log(randomize);
    switch (true){
        
        case (randomize < 33):
            console.log('rock');
            break;

        case (randomize >= 33 && randomize < 67):
            console.log('paper');
            return;

        case (randomize >= 67):
            console.log('scissors');
            return;
    }
}

computerPlay();