import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let notes = [
        {"_id":{"$oid":"580f8c9fcf7633a7a9267180"},"title":"title test6","type":"note","createdDate":{"$date":"2016-10-25T16:47:27.479Z"},"updatedDate":{"$date":"2016-10-25T16:47:27.479Z"},"deletedDate":"","completedDate":"","items":[{"content":"content test6","completed":false}]},
        {"_id":{"$oid":"580f8cb8cf7633a7a9267181"},"title":"title test1","type":"note","createdDate":{"$date":"2016-10-25T16:47:52.998Z"},"updatedDate":{"$date":"2016-10-25T16:47:52.998Z"},"deletedDate":{"$date":"2016-10-25T16:47:52.998Z"},"completedDate":{"$date":"2016-10-25T16:47:52.998Z"},"items":[{"content":"content test1","completed":false}]},
        {"_id":{"$oid":"580f8c9fcf7633a7a9267180"},"title":"title test6","type":"note","createdDate":{"$date":"2016-10-25T16:47:27.479Z"},"updatedDate":{"$date":"2016-10-25T16:47:27.479Z"},"deletedDate":"","completedDate":"","items":[{"content":"content test6","completed":false}]},
        {"_id":{"$oid":"580f8cb8cf7633a7a9267181"},"title":"title test1","type":"note","createdDate":{"$date":"2016-10-25T16:47:52.998Z"},"updatedDate":{"$date":"2016-10-25T16:47:52.998Z"},"deletedDate":{"$date":"2016-10-25T16:47:52.998Z"},"completedDate":{"$date":"2016-10-25T16:47:52.998Z"},"items":[{"content":"content test1","completed":false}]},
         {"_id":{"$oid":"580f8c9fcf7633a7a9267180"},"title":"title test6","type":"note","createdDate":{"$date":"2016-10-25T16:47:27.479Z"},"updatedDate":{"$date":"2016-10-25T16:47:27.479Z"},"deletedDate":"","completedDate":"","items":[{"content":"content test6","completed":false}]},
        {"_id":{"$oid":"580f8cb8cf7633a7a9267181"},"title":"title test1","type":"note","createdDate":{"$date":"2016-10-25T16:47:52.998Z"},"updatedDate":{"$date":"2016-10-25T16:47:52.998Z"},"deletedDate":{"$date":"2016-10-25T16:47:52.998Z"},"completedDate":{"$date":"2016-10-25T16:47:52.998Z"},"items":[{"content":"content test1","completed":false}]},
        {"_id":{"$oid":"580f8c9fcf7633a7a9267180"},"title":"title test6","type":"note","createdDate":{"$date":"2016-10-25T16:47:27.479Z"},"updatedDate":{"$date":"2016-10-25T16:47:27.479Z"},"deletedDate":"","completedDate":"","items":[{"content":"content test6","completed":false}]},
        {"_id":{"$oid":"580f8cb8cf7633a7a9267181"},"title":"title test1","type":"note","createdDate":{"$date":"2016-10-25T16:47:52.998Z"},"updatedDate":{"$date":"2016-10-25T16:47:52.998Z"},"deletedDate":{"$date":"2016-10-25T16:47:52.998Z"},"completedDate":{"$date":"2016-10-25T16:47:52.998Z"},"items":[{"content":"content test1","completed":false}]},
         {"_id":{"$oid":"580f8c9fcf7633a7a9267180"},"title":"title test6","type":"note","createdDate":{"$date":"2016-10-25T16:47:27.479Z"},"updatedDate":{"$date":"2016-10-25T16:47:27.479Z"},"deletedDate":"","completedDate":"","items":[{"content":"content test6","completed":false}]},
        {"_id":{"$oid":"580f8cb8cf7633a7a9267181"},"title":"title test1","type":"note","createdDate":{"$date":"2016-10-25T16:47:52.998Z"},"updatedDate":{"$date":"2016-10-25T16:47:52.998Z"},"deletedDate":{"$date":"2016-10-25T16:47:52.998Z"},"completedDate":{"$date":"2016-10-25T16:47:52.998Z"},"items":[{"content":"content test1","completed":false}]},
        {"_id":{"$oid":"580f8c9fcf7633a7a9267180"},"title":"title test6","type":"note","createdDate":{"$date":"2016-10-25T16:47:27.479Z"},"updatedDate":{"$date":"2016-10-25T16:47:27.479Z"},"deletedDate":"","completedDate":"","items":[{"content":"content test6","completed":false}]},
        {"_id":{"$oid":"580f8cb8cf7633a7a9267181"},"title":"title test1","type":"note","createdDate":{"$date":"2016-10-25T16:47:52.998Z"},"updatedDate":{"$date":"2016-10-25T16:47:52.998Z"},"deletedDate":{"$date":"2016-10-25T16:47:52.998Z"},"completedDate":{"$date":"2016-10-25T16:47:52.998Z"},"items":[{"content":"content test1","completed":false}]}
    ];
    return {notes};
  }
}
