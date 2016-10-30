from flask import Flask

from config import config

def create_app(config_name):
    """Creates Flask app."""
    app = Flask(__name__, static_url_path='')
    app.config.from_object(config[config_name])

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
