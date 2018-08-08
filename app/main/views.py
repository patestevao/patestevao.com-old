from flask import render_template, redirect, url_for

from . import main


@main.route('/')
def index():
    return render_template('index.html')

@main.route('/work/')
def work():
	return render_template('work.html')

@main.route('/portfolio/')
def portfolio():
	return redirect(url_for('main.work')), 301

