import jsTPS from'./jsTPS/jsTPS.js';
import Num from './src/Num.js';
import AddToNum_Transaction from './src/AddToNum_Transaction.js';

/**
 * This driver demonstrates simple usage of the jTPS API.
 * 
 * @author THE McKilla Gorilla (accept no imposters)
 * @version 2.0
 */
class jsTPS_Tester {
    constructor() {
        tps = new jsTPS();
        num = new Num();
        this.registerEventHandler("add", "click", this["processAdd"]);
        this.registerEventHandler("undo", "click", this["processUndo"]);
        this.registerEventHandler("redo", "click", this["processRedo"]);
        this.registerEventHandler("clear", "click", this["processClear"]);
        this.registerEventHandler("fullclear", "click", this["processFullClear"]);
    }
    processAdd() {
        let value = this.getElementById("dropdown").value;
        let transaction = new AddToNum_Transaction(num, value);
        tps.addTransaction(transaction);
        this.processUpdateHTML();
    }
    processUndo() {
        tps.undoTransaction();
        this.processUpdateHTML();
    }
    processRedo() {
        tps.redoTransaction();
        this.processUpdateHTML();
    }
    processClear() {
        tps.clearAllTransactions();
        this.processUpdateHTML();
    }
    processFullClear() {
        tps.clearAllTransactions();
        num.setNum(0);
        this.processUpdateHTML();
    }
    processUpdateHTML() {
        let data = this.getElementById("data");
        data.innerHTML = this.jsTPS.toString();
    }
    registerEventHandler(id, eventName, callback) {
        // GET THE CONTROL IN THE GUI WITH THE CORRESPONDING id
        let control = document.getElementById(id);

        // AND SETUP THE CALLBACK FOR THE SPECIFIED EVENT TYPE
        control.addEventListener(eventName, callback);
    }
}