export class Tag{
    static readonly ANGULAR = new Tag('Angular ','red');
    static readonly TYPESCRIPT = new Tag('TypeScript ','darkred');
    static readonly JAVA  = new Tag('Java ','orange');
    static readonly JAVASCRIPT = new Tag('JavaScript ','orange');
    static readonly SPRINGBOOT = new Tag('SpringBoot ','green');
    static readonly FLUTTER = new Tag('Flutter ','purple');
    static readonly FIREBASE = new Tag('FireBase ','blue');
    private constructor(private readonly key:string,public readonly color : string){

    }
    toString(){
        return this.key;
    }
}