export class Note {
    id: number;
    title:string;
    type:string;
    createdDate:Date;
    updatedDate:Date;
    deletedDate:Date;
    completedDate:Date;    
    items:[
        {
            content:string,
            completed:boolean
        }
    ]
}
