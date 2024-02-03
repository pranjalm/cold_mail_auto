function sendEmail() {
  var body_mail = DocumentApp.openById('1eo9Dmf0AuntmvGbqVpn8YQf4e_wfCrPkMA5sSpDNo6I').getBody().getText(); 
  var emailData = SpreadsheetApp.getActive().getSheetByName("mailer_list").getDataRange().getValues();
  var emailSubject = "Regarding conversation related to postdoctoral research | IIT Delhi |";
  var file = DriveApp.getFilesByName('pranjal_mandhaniya_resume.pdf');
  var atchmnt = file.next().getBlob();
  
  var headerRow = emailData.shift(); //Remove the header row 
  emailData.forEach(function (row) {
    var email = row[0];
    var heading = "Respected Dr. " + row[1] +','; // getting the surname    
    var emailBody = heading + '\n\n' +  body_mail;
    GmailApp.sendEmail(email , emailSubject, emailBody, {attachments: atchmnt});
  });
}
