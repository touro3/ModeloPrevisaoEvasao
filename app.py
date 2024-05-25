from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    # Ler os dados preditivos
    df = pd.read_csv('students_dropout_probabilities.csv')
    students = df.to_dict(orient='records')
    return render_template('index.html', students=students)

if __name__ == '__main__':
    app.run(debug=True)
