const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table border="1"><tr><th>Location</th><th>Hours</th><th>Amount</th></tr> \n')
      res.write('<tr><td>Udaipur- India</td><td>48 hours</td><td>15000 INR</td></tr> \n')
      res.write('<tr><td>Kerala- India</td><td>72 hours</td><td>20000 INR</td></tr> \n')
      res.write('<tr><td>Hyderabad- India</td><td>48 hours</td><td>10000 INR</td></tr> \n')
      res.write('<tr><td>Vizag- India</td><td>24 Hours</td><td>10000 INR</td></tr>')
      res.write('</table>')    
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})