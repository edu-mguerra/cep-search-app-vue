<script setup lang="ts">
import { getCepData } from './serve/api';
import { ref } from 'vue';

const cep = ref('')
const dadosCep = ref<any>(null)
const erro = ref<string | null>(null)

const buscarCep = async () => {
  erro.value = null
  dadosCep.value = null

  try {
    const response = await getCepData(cep.value);
    dadosCep.value = response.data
  } catch (err) {
    erro.value
  }
}
</script>

<template>
  <div class="container flex flex-col items-center justify-center p-4 bg-black">
    <h3 class="pb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-custom-size">Buscar Informações pelo CEP</h3>

    <input v-model="cep" placeholder="Digite o CEP" @keyup.enter="buscarCep"
      class="text-black font-bold text-sm sm:text-base md:text-lg lg:text-3xl p-4 rounded-2xl w-full max-w-md input-custom-size input-response" />
    <button @click="buscarCep"
      class="bg-yellow-500 text-sm sm:text-base md:text-lg lg:text-3xl px-6 py-3 mt-4 rounded-lg w-full max-w-md text-black btn-custom-size">
      Buscar
    </button>

    <div v-if="erro" class="mt-4 text-red-500 text-sm sm:text-base md:text-lg lg:text-xl text-custom-size">
      {{ erro }}
    </div>

    <table v-if="dadosCep"
      class="flex flex-wrap justify-center items-center mx-auto w-full border-separate border-spacing-4 responsive-table">
      <tbody>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">CEP:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.cep }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">Endereço:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.address }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">Bairro:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.district }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">Cidade:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.city }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">Estado:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.state }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">DDD:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.ddd }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">Latitude:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.lat }}
          </td>
        </tr>
        <tr class="w-full md:w-1/2">
          <td class="font-bold text-sm sm:text-base md:text-lg lg:text-3xl text-custom-size">Longitude:</td>
          <td class="text-sm sm:text-base md:text-lg lg:text-3xl pl-4 overflow-hidden text-ellipsis whitespace-nowrap text-custom-size">
            {{ dadosCep.lng }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.responsive-table td {
  padding: 8px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (min-width: 320px) and (max-width: 426px) {

  .input-response {
    width: 200px;
    height: 0px;
  }

  .btn-custom-size {
    width: 200px;
    padding: 4px;
  }

  .responsive-table {
    height: 200px;
  }

  .responsive-heading {
    font-size: 1rem;
  }

  .responsive-input {
    font-size: 0.875rem;
  }

  .responsive-btn {
    font-size: 0.875rem;
  }

  .responsive-text {
    font-size: 0.875rem;
  }

  .responsive-table {
    display: block;
    overflow-y: auto;
    width: 100%;
  }

  .responsive-table thead {
    display: none;
  }

  .responsive-table tbody {
    display: block;
  }

  .responsive-table tr {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ddd;
    margin-bottom: 8px;
  }

  .responsive-table td {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    .input-response {
      width: 200px;
      height: 0px;
    }
    
    .btn-custom-size {
      width: 200px;
      padding: 4px;
    }
    
    .responsive-table {
      height: 150px;
    }
  }
}
</style>
