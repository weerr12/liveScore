<script setup lang="ts"></script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-200 to-slate-50">
    <nav
      class="bg-white shadow-md h-18 px-16 flex items-center justify-between mx-auto"
    >
      <div class="text-2xl font-bold text-blue-500">MyLogo</div>
      <div class="flex space-x-8">
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>
      <div class="flex space-x-4">
        <div>Login</div>
        <div>Register</div>
      </div>
    </nav>
    <div class="container mx-auto px-4 py-4">
      <div class="grid grid-cols-3 gap-8 mt-8">
        <div class="bg-red-500 w-32 h-32"></div>
        <div class="bg-green-500 w-32 h-32"></div>
        <div class="bg-blue-500 w-32 h-32"></div>
        <div class="bg-yellow-500 w-32 h-32"></div>
      </div>
    </div>
  </div>
</template>
