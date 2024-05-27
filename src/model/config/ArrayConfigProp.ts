import {ConfigProp} from "./ConfigProp";

export class ArrayConfigProp extends ConfigProp {
    val: object[] | null;
    dval: object[] | null;

    constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number, val: object[] | null, dval: object[] | null) {
        super(id, name, nullable, created , priority);
        this.val = val;
        this.dval = dval;
    }

    public hasValue() : boolean {
        return this.val != null;
    }

}