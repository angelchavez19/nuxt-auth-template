export function useFormSubmit() {
  const loading = ref(false);

  async function handleSubmit<T>(
    data: T,
    callback: (data: T) => Promise<void> | void
  ) {
    loading.value = true;
    try {
      await callback(data);
    } catch (error) {
      console.error("Error in form submission:", error);
    } finally {
      loading.value = false;
    }
  }

  return { loading, handleSubmit };
}
