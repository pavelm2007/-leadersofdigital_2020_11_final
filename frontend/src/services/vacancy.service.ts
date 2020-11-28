import axios from 'axios'
import { IVacancyItem } from '../components/vacancies';
import { IVacancyDetail } from '../types';

const API_URL = 'http://localhost:8080/api/vacancies/'

// class VacancyService {
//   list() {
//     return axios
//       .post(API_URL)
//       .then(r => r.json())
//   }
// }

const description = 'Мы разрабатываем решения для розничного блока и ищем в команду опытного ' +
  'разработчика Front-end (REACT). Мы работаем по методологии Agile, используя современный стек разработки.'

class FakeVacancyService {
  list() {
    let timeInMs = Date.now();
    const promise = new Promise<Array<IVacancyItem>>((resolve, reject) => {
      const result = [
        {id: 1,title: 'Разработчик Front-end (REACT)', description: description, 'created': '1976-04-19T12:59-0500'},
        {id: 2,title: 'Разработчик Front-end (REACT)', description: description, 'created': '1976-04-19T12:59-0500'},
        {id: 3,title: 'Разработчик Front-end (REACT)', description: description, 'created': '1976-04-19T12:59-0500'}
      ]
      resolve(result)
    })
    return promise.then(r=> r)
  }
  detail(id: number) {
    const promise = new Promise<IVacancyDetail>((resolve, reject) => {
      const result = {id: 1,title: 'Разработчик Front-end (REACT)', description: description, 'created': '1976-04-19T12:59-0500'}
      resolve(result)
    })
    return promise.then(r=> r)
  }
}

// export type TVacancyService = VacancyService
export type TVacancyService = FakeVacancyService
// export default new VacancyService()
export default new FakeVacancyService()
