from dotenv import load_dotenv
from flask import Flask, send_file
from flaskext.mysql import MySQL
import os

load_dotenv('.env')

app = Flask(__name__,
        static_url_path='', 
        static_folder='../public'
        )

@app.route('/')
def root():
  return send_file('../public/index.html')
