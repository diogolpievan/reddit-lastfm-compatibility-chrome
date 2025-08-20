import { checkLogin } from './login';
import { getCompatibilityScrapping } from './scrapping';
import { saveComparedUser } from './storage';

export function handleMessages(msg, sender, sendResponse) {
    if(msg.action === "checkLogin") {
        checkLogin()
        .then(result => sendResponse({ logged: result}))
        .catch(err   => sendResponse( { error: err.toString() } ));

        return true;
    }

    if(msg.action === "getUserCompatibility") {
        getCompatibilityScrapping()
        .then(html => sendResponse({ html }))
        .catch(err => sendResponse( { error: err.toString() } ));

        return true;
    }

    if(msg.action === "saveComparedUser") {
        saveComparedUser(msg)
        .then(success => sendResponse(success))
        .catch(err    => sendResponse( { error: err.toString() } ));
    }
};
