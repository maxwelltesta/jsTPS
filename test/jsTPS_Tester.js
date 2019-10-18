class jsTPS_Tester {

    constructor() {
        this.tps = new jsTPS();
        this.num = new Num();
        document.getElementById("numBox").value = Number(0);
        document.getElementById("data").innerHTML = this.tps.toString();
    }
    processAdd() {
        let value = document.getElementById("dropdown").value;
        value = Number(value);
        let transaction = new AddToNum_Transaction(this.num, value);
        this.tps.addTransaction(transaction);
        this.processUpdateHTML();
    }
    processUndo() {
        this.tps.undoTransaction();
        this.processUpdateHTML();
    }
    processRedo() {
        this.tps.doTransaction();
        this.processUpdateHTML();
    }
    processClear() {
        this.tps.clearAllTransactions();
        this.processUpdateHTML();
    }
    processFullClear() {
        this.tps.clearAllTransactions();
        this.num.setNum(0);
        this.processUpdateHTML();
    }
    processUpdateHTML() {
        let data = document.getElementById("data");
        data.innerHTML = this.tps.toString();
        
        let show = document.getElementById("numBox")
        show.value = this.num.getNum();
    }
}