#!/bin/env python3
from server.main import app
from flask_session import Session

import os

if __name__ == "__main__":

	app.config["SESSION_TYPE"] = "filesystem"
	app.config["SESSION_FILE_DIR"] = "./.flask_session/"

	Session(app)

	caches_folder = "./.server_cache/"
	if not os.path.exists(caches_folder):
		os.makedirs(caches_folder)

	app.run(debug=True)
