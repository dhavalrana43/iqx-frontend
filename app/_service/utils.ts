import { commonBlocks } from "./common/common-blocks";

export const getFilteredBlocks = (components: string[]) => ({
  on: Object.fromEntries(
    Object.entries(commonBlocks.on).filter(([key]) => components.includes(key)),
  ),
});
