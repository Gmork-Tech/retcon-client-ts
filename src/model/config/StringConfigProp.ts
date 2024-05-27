import {ConfigProp} from "./ConfigProp";

export class StringConfigProp extends ConfigProp {
    val: string | null;
    dval: string | null;

    constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number, val: string | null, dval: string | null) {
        super(id, name, nullable, created , priority);
        this.val = val;
        this.dval = dval;
    }

    public hasValue() : boolean {
        return this.val != null;
    }

}