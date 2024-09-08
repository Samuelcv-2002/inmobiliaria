<script setup lang="ts">
import { ref } from 'vue';
import UseLogin from '../composables/UseLogin';


const {
    loginData,
    Login,
} = UseLogin()

const securePass = ref(true)

</script>

<template>
  <main id="cnt-Login">
    <article className="ContainerLogin">
      <div className="IconUser">
        <div>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
            </svg>
        </div>
      </div>
      <form @submit.prevent="Login" id="Login">
        <h1>Iniciar Sesión</h1>
        <label>
          <p>Usuario:</p>
          <input type="text" v-model="loginData.username" placeholder="Escribe tu nombre de usuario*" name="username" required/>
        </label>
        <label>
          <p>Contraseña:</p>
            <div id="contpass">
                <input :type="securePass ? 'password' : 'text'"  v-model="loginData.pass" placeholder="Escribe tu contraseña*" name="pass" required/>

                <button type="button" @click="securePass = !securePass" class="btn-securePass">
                    <svg v-if="securePass" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                        <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>

                    <svg v-else aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                    </svg>
                </button>
            </div>
        </label>

        <button class="hoverBtn" type="submit" id="enviar">Iniciar Sesion</button>
      </form>
    </article>
  </main>
</template>

<style scoped>
#cnt-Login {
  width: 100%;
  display: grid;
  min-height: 100vh;
  min-height: 100dvh;
  align-items: center;
  justify-content: center;
  background-image: #D2E0E9;
  position: relative;
  overflow: hidden;
  grid-template-rows: 1fr;
}

.ContainerLogin {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #ffffff9c;
  width: 60vw;
  height: 80vh;
  overflow: hidden;
  padding: 20px;
  border: solid 1px rgb(211, 211, 211);
  border-radius: 20px;
  box-shadow: 0px 0px 100px -6px rgba(0, 0, 0, 0.75);
  position: relative
}


.IconUser {
  display: grid;
  place-items: center;
  animation: slide-in-left .5s ease;
}

.IconUser div {
  background-color: #ff204c;
  padding: 20%;
  border-radius: 20px;
}

.IconUser svg {
  color: white;
  scale: 5;
}


#Login {
  font-family: monserat3;
  width: 100%;
  border-radius: 20px;
  padding: 10px;
  grid-template-rows: 40% 100px 100px 100px;
  z-index: 5;
  display: grid;
}

#Login {
  -webkit-animation: slide-in-rigth 0.45s ease-out both;
  animation: slide-in-rigth 0.45s ease-out both;
}

.ContainerLogin h1 {
  font-size: 30px;
  padding-bottom: 10px;
  color: var(--BgMenu);
  text-align: center;
  margin-top: 10px;
  align-self: center;
}

.ContainerLogin label {
  display: block;
  width: 90%;
  margin: 0 auto;
  text-align: center;
}

.ContainerLogin p {
  font-size: 14px;
  text-align: left;
}

.ContainerLogin input {
  background-color: #ffffff00;
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: solid rgb(161, 160, 160) 1px;
  margin-top: 10px;
  padding-left: 10px;
  margin-bottom: 20px;
  outline: none;
  font-weight: 400;
}

.ContainerLogin button {
  height: 45px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 10%;
  margin-top: 10px;
  background-color: black;
  border-radius: 10px;
  border: none;
  width: 80%;
  color: white;
  cursor: pointer;
  margin: 0 auto 10% auto;
}

#contpass{
    position: relative
}

#contpass button{
    position: absolute;
    width: 50px;
    right: 20px;
    height: 40px;
    top: 40%;
    transform: translateY(-50%);
    background-color: #d2e0e900
}

#contpass button svg{
    width: 100%;
    color: black;
}

@media screen and (max-width: 838px) {
    #cnt-Login{
        display: block;
    }
  .ContainerLogin {
    display: block;
    margin: 0 auto;
    height: 100vh;
    height: 100dvh;
    width: 80%;
  }

    .IconUser div {
    padding: 15%;
    }

    .IconUser svg {
    scale: 4;
    }

}
</style>
