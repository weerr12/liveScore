<script setup lang="ts">
</script>

<template>
  <section
    class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12"
  >
    <div class="container mx-auto px-6">
      <div class="text-center mb-8">
        <h1 class="text-5xl font-bold mb-4">⚽ Live Score</h1>
        <p class="text-xl opacity-90">
          ติดตามข้อมูลฟุตบอลและแมตช์วันนี้แบบเรียลไทม์
        </p>
      </div>

      <div class="flex justify-center">
        <div
          class="bg-gray-300 bg-opacity-10 backdrop-blur-sm rounded-2xl p-2 shadow-xl border border-white border-opacity-20"
        >
          <RouterLink
            to="/news"
            class="flex items-center space-x-3 px-3 py-2 rounded-xl text-white transition-all duration-300 group"
          >
            <div>
              <span class="text-lg text-black font-semibold">ข่าวสาร</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
