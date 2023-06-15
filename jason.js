
class RailwayForm{
    constructor(givename, trainno, address){
        console.log("CONSTROCUTER CALLED.."+ givename +" "+trainno)
        this.name = givename
        this.trainno = trainno
        this.address = address
    }
    preview(){
        alert(this.name+ ":your name is submited for train no "+ this.trainno + " and your address is " + this.address)
    }
    submit(){
        alert(this.name+ ":your name is submited for train no "+ this.trainno)
    }
    cancel(){
        alert(this.name + ":your name is canceld for this trainno "+this.trainno)
    }
}

let aliyanForm = new RailwayForm("aliyan",11338899,"burumbun altit hunza xyz")

aliyanForm.preview()
aliyanForm.submit()
aliyanForm.cancel()