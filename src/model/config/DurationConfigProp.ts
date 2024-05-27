import {ConfigProp} from "./ConfigProp";
import {Duration} from "iso8601-duration";

export class DurationConfigProp extends ConfigProp {
    val: Duration | null;
    dval: Duration | null;

    constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number, val: Duration | null, dval: Duration | null) {
        super(id, name, nullable, created , priority);
        this.val = val;
        this.dval = dval;
    }

    public hasValue() : boolean {
        return this.val != null;
    }

}