import { ref } from "vue";

export function useFetch() {
    const loading = ref(false);
    const fetchData = async () => {
        loading.value = true;
        try {
            // const res = await 

        } catch (error) {
            console.log("Error fetching data:", error);
        } finally {
            loading.value = false;
        }
    }

    return {
        loading,
        fetchData
    };
}
