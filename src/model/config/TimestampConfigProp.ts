import {ConfigProp} from "./ConfigProp";

export class TimestampConfigProp extends ConfigProp {
    val: Date | null;
    dval: Date | null;

    constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number, val: Date | null, dval: Date | null) {
        super(id, name, nullable, created , priority);
        this.val = val;
        this.dval = dval;
    }

    public hasValue() : boolean {
        return this.val != null;
    }

}