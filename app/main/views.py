from flask import render_template

from . import main


@main.route('/')
def index():
    return render_template('index.html')


@main.route('/infograficos/')
def infograficos():
	return render_template('infograficos.html')


@main.route('/contact/')
def contact():
	return render_template('contact.html')
