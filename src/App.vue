<script setup lang="ts">
import './style.css'
import Infos from './components/infos.vue';
</script>

<template>
  <div class="bg-black h-screen w-screen flex flex-col items-center justify-center response">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center bg-black">
      <div class="text-yellow-500">
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-6">
          Busca Cep
        </h1>
        <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pb-4">
          Insira o seu cep e descubra os dados relacionados
        </p>
      </div>
    </div>
  
    <div class="bg-black text-yellow-500 flex justify-center items-center max-w-5xl border-2 border-solid border-yellow-600 rounded-3xl p-10 overflow-y-auto alt">
      <Infos/>
    </div>
  </div>
</template>

<style scoped>

.text-5xl {
  font-size: 3rem; 
}

.text-6xl {
  font-size: 4rem; 
}

.text-2xl {
  font-size: 1.5rem; 
}

.text-3xl {
  font-size: 2rem; 
}

.text-4xl {
  font-size: 2.5rem; 
}

.py-6 {
  padding-top: 2rem; 
  padding-bottom: 2rem; 
}

.pb-10 {
  padding-bottom: 2.5rem; 
}

.max-w-5xl {
  max-width: 80%; 
}

.p-6 {
  padding: 1.5rem; 
}

.border-2 {
  border-width: 2px; 
}

.container {
  padding-left: 2rem; 
  padding-right: 2rem; 
}

@media (min-width: 320px) and (max-width: 425px) {

 .alt {
  padding: 20px;
 }
  
  .text-5xl {
    font-size: 2.5rem; 
  }
  
  .text-6xl {
    font-size: 3rem; 
  }
  
  .text-2xl {
    font-size: 1.25rem; 
  }
  
  .text-3xl {
    font-size: 1.5rem; 
  }
  
  .text-4xl {
    font-size: 2rem; 
  }

  .py-6 {
    padding-top: 1rem; 
    padding-bottom: 1rem; 
  }

  .pb-10 {
    padding-bottom: 1.5rem; 
  }

  .max-w-5xl {
    max-width: 90%; 
  }

  .p-6 {
    padding: 1rem; 
  }

  .border-2 {
    border-width: 1px; 
  }

  .container {
    padding-left: 1rem; 
    padding-right: 1rem; 
  }
}

</style>
