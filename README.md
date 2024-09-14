Nest JS simple telegram bot

Test task - build Nest JS powered telegram bot for storing user's links in a storage.

Requirements:

[1] Bot should receive a link and it's storing name/alias from the user in a chat, validate a link, store it and respond to user with secret key assosiated with it in the storage.

[2] By request the bot should respond with list of current user's links and their names in the storage (maybe with pagination*).

[3] Bot shiould be able to delete a link with it's name from the storage by user's request.

[4] Bot should respond with a link with it's name by requesting it with previously generaed secret key for it.
*Users can share their keys to others to access those links, so the bot should respond with valid data to any user with assosiated key.
