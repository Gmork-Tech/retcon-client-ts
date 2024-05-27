import {ConfigProp} from "../config/ConfigProp";

export abstract class Deployment {
    private id : bigint;
    private name : string;
    private priority : number = 100;
    private props : Set<ConfigProp>;
}