export function useScreenWidth() {
  const screen = ref<number>(0);

  onBeforeMount(() => {
    screen.value = window.innerWidth;
    window.addEventListener("resize", onResize);
  });

  const onResize = (event: any) => {
    screen.value = event.target.innerWidth;
  };

  return screen;
}
