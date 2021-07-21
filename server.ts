import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import axios from 'axios';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/redesign/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );
  server.use(express.json());
  server.use(express.urlencoded({ extended: false }));
  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  server.post('/api/briefs', (req, res) => {
    let body = '';
    req.on('data', (data) => {
      body += data;
    });
    req.on('end', () => {
      axios
        .post(
          'https://api.telegram.org/bot1730980288:AAGky2y9SAWak9-ygjfEKNnA5eroJQYIz_Q/sendMessage?chat_id=-1001563698953&parse_mode=html&text=' +
            encodeURIComponent(body)
        )
        .then(() => {
          res.status(200);
          res.end();
        })
        .catch((error) => {
          console.error(
            'An error occured while sendin data to telegram bot:',
            error
          );
          res.end();
        });
    });
  });
  server.post('/api/post', (req, res) => {
    const data = JSON.stringify(req.body);
    const path = encodeURIComponent(data);
    axios
      .post(
        'https://api.telegram.org/bot1730980288:AAGky2y9SAWak9-ygjfEKNnA5eroJQYIz_Q/sendMessage?chat_id=-1001244564444&parse_mode=html&text=' +
          path
      )
      .then(() => {
        res.status(200);
        res.end();
      })
      .catch((error) => {
        console.error(
          'An error occured while sendin data to telegram bot:',
          error
        );
        res.end();
      });
  });
  // Serve static files from /browser
  server.get(
    '*.*',

    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.set('Chache-Control', 'public, max-age=600, s-max-age=1200');
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
