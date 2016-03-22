import os
from flask_frozen import Freezer
from app import app

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
    with open('build/CNAME', 'w') as cname_file:
        print >>cname_file, 'patestevao.com'
