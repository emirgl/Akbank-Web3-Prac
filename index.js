var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(hgsNo, ownerName, balance, vehicleType) {
        this.transitionInfos = [];
        this.hgsNo = hgsNo;
        this.ownerName = ownerName;
        this.balance = balance;
        this.vehicleType = vehicleType;
    }
    Vehicle.prototype.pay = function (ticketPrice) {
        this.transitionInfos.push({ hgsNo: this.hgsNo, ownerName: this.ownerName, vehicleType: this.vehicleType });
        this.balance = this.balance - ticketPrice;
    };
    return Vehicle;
}());
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile(hgsNo, ownerName, balance, vehicleType) {
        if (vehicleType === void 0) { vehicleType = 1; }
        var _this = _super.call(this, hgsNo, ownerName, balance, vehicleType) || this;
        _this.vehicleType = vehicleType;
        return _this;
    }
    return Automobile;
}(Vehicle));
var Minibus = /** @class */ (function (_super) {
    __extends(Minibus, _super);
    function Minibus(hgsNo, ownerName, balance, vehicleType) {
        if (vehicleType === void 0) { vehicleType = 2; }
        var _this = _super.call(this, hgsNo, ownerName, balance, vehicleType) || this;
        _this.vehicleType = vehicleType;
        return _this;
    }
    return Minibus;
}(Vehicle));
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(hgsNo, ownerName, balance, vehicleType) {
        if (vehicleType === void 0) { vehicleType = 3; }
        var _this = _super.call(this, hgsNo, ownerName, balance, vehicleType) || this;
        _this.vehicleType = vehicleType;
        return _this;
    }
    return Bus;
}(Vehicle));
var HgsScanner = /** @class */ (function () {
    function HgsScanner() {
        this.records = [];
        this.automobilePrice = 18;
        this.minibusPrice = 40;
        this.busPrice = 50;
        this.date = new Date();
    }
    HgsScanner.prototype.payment = function (driver) {
        var date = new Date();
        if (driver.vehicleType == 1) {
            driver.pay(this.automobilePrice);
            this.records.push({ date: date, earnedMoney: this.automobilePrice, infos: driver.transitionInfos });
        }
        else if (driver.vehicleType == 2) {
            driver.pay(this.minibusPrice);
            this.records.push({ date: date, earnedMoney: this.minibusPrice, infos: driver.transitionInfos });
        }
        else if (driver.vehicleType == 3) {
            driver.pay(this.busPrice);
            this.records.push({ date: date, earnedMoney: this.busPrice, infos: driver.transitionInfos });
        }
    };
    HgsScanner.prototype.takeRecords = function () {
        return this.records;
    };
    return HgsScanner;
}());
var Managment = /** @class */ (function (_super) {
    __extends(Managment, _super);
    function Managment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Managment.prototype.takeTotal = function (scanner) {
        var total = 0;
        var arr = [];
        arr = scanner.takeRecords();
        for (var index = 0; index < arr.length; index++) {
            console.log(arr[index]);
            total += arr[index].earnedMoney;
        }
        console.log("Total earning:", total);
    };
    return Managment;
}(HgsScanner));
var driver1 = new Automobile("34XXX34", "Emir", 400);
var driver2 = new Minibus("06YYY06", "Jonah", 1000);
var driver3 = new Bus("16ZZZ16", "No One", 600);
var hgs = new HgsScanner();
var manager = new Managment();
hgs.payment(driver1);
hgs.payment(driver2);
hgs.payment(driver3);
manager.takeTotal(hgs);
