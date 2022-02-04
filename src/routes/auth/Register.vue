<template>
  <div class="container-md">
    <h1>회원가입</h1>

    <form>
      <div class="mb-3">
        <label
          class="form-label">이메일 주소</label>
        <input
          type="email"
          name="email"
          class="form-control"
          v-model="email" />
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
          v-model="password" />
      </div>
      <button
        @click="register"
        type="submit"
        class="btn btn-primary">
        회원가입
      </button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from 'vue-router'
  const email = ref('')
  const password = ref('')
  const auth = getAuth();
  const router = useRouter();
  const errMsg = ref()
  const register = () =>{
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    alert('정상적으로 가입 되셨습니다.');
    router.push('/auth/login')
  })
  .catch((error) => {
    switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = '잘못된 이메일 형식 입니다.'
              break
          case 'auth/user-not-found':
              errMsg.value = '이메일 주소를 확인 해주세요'
              break
          case 'auth/weak-password':
              errMsg.value = '안전한 비밀번호로 만들어주세요'
              break
          case 'auth/too-many-requests':
              errMsg.value = '접속 시도를 너무 많이 하셨습니다.'
              break
          case 'auth/email-already-in-use':
              errMsg.value = '이미 존재하는 이메일 계정입니다.'
              break
          default:
              errMsg.value = error.code;
              break
        }
    alert(errMsg.value);
    console.log(error.code)
    // ..
  });
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