const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
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
            'id': 3,
            'image': 'https://picsum.photos/id/23/64/64',
            'name': '성춘향',
            'birthday': '960521',
            'gender': '여자',
            'job': '연예인'
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));