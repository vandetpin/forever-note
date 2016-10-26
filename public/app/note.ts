export class Note {
    _id: string;
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
