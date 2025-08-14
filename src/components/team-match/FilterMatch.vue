<script setup lang="ts">

const props = defineProps<{
    matchStats: {
        total: number;
        upcoming: number;
        completed: number;
    };
    selectedFilter: string; // 'all', 'upcoming', 'completed'
}>();

const emit = defineEmits<{
    (e: 'filterChange', filter: string): void;
}>();

const handleFilterChange = (filter: string) => {
    emit('filterChange', filter);
};
</script>

<template>
  <div class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex space-x-1 py-4">
        <button
          @click="handleFilterChange('all')"
          class="px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 filter-btn-active"
          :class="
            selectedFilter === 'all'
              ? 'bg-blue-100 text-blue-700 shadow-md'
              : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
          "
        >
          <span>ทั้งหมด</span>
          <span
            class="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded-full"
            >{{ matchStats.total }}</span
          >
        </button>

        <button
          @click="handleFilterChange('upcoming')"
          class="px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 filter-btn-active"
          :class="
            selectedFilter === 'upcoming'
              ? 'bg-yellow-100 text-yellow-700 shadow-md'
              : 'text-gray-600 hover:bg-gray-50 hover:text-yellow-600'
          "
        >
          <span>กำลังจะแข่ง</span>
          <span
            class="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full"
            >{{ matchStats.upcoming }}</span
          >
        </button>

        <button
          @click="handleFilterChange('completed')"
          class="px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 filter-btn-active"
          :class="
            selectedFilter === 'completed'
              ? 'bg-green-100 text-green-700 shadow-md'
              : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'
          "
        >
          <span>จบแล้ว</span>
          <span
            class="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full"
            >{{ matchStats.completed }}</span
          >
        </button>
      </div>
    </div>
  </div>
</template>
