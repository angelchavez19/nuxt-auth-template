export function useFormSubmit() {
  const loading = ref(false);

  async function handleSubmit<T>(
    callback: (data: T, actions: any) => Promise<void> | void,
    data: T,
    actions: any
  ) {
    loading.value = true;
    try {
      await callback(data, actions);
    } catch (error) {
      console.error("Error in form submission:", error);
    } finally {
      loading.value = false;
    }
  }

  return { loading, handleSubmit };
}
