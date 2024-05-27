import {ConfigProp} from "./ConfigProp";

export class BoolConfigProp extends ConfigProp {
    val: boolean | null;
    dval: boolean | null;

    constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number, val: boolean | null, dval: boolean | null) {
        super(id, name, nullable, created , priority);
        this.val = val;
        this.dval = dval;
    }

    public hasValue() : boolean {
        return this.val != null;
    }

}