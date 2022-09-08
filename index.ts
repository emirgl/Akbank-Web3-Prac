abstract class Vehicle{
    
    hgsNo : string;
    ownerName : string;
    balance: number;
    vehicleType: number;
    transitionInfos: Array<string | number> = [];
  
    constructor(hgsNo: string, ownerName: string , balance: number , vehicleType:number){
        this.hgsNo = hgsNo;
        this.ownerName = ownerName;
        this.balance = balance;
        this.vehicleType = vehicleType;
    }
  
    pay(ticketPrice : number){
        this.transitionInfos.push({ hgsNo: this.hgsNo, ownerName : this.ownerName , vehicleType: this.vehicleType });
        this.balance =  this.balance - ticketPrice;
      }
}

class Automobile extends Vehicle{

    constructor(hgsNo:string ,ownerName: string , balance: number ,readonly vehicleType : number = 1){
        super(hgsNo, ownerName, balance , vehicleType );
    }
}

class Minibus extends Vehicle{

    constructor(hgsNo:string ,ownerName: string , balance: number ,readonly vehicleType : number = 2){
    super(hgsNo, ownerName, balance , vehicleType );
  }
}

class Bus extends Vehicle{

    constructor(hgsNo:string ,ownerName: string , balance: number ,readonly vehicleType : number = 3){
    super(hgsNo, ownerName, balance , vehicleType );
  }
}

class HgsScanner {   
  
  automobilePrice : number;
  minibusPrice : number;
  busPrice : number;
  records: Array<string | number > = [];
  
     constructor() {   
       this.automobilePrice = 18;
       this.minibusPrice = 40;
       this.busPrice = 50;
       this.date =  new Date();
     }   

     payment(driver: Vehicle){
         let date = new Date();
         if(driver.vehicleType==1){
             driver.pay(this.automobilePrice);
             this.records.push( {date:date, earnedMoney : this.automobilePrice, infos : driver.transitionInfos });   
         }
         else if(driver.vehicleType==2){
             driver.pay(this.minibusPrice);
             this.records.push( {date:date, earnedMoney : this.minibusPrice, infos : driver.transitionInfos });   
         }
         else if(driver.vehicleType==3){
             driver.pay(this.busPrice);
             this.records.push( {date:date, earnedMoney : this.busPrice, infos : driver.transitionInfos });   
         }
    }

    takeRecords(){
         return  this.records;
    }
}   

class Managment extends  HgsScanner {   
  
  takeTotal(scanner : HgsScanner){
    
    var total=0;
    var arr = [];
    arr =  scanner.takeRecords();
    for (let index = 0; index < arr.length; index++) {
      console.log(arr[index]);
      total +=  arr[index].earnedMoney;
    }
    console.log("Total earning:", total);
  }
}  

let driver1 = new Automobile("34XXX34","Emir",400);
let driver2 = new Minibus("06YYY06","Jonah",1000);
let driver3 = new Bus("16ZZZ16","No One",600);
let hgs = new HgsScanner();
let manager = new Managment();

hgs.payment(driver1);
hgs.payment(driver2);
hgs.payment(driver3);


manager.takeTotal(hgs);
