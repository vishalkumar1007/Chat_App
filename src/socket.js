import { io } from 'socket.io-client';

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://192.168.117.196:8081';
// const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://192.168.117.196:8081';

export const socket = io(URL);
// export const socket = io(URL , {
//     autoConnect:false
// });

