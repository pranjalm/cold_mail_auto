  function sendEmail() {
  var body_mail = DocumentApp.openById('1f8J9KUdaA6-O3o6qy7bCPk1bnWJGH16FBGeDdGIO3wI').getBody().getText(); 
  var emailData = SpreadsheetApp.getActive().getSheetByName("mailer_list").getDataRange().getValues();
  var emailSubject = "Regarding seeking postdoctoral research | IIT Roorkee |";
  var file = DriveApp.getFilesByName('My_resume_for_mail.pdf');
  var attachment_mail = file.next().getBlob(); //get the file in raw form
  
  var headerRow = emailData.shift(); //Remove the header row 
  emailData.forEach(function (row) {
    var email = row[0];
    var heading = "Respected Dr. " + row[2]+ " "+ row[1] +','; // getting the surname    
    var emailBody = heading + '\n\n' +  body_mail;
    var alias=GmailApp.getAliases();
    GmailApp.sendEmail(email , emailSubject, emailBody, {attachments: attachment_mail, from: alias[0]});
  });
}
