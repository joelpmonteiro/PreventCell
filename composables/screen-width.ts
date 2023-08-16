export function useScreenWidth() {
  const screen = ref<number>(0);

  onBeforeMount(() => {
    screen.value = window.innerWidth;
    console.log(screen.value);
    window.addEventListener("resize", onResize);
  });

  const onResize = (event: any) => {
    screen.value = event.target.innerWidth;
  };

  return screen;
}
