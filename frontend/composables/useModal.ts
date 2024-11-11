interface ModalStates {
  [_: string]: never | boolean;
}

export default ({
  name,
  closeOnDestroy = false,
}: {
  name: string;
  closeOnDestroy?: boolean;
}) => {
  const openModalNames = useState<ModalStates>("openModalNames", () => ({}));

  const open = () => {
    try {
      openModalNames.value[name] = true;
      document.body.style.setProperty("overflow", "hidden");
    } catch (error) {
      console.error(error);
    }
  };

  const close = () => {
    try {
      openModalNames.value[name] = false;
      document.body.style.setProperty("overflow", "auto");
    } catch (error) {
      console.error(error);
    }
  };

  const toggle = () => {
    try {
      openModalNames.value[name] = !openModalNames.value[name];

      document.body.style.setProperty(
        "overflow",
        document.body.style.getPropertyValue("overflow") === "auto"
          ? "hidden"
          : "auto"
      );
    } catch (error) {
      console.error(error);
    }
  };

  onUnmounted(() => {
    try {
      document.body.style.setProperty("overflow", "auto");

      if (closeOnDestroy) {
        close();
      }
    } catch (error) {
      console.error(error);
    }
  });

  onBeforeUnmount(() => {
    try {
      if (closeOnDestroy) {
        const pre: ModalStates = {};
        Object.entries(openModalNames.value).forEach(([key, value]) => {
          if (key !== name) {
            pre[key as keyof ModalStates] = value;
          }
        });

        document.body.style.setProperty("overflow", "auto");
        openModalNames.value = {};
      }
    } catch (error) {
      console.error(error);
    }
    document.body.style.setProperty("overflow", "auto");
    //  "overflow:auto";
  });

  const isOpen = computed((): boolean => openModalNames.value[name]);

  return { openModalNames, isOpen: isOpen, close, open, toggle };
};
