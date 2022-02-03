<template>
  <div class="container-md">
    <div class="main-title">
      교직원 소개
    </div>
    <hr />
    
    <div class="block">
      <div class="card">
        <div class="card-header">
          교장<span class="eng-head">(principal)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            허남길
          </h5>
          <p class="card-text">
            학교 총괄
          </p>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="card">
        <div class="card-header">
          교감<span class="eng-head">(Vice-Principal)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            신은경
          </h5>
          <p class="card-text">
            학교 총괄, 수학, 영어
          </p>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="card">
        <div class="card-header">
          국어 선생님<span class="eng-head">(Korean teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            김새롬
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          수학 선생님<span class="eng-head">(Math teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            강태정
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          과학 선생님<span class="eng-head">(Science teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            김여진
          </h5>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="card">
        <div class="card-header">
          영어 선생님<span class="eng-head">(English teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            Jennifer
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          영어 선생님<span class="eng-head">(English teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            엄성희
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          미술 선생님<span class="eng-head">(Art teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            신성순
          </h5>
        </div>
      </div>
    </div>
    <div class="block">
      <div class="card">
        <div class="card-header">
          컴퓨터 선생님<span class="eng-head">(Computer teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            신종웅
          </h5>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          도덕 선생님<span class="eng-head">(Ethics teacher)</span>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            신병준
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap');
  .container-md{
    font-family: 'Nanum Gothic', sans-serif;
    .main-title{
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 20px;
    }
    hr{
      margin-bottom: 60px;
    }
    .block{
      text-align: center;
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 50px;
      .card{
        margin: 0 auto;
        width: 30%;
        .card-title{
          font-weight: 600;
          font-size: 25px;
          margin-bottom: 20px;
        }
        .card-body{
          font-weight: 400;
          font-size: 15px;
        }
      }
    }
    @media (max-width: 1000px) {
      .eng-head{
        display: none;
      }
    }
  }
  
</style>