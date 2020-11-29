# Функция для модуля поиска кандидатов для вакансии в базе резюме

import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


def clean_text(text):
    # убираем знаки препинания, переводим в нижний регистр
    text = text.str.replace("[^a-zA-Zа-яА-ЯёЁ0-9#]", " ").str.lower()
    text = text.apply(lambda x: ' '.join(x.split()))
    return text

def train():
    # сейчас загружается с диска, после интеграции в систему из базы данных
    resume_db = pd.read_csv('resume_db.csv', sep='|', index_col = 0)    
    # фио и специальность как метки
    train_label = pd.DataFrame()
    train_label['label'] = resume_db['name'] + " - "  + resume_db['vacancy'] 
    # загрузка текста из резюме
    train_text = resume_db['text'] + resume_db['key_skills']
    train_text = clean_text(train_text)
    # текст в матрицу tf-idf
    tfidf = TfidfVectorizer()
    train_tf = tfidf.fit_transform(train_text)
    
    return train_label, train_tf, tfidf

def find_similarity(train_label, train_tf, tfidf):
    # загрузка вакансии для поиска с диска, после интеграции в систему из БД
    test = pd.read_csv('demands_dict.csv', sep='|', index_col = 0)[0:1]
    test_text = clean_text(test_text)
    test_tf = tfidf.transform(test_text)
    # нахождение косинусного расстояния вакансии с каждым резюме
    cosine_similarities = cosine_similarity(test_tf, train_tf).flatten()    
    train_label['cos_similarities'] = cosine_similarities
    train_label = train_label.sort_values(by=['cos_similarities'], ascending=[0])
 
    return train_label

if __name__ == "__main__": 
    train_label = find_similarity(train()) 
    # выводим 3 результата
    for index, row in train_label[0:3].iterrows():
        print(row['label'], round(row['cos_similarities'], 2))
