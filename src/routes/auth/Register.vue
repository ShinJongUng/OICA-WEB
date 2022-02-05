<template>
  <div class="container-md">
    <h1>회원가입</h1>

    <form @submit.prevent="userRegistration">
      <div class="mb-3">
        <label
          class="form-label">이름</label>
        <input
          type="name"
          class="form-control"
          v-model="user.name" />
      </div>
      <div class="mb-3">
        <label
          class="form-label">이메일 주소</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model="user.email" />
        <div
          id="emailHelp"
          class="form-text">
          이메일은 타인에게 유출되지 않으며, 로그인 시에만 사용 됩니다.
        </div>
      </div>
      <div class="mb-3">
        <label
          class="form-label">비밀번호</label>
        <input
          type="password"
          class="form-control"
          v-model="user.password" />
      </div>
      <button
        @click="register"
        class="btn btn-primary">
        회원가입
      </button>
    </form>
  </div>
</template>


<script>
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default {
  data() {
    return{
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    userRegistration() {
      createUserWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
      .then((res) => {
      updateProfile(getAuth().currentUser, {
        displayName: this.user.name
        }).then(() => {
          alert('정상 가입 되셨습니다.');
          this.$router.push('/')
          
          })
          .catch((error) => {
            alert(error.message);
        });
      })
      .catch((error) => {
        alert(error.message);
        
      });
    }
  }
}
</script>





<style scoped lang="scss">
  .container-md{
    h1{
      margin-bottom: 50px;
      font-weight: 600;
    }
    input{
      width:50%;
    }
    font-family: 'Nanum Gothic', sans-serif;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media(max-width: 1500px){
    .container-md{
    input{
      width:100%;
    }
  }
  }
</style>