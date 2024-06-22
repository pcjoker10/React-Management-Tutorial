import './App.css';
import Customer from './componets/Customer';

const customers = [
{
  'id': 1,
  'image': 'https://picsum.photos/id/60/64/64',
  'name': '홍길동',
  'birthday': '961211',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/id/54/64/64  ',
  'name': '전우치',
  'birthday': '9960125',
  'gender': '남자',
  'job': '회사원'
},
{
  'id': 1,
  'image': 'https://picsum.photos/id/23/64/64',
  'name': '성춘향',
  'birthday': '960521',
  'gender': '여자',
  'job': '연예인'
},
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />  
          );
        })
      }
    </div>
  );
}

export default App;
