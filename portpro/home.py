from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = '555'

@app.route('/')
def index():
    return render_template('index.html')

app.run()
