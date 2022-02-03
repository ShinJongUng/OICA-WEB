<template>
  <div class="container-md">
    <div class="main-title">
      학교 시설
    </div>
    <hr />
  
    <h3>온누리 크리스천 학교 본관</h3>
    <img
      src="../../assets/img/학교사진2.jpg"
      class="img-fluid"
      alt="온누리국제학교본관" />
    <h3>본관 입구</h3>
    <img
      src="../../assets/img/학교사진1.jpg"
      class="img-fluid"
      alt="본관 입구" />
    <h3>2층 강당</h3>
    <img
      src="../../assets/img/2층강당.jpg"
      class="img-fluid"
      alt="2층 강당" />
    <h3>2층 복도</h3>
    <img
      src="../../assets/img/2층복도.jpg"
      class="img-fluid"
      alt="2층 복도" />
    <h3>도서실</h3>
    <img
      src="../../assets/img/도서관.jpg"
      class="img-fluid"
      alt="도서실" />
    <h3>3층 복도</h3>
    <img
      src="../../assets/img/3층복도.jpg"
      class="img-fluid"
      alt="도서실" />
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
  .container-md{
    font-family: 'Nanum Gothic', sans-serif;
    text-align: center;
    .main-title{
    font-size: 40px;
    font-weight: 600;
    
    margin-top: 50px;
    margin-bottom: 20px;
    }
    hr{
      margin-bottom: 60px;
    }
    h3{
      margin-top: 100px;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: 600;
    }
    img{
      width: 70%;
    }
    
    @media (max-width: 1000px) {
      img{
      width: 100%;
      }
    }
  }
  
</style>