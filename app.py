from flask import Flask, render_template, request,redirect,url_for
import pandas as pd
import os

app = Flask(__name__)

@app.route('/')
def index():
    df_prob = pd.read_csv('students_dropout_probabilities.csv')
    df_feedback = pd.read_csv('students_feedback.csv')
    
    df_prob = df_prob.sort_values(by='probability', ascending=False)
    
    df = pd.merge(df_prob, df_feedback, on='name', how='left')
    students = df.to_dict(orient='records')
    
    return render_template('index.html', students=students)

@app.route('/other')
def other():
    return render_template('other.html')

@app.route('/adicionar-aluno', methods=['POST'])
def adicionar_aluno():
    nome = request.form['nome']
    desempenho = request.form['desempenho']
    filepath = 'students_feedback.csv'  # Verifique o caminho do seu arquivo CSV

    # Certifique-se de que o arquivo existe e então adicione dados a ele
    if os.path.exists(filepath):
        df = pd.read_csv(filepath)
        new_data = pd.DataFrame({'name': [nome], 'feedback': [desempenho]})
        df = pd.concat([df, new_data], ignore_index=True)  # Uso do concat ao invés de append
        df.to_csv(filepath, index=False)
    else:
        return "Erro: O arquivo CSV não existe.", 404  # Personalize a resposta conforme necessário

    return redirect(url_for('index'))  # Redireciona de volta para a página de adição de alunos após a submissão

@app.route('/calendar')
def calendar():
    return render_template('calendar.html')

if __name__ == "__main__":
    app.run(debug=True)
