"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ChannelListingsComponent = (function () {
    function ChannelListingsComponent() {
    }
    ChannelListingsComponent = __decorate([
        core_1.Component({
            template: require("./channel-listings.component.html"),
            styles: [require("./channel-listings.component.scss")],
            selector: "channel-listings",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [])
    ], ChannelListingsComponent);
    return ChannelListingsComponent;
}());
exports.ChannelListingsComponent = ChannelListingsComponent;
var ChannelListingsModule = (function () {
    function ChannelListingsModule() {
    }
    ChannelListingsModule = __decorate([
        core_1.NgModule({
            declarations: [ChannelListingsComponent],
            exports: [ChannelListingsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ChannelListingsModule);
    return ChannelListingsModule;
}());
exports.ChannelListingsModule = ChannelListingsModule;
//# sourceMappingURL=channel-listings.component.js.map