from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index.html')
def index2():
	return render_template('index.html')

@app.route('/contact.html')
def contact():
	return render_template('contact.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)