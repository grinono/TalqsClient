// Slingshot.fileRestrictions("myFileUploads", {
//   allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
//   maxSize: 10 * 1024 * 1024 // 10 MB (use null for unlimited).
// });
//
// Meteor.methods({
//     'fileUpload': function(file){
//        //  send file to S3
//        console.log(file);
//     },
// })
//
//
// // S3.config = {
// //     key: 'AKIAID3R2QJG6REX5QZQ',
// //     secret: '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',
// //     bucket: 'profilepicturestalqs',
// //     region: 'eu-west-1' // Only needed if not "us-east-1" or "us-standard"
// // };
//
// Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
//   bucket: "profilepicturestalqs",
//   region: "eu-central-1",
//   AWSAccessKeyId: "AKIAID3R2QJG6REX5QZQ",
//   AWSSecretAccessKey: "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",
//
//   authorize: function () {
//   	console.log("uploading")
//     //Deny uploads if user is not logged in.
//     if (!this.userId) {
//       var message = "Please login before posting files";
//       throw new Meteor.Error("Login Required", message);
//     }
//
//     return true;
//   },
//
//   key: function (file) {
//   	console.log(file)
//     //Store file into a directory by the user's username.
//     var user = Meteor.userId()
//     console.log("profile" + "/" + user + "/" + "profilePicture")
//     return "profile" + "/" + user + "/" + "profilePicture";
//   }
// });
//
//
// Meteor.methods({
//     'dataURI': function(value){
//       var currentUserId = Meteor.userId();
//       Meteor.users.upsert({
//            _id: currentUserId
//           }, {
//         $set: {
//           "profile.profilePicture.cropped": value
//         }
//       });
//     },
// })   
