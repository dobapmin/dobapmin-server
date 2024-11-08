const express = require('express');
const path = require('path');

const app = express();

// build 폴더를 정적 파일로 서빙
app.use(express.static(path.join(__dirname, 'dist')));

// 모든 라우트에 대해 index.html을 반환
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
