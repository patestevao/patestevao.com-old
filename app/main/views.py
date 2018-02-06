from flask import render_template

from . import main


@main.route('/')
def index():
    return render_template('index.html')


@main.route('/portfolio/')
def portfolio():
	return render_template('portfolio.html')

@main.route('/hire-me/')
def hireme():
	return render_template('hireme.html')
