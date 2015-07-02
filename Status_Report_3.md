## Status Report 3 ##

#### What we accomplished this week
 * Set up an email account that receives email from Tufts elists, filters based on the keywords "free food", and sends emails to the server
 * Set up the server to receive emails and parse them (using chrono API)
 * Managed some error cases, e.g. emails with no end date/time, or emails with no date/time at all
 * Changed format of server post response data to match front-end fullcalendar API


#### What we planned to work on
 * Adding a page to subscribe to an elist from the website
 * Adding a post event handler in the server to take in emails and put them in the database
 * Using the SendGrid API to send scheduled emails to all emails in the database


#### Some problems and thoughts
 - We may stick to elists and manually added events for now, since parsing Facebook event data is difficult
 - It took some time to get date formats right in converting user input to JS Date objects and Moment API objects
 - We are still thinking about other possible ways to get more event suggestions
 - The server currently has security vulnerabilities that we have not addressed
