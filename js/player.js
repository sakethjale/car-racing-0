class Player{
    constructor(){

    }

    getCount(){
        var db2=database.ref('playerCount');
        db2.on("value",function (data){
            playerCount=data.val();
        })
    }

    updateCount(count)
    {
        database.ref('/').update({
            'playerCount':count
        })
    }
    
    update(name)
    {
        var plIndex="player"+playerCount;
        database.ref(plIndex).set({
            'name':name
        })
    }    
}