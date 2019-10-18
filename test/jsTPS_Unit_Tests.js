class jsTPS_Unit_Tests {
    constructor() {
        this.tps = new jsTPS();
        this.num = new Num();
    }

    runTests() {
        let html = document.getElementById("unit_tests");

        html.innerHTML += "TEST ADD<br>";
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 5 TRANSACTION<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(5)));
        html.innerHTML += "getNum() = 5 " + (this.num.getNum() === 5 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 1 " + (this.tps.getSize() === 1 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 1 " + (this.tps.getUndoSize() === 1 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 15 TRANSACTION<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(10)));
        html.innerHTML += "getNum() = 15 " + (this.num.getNum() === 15 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 2 " + (this.tps.getSize() === 2 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 2 " + (this.tps.getUndoSize() === 2 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 20 TRANSACTION<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(20)));
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "----------------------------------------------------------------------------";

        html.innerHTML += "<br><br>TEST AND<br>";
        this.tps = new jsTPS();
        this.num = new Num();
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>AND 4 TRANSACTION<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(12)));
        this.tps.addTransaction(new AndMask_Transaction(this.num, this.num.getNum(), Number(4)));
        html.innerHTML += "getNum() = 4 " + (this.num.getNum() === 4 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 2 " + (this.tps.getSize() === 2 ? true : false) + "<br>";
        html.innerHTML += "<br>UNDO TRANSACTION<br><br>";
        this.tps.undoTransaction();
        html.innerHTML += "getNum() = 12 " + (this.num.getNum() === 12 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 2 " + (this.tps.getSize() === 2 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 1 " + (this.tps.getRedoSize() === 1 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 1 " + (this.tps.getUndoSize() === 1 ? true : false) + "<br>";

        html.innerHTML += "----------------------------------------------------------------------------";


        html.innerHTML += "<br><br>TEST OR<br>";
        this.tps = new jsTPS();
        this.num = new Num();
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>OR 4 TRANSACTION<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(12)));
        this.tps.addTransaction(new OrMask_Transaction(this.num, this.num.getNum(), Number(4)));
        html.innerHTML += "getNum() = 12 " + (this.num.getNum() === 12 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 2 " + (this.tps.getSize() === 2 ? true : false) + "<br>";
        html.innerHTML += "<br>UNDO TRANSACTION<br><br>";
        this.tps.undoTransaction();
        html.innerHTML += "getNum() = 12 " + (this.num.getNum() === 12 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 2 " + (this.tps.getSize() === 2 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 1 " + (this.tps.getRedoSize() === 1 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 1 " + (this.tps.getUndoSize() === 1 ? true : false) + "<br>";

        html.innerHTML += "----------------------------------------------------------------------------";

        html.innerHTML += "<br><br>TEST UNDO<br>";
        this.tps = new jsTPS();
        this.num = new Num();
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToUndo = false: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 3 TRANSACTIONS<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(5)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(10)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(20)));
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO A TRANSACTION<br><br>";
        this.tps.undoTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = true: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 15 " + (this.num.getNum() === 15 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 1 " + (this.tps.getRedoSize() === 1 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 2 " + (this.tps.getUndoSize() === 2 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO ANOTHER<br><br>";
        this.tps.undoTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = true: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 5 " + (this.num.getNum() === 5 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 2 " + (this.tps.getRedoSize() === 2 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 1 " + (this.tps.getUndoSize() === 1 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO ANOTHER<br><br>";
        this.tps.undoTransaction();
        html.innerHTML += "HasTransactionToUndo = false: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = true: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 3 " + (this.tps.getRedoSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 0 " + (this.tps.getUndoSize() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>WE HAVE NO MORE TO UNDO SO THIS SHOULD DO NOTHING<br><br>";
        this.tps.undoTransaction();
        html.innerHTML += "HasTransactionToUndo = false: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = true: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 3 " + (this.tps.getRedoSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 0 " + (this.tps.getUndoSize() === 0 ? true : false) + "<br>";

        html.innerHTML += "----------------------------------------------------------------------------";

        html.innerHTML += "<br><br>TEST REDO<br>";
        this.tps = new jsTPS();
        this.num = new Num();
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 3 TRANSACTIONS<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(5)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(10)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(20)));
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO A TRANSACTION AND THEN REDO IT<br><br>";
        this.tps.undoTransaction();
        this.tps.doTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO 2 TRANSACTIONS AND THEN REDO THEM<br><br>";
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO 3 TRANSACTIONS AND THEN REDO THEM<br><br>";
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>UNDO 3 TRANSACTIONS AND THEN REDO 2 OF THEM<br><br>";
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = true: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 15 " + (this.num.getNum() === 15 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 1 " + (this.tps.getRedoSize() === 1 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 2 " + (this.tps.getUndoSize() === 2 ? true : false) + "<br>";
        
        html.innerHTML += "<br>UNDO ALL THREE TRANSACTIONS AND REDO FOUR, WHICH SHOULD NOT PRODUCE AN ERROR BUT THE LAST REDO SHOULD DO NOTHING<br><br>";
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.undoTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        this.tps.doTransaction();
        html.innerHTML += "HasTransactionToUndo = true: " + (this.tps.hasTransactionToUndo() ? true : false) + "<br>";
        html.innerHTML += "HasTransactionToRedo = false: " + (this.tps.hasTransactionToRedo() ? true : false) + "<br>";
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "----------------------------------------------------------------------------";

        html.innerHTML += "<br><br>TEST CLEAR<br>";
        this.tps = new jsTPS();
        this.num = new Num();
        html.innerHTML += "getNum() = 0 " + (this.num.getNum() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 3 TRANSACTIONS<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(5)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(10)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(20)));
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>CLEAR ALL THE TRANSACTIONS<br><br>";
        this.tps.clearAllTransactions();
        html.innerHTML += "getNum() = 35 " + (this.num.getNum() === 35 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 0 " + (this.tps.getSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 0 " + (this.tps.getUndoSize() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 3 TRANSACTIONS<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(5)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(10)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(20)));
        html.innerHTML += "getNum() = 70 " + (this.num.getNum() === 70 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "<br>CLEAR ALL THE TRANSACTIONS AGAIN<br><br>";
        this.tps.clearAllTransactions();
        html.innerHTML += "getNum() = 70 " + (this.num.getNum() === 70 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 0 " + (this.tps.getSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 0 " + (this.tps.getUndoSize() === 0 ? true : false) + "<br>";

        html.innerHTML += "<br>ADD 3 TRANSACTIONS<br><br>";
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(5)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(10)));
        this.tps.addTransaction(new AddToNum_Transaction(this.num, Number(20)));
        html.innerHTML += "getNum() = 105 " + (this.num.getNum() === 105 ? true : false) + "<br>";
        html.innerHTML += "getSize() = 3 " + (this.tps.getSize() === 3 ? true : false) + "<br>";
        html.innerHTML += "getRedoSize() = 0 " + (this.tps.getRedoSize() === 0 ? true : false) + "<br>";
        html.innerHTML += "getUndoSize() = 3 " + (this.tps.getUndoSize() === 3 ? true : false) + "<br>";

        html.innerHTML += "----------------------------------------------------------------------------";
    }
}