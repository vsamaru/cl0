//import { IncomingMessage, ServerResponse } from 'http';
//import { parseRequest } from './_lib/parser';


export default async function handler(req, res) {
    try {
      //  const parsedReq = parseRequest(req);
      req = req.body
        console.log(req)
          res.status(200).json({
    body: req
  })
        // const html = getHtml(parsedReq);
        // if (isHtmlDebug) {
        //     res.setHeader('Content-Type', 'text/html');
        //     res.end(html);
        //     return;
        // }
        // const { fileType } = parsedReq;
      //  const file = await getScreenshot(html, fileType, isDev);
     //    res.statusCode = 200;
     // res.setHeader('Content-Type', `application/json`);
     //  //  res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
     //    res.end('parsedReq');
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
        console.error(e);
    }
}
