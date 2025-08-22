import { checkLogin } from './login.js';
import { getUserCompatibilityScrapping } from './scrapping.js';
import { saveComparedUser } from './storage.js';

export function handleMessages(msg, sender, sendResponse) {
    if(msg.action === "checkLogin") {
        checkLogin()
        .then(result => sendResponse({ logged: result}))
        .catch(err   => sendResponse( { error: err.toString() } ));

        return true;
    }

    if(msg.action === "getUserCompatibilityScrapping") {
        getUserCompatibilityScrapping(msg.username)
        .then(html => sendResponse({ html }))
        .catch(err => sendResponse( { error: err.toString() } ));

        return true;
    }

    if(msg.action === "saveComparedUser") {
        saveComparedUser(msg.comparedUser)
        .then(success => sendResponse(success))
        .catch(err    => sendResponse( { error: err.toString() } ));

        return true;
    }
};
