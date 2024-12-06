import { handlers } from './handlers'
import { createServer } from '@mswjs/http-middleware';
import { http, HttpResponse } from 'msw';

// const server = createServer(...handlers);
const server = createServer(
    http.get('/', ({ request }) => {
        return HttpResponse.json({ message: "user id is required" }, { status: 400 });
    })
)
server.listen(8080);