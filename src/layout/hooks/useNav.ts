import { computed } from "vue";
import { useGlobal } from "@pureadmin/utils";

export function useNav() {
  const { $storage, $config } = useGlobal<GlobalPropertiesApi>();

  const layout = computed(() => {
    return $storage?.layout?.layout;
  });

  const title = computed(() => {
    return '工具管理后台';
  });

  return {
    title,
    layout,
  };
}
