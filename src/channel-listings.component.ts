/// <reference path="../typings/index.d.ts" />

import { Component, ChangeDetectionStrategy, Input, OnInit, NgModule } from "@angular/core";

@Component({
    template: require("./channel-listings.component.html"),
    styles: [require("./channel-listings.component.scss")],
    selector: "channel-listings",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChannelListingsComponent  { }


@NgModule({
    declarations: [ChannelListingsComponent],
    exports:[ChannelListingsComponent]
})
export class ChannelListingsModule { }
