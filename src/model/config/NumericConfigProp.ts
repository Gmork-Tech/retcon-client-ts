import {ConfigProp} from "./ConfigProp";

export class NumericConfigProp extends ConfigProp {
    val: number | null;
    dval: number | null;

    constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number, val: number | null, dval: number | null) {
        super(id, name, nullable, created , priority);
        this.val = val;
        this.dval = dval;
    }

    public hasValue() : boolean {
        return this.val != null;
    }

}