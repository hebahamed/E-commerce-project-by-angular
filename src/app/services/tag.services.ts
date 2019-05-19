import { Tag } from '../models/tag';

export class TagServices {

    tags: Tag[];

    constructor() {
        this.tags = [{ id: 1, name: "tag1" },
        { id: 2, name: "tag2" },
        { id: 3, name: "tag3" }]
    }

    getAll()
    {
        return this.tags.slice();
    }
}