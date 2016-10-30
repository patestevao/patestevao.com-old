#!/usr/bin/env python
import os
import logging
from logging.handlers import WatchedFileHandler
from flask_script import Manager, Shell
from flask_assets import Environment, Bundle

from app import create_app

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)
assets = Environment(app)


@app.before_first_request
def setup_logging():
    """Setup logging."""
    file_handler = WatchedFileHandler('flask_patestevao.com.log')
    formatter = logging.\
        Formatter("%(asctime)s - %(name)s - %(levelname)s - %(message)s")
    file_handler.setFormatter(formatter)
    file_handler.setLevel(logging.INFO)
    app.logger.addHandler(file_handler)

if os.getenv('FLASK_CONFIG') == 'production':
    css = Bundle('css/foundation.css', 'css/normalize.css', 'css/app.css',
                 output='css/all.min.css', filters='cssmin')
    assets.register('css_all', css)
else:
    css = Bundle('css/foundation.css', 'css/normalize.css', 'css/app.css')
    assets.register('css_all', css)


def make_shell_context():
    return dict(app=app)
manager.add_command("shell", Shell(make_context=make_shell_context))

if __name__ == '__main__':
    manager.run()
