from flask import render_template, current_app, abort

from . import main


@main.app_errorhandler(404)
def error_404(e):
    current_app.logger.error(e)
    return render_template('404.html')


@main.app_errorhandler(500)
def error_500(e):
    current_app.logger.error(e)
    return abort(500)
