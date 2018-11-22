export class Product {
    public name: string;
    public description: string;
    public imagePath: string;
    constructor(name: string, descr: string, path: string) {
        this.name = name;
        this.description = descr;
        this.imagePath = path;
    }
}