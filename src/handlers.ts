import { http, HttpResponse } from 'msw';
import { getUserById } from './dao';

export const handlers = [
    http.get('/user/:id', ({ request }) => {
        const url = new URL(request.url);
        const id = url.pathname.split('/').pop();
        if (!id) {
            return HttpResponse.json({ message: "user id is required" }, { status: 400 });
        }
        const user = getUserById(id);
        if (user) {
            return HttpResponse.json(user);
        }
        return HttpResponse.json({ message: "user not found"}, { status: 404 });
    })
]