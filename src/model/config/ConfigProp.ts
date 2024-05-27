
export abstract class ConfigProp {
    private id: bigint
    private name: string
    private nullable : boolean = false;
    private created : Date = new Date();
    private priority : number;

    protected constructor(id: bigint, name: string, nullable : boolean, created : Date, priority : number) {
        this.id = id
        this.name = name
        this.nullable = nullable
        this.created  = created;
        this.priority = priority
    }

    public abstract hasValue() : boolean;

}