from flask import Flask, render_template

app = Flask(__name__, static_url_path='')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/')
def index2():
	return render_template('index.html')

@app.route('/infograficos/')
def infograficos():
	return render_template('infograficos.html')	

@app.route('/contact/')
def contact():
	return render_template('contact.html')

@app.route('/404.html')
def error_404():
	return render_template('404.html')	

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)